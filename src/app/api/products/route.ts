import { NextResponse } from "next/server"
import clientPromise from "@/lib/db/mongodb"

export async function GET(request: Request) {
  const url = new URL(request.url)
  const tag = url.searchParams.get("tag")

  try {
    const client = await clientPromise
    const db = client.db(process.env.MONGODB_DB ?? "nextShop")

    const collectionName = tag === "todays-deal" ? "todays-deal" : "products"

    const products = await db
      .collection(collectionName)
      .find(tag ? { tags: tag } : {})
      .toArray()

    // MongoDB ObjectId -> string এ কনভার্ট করা জরুরি
    const formattedProducts = products.map((p) => ({
      ...p,
      _id: p._id.toString(),
    }))

    return NextResponse.json(formattedProducts)
  } catch (error) {
    console.error("API error:", error)
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    )
  }
}
