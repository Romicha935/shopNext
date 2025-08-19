"use client";

import { useEffect, useState } from "react";

interface Product {
  _id: string;
  name: string;
  category: string;
  price: number;
}

export default function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("/api/products/featured")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Featured Products</h1>
      <ul className="grid grid-cols-2 gap-4">
        {products.map((p) => (
          <li key={p._id} className="p-4 border rounded-lg shadow">
            <h2 className="text-lg font-semibold">{p.name}</h2>
            <p className="text-sm text-gray-600">Category: {p.category}</p>
            <p className="font-bold">${p.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
