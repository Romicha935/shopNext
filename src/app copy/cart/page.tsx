"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Image from "next/image";

type Product = {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  images?: string[];
};

export default function CartPage() {
  const [items, setItems] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        
        router.push("/sign-in");
      } else {
        
        fetch(`/api/cart?email=${user.email}`)
          .then((res) => res.json())
          .then((data) => {
            setItems(Array.isArray(data.products) ? data.products : []);
            setLoading(false);
          });
      }
    });

    return () => unsubscribe();
  }, [auth, router]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">🛒 Your Cart</h1>

      {items.length === 0 ? (
        <p className="text-gray-500">No items in cart.</p>
      ) : (
        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item._id}
              className="flex items-center border rounded-lg p-4 shadow hover:shadow-lg transition"
            >
               <Image
      src={item.images?.[0] || "/placeholder.png"} 
      alt={item.name}
      width={100}    
      height={100}   
      className="object-cover h-56 w-64  rounded mr-4"
    />

              <div className="flex-1">
                <h2 className="text-2xl font-semibold">{item.name}</h2>
                <p className="text-gray-600 font-bold">Price: ${item.price}</p>
                <p className="text-gray-600 font-semibold">Quantity: {item.quantity}</p>
                <p className="text-yellow-500 text-xl font-bold">
                  Subtotal: ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
