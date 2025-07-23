"use client";

import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { Button } from "@/components/ui/button";
import { addToCart } from "./cartSlice"; // তোমার সঠিক path দিতে হবে
import { useRouter } from "next/navigation";

import { IProduct } from '@/types'

export interface CartProduct extends IProduct {
  _id: string            // নিশ্চিত করো non-optional
  countInStock: number   // non-optional
  images: string[]       // থাকুক
}


// প্রপসের টাইপ
interface Props {
  product: IProduct;
}

const AddToCart: React.FC<Props> = ({ product }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const router = useRouter()
  // যখন Add to Cart ক্লিক হবে, তখন quantity সহ ডাটা dispatch করবে
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product._id,
        productId: product._id,
        name: product.name,
        price: product.price,
        images: product.images,
        quantity: quantity,
      })
    );
  };

  const handleBuyNow = () => {
    handleAddToCart()
    router.push('/checkout')
  }

  return (
    <div className="flex flex-col gap-3 space-y-4">
      <span className="text-xl text-green-500">In Stock: {product.countInStock}</span>
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

      <Button className="bg-yellow-400 hover:bg-yellow-400 text-white cursor-pointer " onClick={handleAddToCart} disabled={product.countInStock === 0}>
        {product.countInStock === 0 ? "Out of Stock" : "Add to Cart"}
      </Button>

      <Button className="cursor-pointer" onClick={handleBuyNow} disabled={product.countInStock === 0}>
        {product.countInStock === 0 ? "Out of Stock" : "Buy Now"}
      </Button>

    </div>
  );
};

export default AddToCart;
