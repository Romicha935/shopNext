// import { useState } from "react";

// type Product = {
//      _id: string; 
//      name: string;
//       price: number; 
//       quantity?: number; 
//      };

     

// type ProductCardProps = {
//   product: Product;
// };

// export default function ProductCard({ product }: ProductCardProps) {
//   const [loading, setLoading] = useState(false);

//   const addToCart = async () => {
//     setLoading(true);
//     const res = await fetch("/api/cart", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ product, userEmail: "test@gmail.com" }), // পরবর্তীতে auth ব্যবহার করবে
//     });
//     const data = await res.json();
//     alert(data.message);
//     setLoading(false);
//   };

//   return (
//     <div className="border p-4 rounded">
//       <h2>{product.name}</h2>
//       <p>${product.price}</p>
//       <button
//         onClick={addToCart}
//         disabled={loading}
//         className="bg-blue-500 text-white px-3 py-1 rounded"
//       >
//         {loading ? "Adding..." : "Add to Cart"}
//       </button>
//     </div>
//   );
// }
