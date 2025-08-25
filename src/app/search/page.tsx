import { getAllProducts } from "@/lib/utils.server";
import Image from "next/image";
import Link from "next/link";

interface SearchParams {
  q?: string;
  category?: string;
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams?: SearchParams;
}) {
  const query = searchParams?.q?.toLowerCase() || "";
  const category = searchParams?.category || "all";

  const allProducts = await getAllProducts();

  const filteredProducts = allProducts.filter((p) => {
    const productName = p.name?.toLowerCase() || "";
    const productCategory = p.category?.toLowerCase() || "";

    const matchQuery = query ? productName.includes(query) : true;
    const matchCategory =
      category === "all" || productCategory === category.toLowerCase();

    return matchQuery && matchCategory;
  });

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Search Results</h1>
      <p className="mb-4">
        Showing results for: <b>{query || "All"}</b> in <b>{category}</b>
      </p>

      {filteredProducts.length === 0 ? (
        <p className="text-red-500">❌ No products found.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {filteredProducts.map((product) => (
            <Link
              key={product._id}
              href={`/product/${product.slug}`}
              className="border rounded p-3 hover:shadow-lg bg-white"
            >
              <Image
                src={product.images?.[0] || "/no-image.png"}
                alt={product.name || "No Name"}
                className="h-32 w-full object-cover mb-2"
              />
              <h2 className="font-semibold">{product.name}</h2>
              <p className="text-gray-600">${product.price}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
