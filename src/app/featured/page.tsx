// src/app/search/page.tsx
import clientPromise from "@/lib/db"
import { IProduct } from "@/types"
import ProductCard from "@/components/product-card"
import { Filter } from "mongodb"
import Sidebar from "@/components/sidebar/sidebar"

export const dynamic = "force-dynamic" 


interface SearchPageProps {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams   
  const q = params?.q as string | undefined
  const category = params?.category as string | undefined
  const price = params?.price as string | undefined

  const client = await clientPromise
  const db = client.db(process.env.MONGODB_DB ?? "nextShop")

  const query: Filter<IProduct> = {}

  if (q) query.name = { $regex: q, $options: "i" }
  if (category && category !== "all") query.category = category
  if (price && price !== "all") {
    const [min, max] = price.split("-").map(Number)
    query.price = { $gte: min, $lte: max }
  }

  const products = await db
    .collection<IProduct>("products")
    .find(query)
    .toArray()

  return (
    <main className="min-h-screen bg-gray-100 py-6">
      <div className="max-w-7xl mx-auto px-4 flex gap-6">
        {/* Sidebar */}
        <Sidebar />

        {/* Product Grid */}
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-6">Search Results</h1>

          {products.length === 0 ? (
            <p className="text-gray-600">No products found.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
      </div>
    </main>
  )
}
