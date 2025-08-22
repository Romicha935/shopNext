import { NextResponse } from 'next/server'
import clientPromise from '@/lib/db/mongodb'

export async function GET(request: Request) {
  const url = new URL(request.url)
  const tag = url.searchParams.get("tag") 

  try {
    const client = await clientPromise
    const db = client.db("nextShop")
    const collectionName = tag === "todays-deal" ? "todays-deal" : "products"

    const products = await db
      .collection(collectionName)
      .find(tag ? { tags: tag } : {})
      .toArray()

    const formattedProducts = products.map(p => ({ ...p, _id: p._id.toString() }))
    return NextResponse.json(formattedProducts)
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 })
  }
}
