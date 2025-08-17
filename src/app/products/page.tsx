// "use client";
// import { useEffect, useState } from "react";

// type Product = {
//   _id: string;
//   name: string;
//   price: number;
//   quantity: number;
// };

// export default function CartPage() {
//   const [items, setItems] = useState<Product[]>([]);

//   useEffect(() => {
//     fetch("/api/cart?email=test@gmail.com") // replace with auth email
//       .then((res) => res.json())
//       .then((data: { products: Product[] }) => setItems(data.products));
//   }, []);

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl mb-4">🛒 Your Cart</h1>
//       {items.length === 0 ? (
//         <p>No items in cart.</p>
//       ) : (
//         <ul>
//           {items.map((item) => (
//             <li key={item._id} className="border p-2 mb-2 rounded">
//               {item.name} - ${item.price} - Qty: {item.quantity}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }
