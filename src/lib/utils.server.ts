import clientPromise from "./db";
import { data } from "./data";
import { WithId, Document } from "mongodb";

export type ProductType = {
  _id?: string;
  slug: string;
  name: string;
  brand: string;
  category: string;
  description: string;
  price: number;
  listPrice: number;
  tags: string[];
  images: string[];
  avgRating: number;
  numReviews: number;
  ratingDistribution: Record<number, number>;
  countInStock?: number;
  colors?: string[];
};

export async function getAllProducts(): Promise<ProductType[]> {
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB ?? "nextShop");

  const bestSelling = await db.collection<WithId<Document>>("bestSeling").find({}).toArray();
  const todaysDeal = await db.collection<WithId<Document>>("todays-deal").find({}).toArray();
  const featuredProducts = await db.collection<WithId<Document>>("featured-products").find({}).toArray();

  const convertToProductType = (p: WithId<Document>): ProductType => ({
    _id: p._id?.toString() || "",
    slug: p.slug as string,
    name: p.name as string,
    brand: p.brand as string,
    category: p.category as string,
    description: (p.description as string) || "",
    price: p.price as number,
    listPrice: p.listPrice as number,
    tags: (p.tags as string[]) || [],
    images: (p.images as string[]) || [],
    avgRating: (p.avgRating as number) || 0,
    numReviews: (p.numReviews as number) || 0,
    ratingDistribution: (p.ratingDistribution as Record<number, number>) || {5:0,4:0,3:0,2:0,1:0},
    countInStock: (p.countInStock as number) ?? 0,
    colors: (p.colors as string[]) || [],
  });

  const allProducts: ProductType[] = [
    ...data.relatedProducts, 
    ...bestSelling.map(convertToProductType),
    ...todaysDeal.map(convertToProductType),
    ...featuredProducts.map(convertToProductType),
  ];

  return allProducts;
}
