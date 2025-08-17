import clientPromise from "@/lib/db/mongodb";
import type { NextApiRequest, NextApiResponse } from "next";

type Product = {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  images?: string[];
};

type CartResponse = {
  message?: string;
  products?: Product[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CartResponse>
) {
  const client = await clientPromise;
  const db = client.db("shopNext");
  const cartCollection = db.collection("cart");

  if (req.method === "POST") {
    const { userEmail, product } = req.body as { userEmail: string; product: Product };

    if (!userEmail) return res.status(400).json({ message: "User email missing" });

    const cart = await cartCollection.findOne({ userEmail });

    if (cart) {
      const index = cart.products.findIndex((p: Product) => p._id === product._id);
      if (index > -1) {
        cart.products[index].quantity += product.quantity;
      } else {
        cart.products.push(product);
      }
      await cartCollection.updateOne({ userEmail }, { $set: { products: cart.products } });
    } else {
      await cartCollection.insertOne({
        userEmail,
        products: [product],
      });
    }

    return res.status(200).json({ message: "Product added to cart" });
  }

  if (req.method === "GET") {
    const { email } = req.query as { email: string };
    const cart = await cartCollection.findOne({ userEmail: email });
    return res.status(200).json({ products: cart?.products || [] });
  }

  return res.status(405).json({ message: "Method not allowed" });
}
