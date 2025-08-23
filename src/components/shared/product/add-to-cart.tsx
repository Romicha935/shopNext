
"use client"
import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import Swal from "sweetalert2"
import { IProduct } from "@/types"
import { addToCart } from "./cartSlice"

type Props = { product: IProduct }

export default function AddToCart({ product }: Props) {
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(1)
  const router = useRouter()

  const handleAddToCart = async () => {
    // 1) Local Redux (instant UI)
    dispatch(
      addToCart({
        id: String(product._id),
        productId: String(product._id),
        name: product.name,
        price: product.price,
        images: product.images,
        quantity,
      })
    )

    // 2) Server cart persist
    try {
      await fetch("/api/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId: String(product._id),  // অথবা slug: product.slug
          slug: product.slug,
          name: product.name,              // fallback for local-only product
          price: product.price,
          images: product.images,
          quantity,
        }),
        cache: "no-store",
      })
    } catch (e) {
      console.error(e)
    }

    Swal.fire({
      icon: "success",
      title: "Added to Cart",
      text: `${product.name} has been added to your cart!`,
      timer: 1500,
      showConfirmButton: false,
    })
  }

  const handleBuyNow = async () => {
    await handleAddToCart()
    router.push("/cart") // বা '/checkout'
  }

  return (
    <div className="flex flex-col gap-3">
      <span className="text-xl text-green-500">
        In Stock: {product.countInStock}
      </span>

      <div className="flex items-center gap-2">
        <label>Quantity:</label>
        <input
          type="number"
          min={1}
          max={product.countInStock}
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="border rounded px-2 w-16"
        />
      </div>

      <Button
        className="bg-yellow-400 hover:bg-yellow-400 text-white cursor-pointer"
        onClick={handleAddToCart}
        disabled={product.countInStock === 0}
      >
        {product.countInStock === 0 ? "Out of Stock" : "Add to Cart"}
      </Button>

      <Button className="cursor-pointer" onClick={handleBuyNow} disabled={product.countInStock === 0}>
        {product.countInStock === 0 ? "Out of Stock" : "Buy Now"}
      </Button>
    </div>
  )
}
