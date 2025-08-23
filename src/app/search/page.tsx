import clientPromise from "@/lib/db"
import { IProduct } from "@/types"
import ProductCard from "@/components/product-card"

export const dynamic = "force-dynamic"

interface SearchPageProps {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams
  const tag = params?.tag as string | undefined

  const client = await clientPromise
  const db = client.db(process.env.MONGODB_DB ?? "nextShop")

  let products: IProduct[] = []

  const collections = ["featured-products", "todays-deal", "best-selling"]
  for (const col of collections) {
    const found = await db
      .collection<IProduct>(col)
      .find(tag ? { tags: tag } : {})
      .toArray()
    products = [...products, ...found]
  }

  return (
    <main className="min-h-screen bg-gray-100 py-6">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-2xl font-bold mb-6">
          {tag ? `Products tagged: "${tag}"` : "All Products"}
        </h1>

        {products.length === 0 ? (
          <p className="text-gray-600">No products found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((p) => (
              <ProductCard
                key={p._id.toString()}
                product={{
                  _id: p._id,
                  slug: p.slug,
                  title: p.name,
                  price: p.price,
                  dealPrice: p.listPrice < p.price ? p.listPrice : undefined,
                  image: p.images[0],
                  category: p.brand,
                }}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
