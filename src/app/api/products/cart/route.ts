import { NextResponse } from "next/server"
import clientPromise from "@/lib/db/mongodb"

export async function GET(request: Request) {
  const url = new URL(request.url)
  const email = url.searchParams.get("email")

  if (!email) {
    return NextResponse.json({ error: "Email required" }, { status: 400 })
  }

  try {
    const client = await clientPromise
    const db = client.db("nextjs-nextShop")

    const cart = await db.collection("carts").findOne({ email })

    return NextResponse.json({ products: cart?.products ?? [] })
  } catch (error) {
    console.error("Cart fetch error:", error)
    return NextResponse.json({ error: "Failed to fetch cart" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const { email, product } = await request.json()

    if (!email || !product) {
      return NextResponse.json({ error: "Email and product required" }, { status: 400 })
    }

    const client = await clientPromise
    const db = client.db("nextjs-nextShop")

    await db.collection("carts").updateOne(
      { email },
      { $addToSet: { products: product } },
      { upsert: true }
    )

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Cart update error:", error)
    return NextResponse.json({ error: "Failed to update cart" }, { status: 500 })
  }
}