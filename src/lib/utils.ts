import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { data } from "./data";
//import clientPromise from "./db"; // MongoDB client

// ✅ Utility: Combine Tailwind + custom classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ✅ Utility: Format currency
export function formatCurrency(amount: number, currency: string = "USD"): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(amount);
}

// ✅ Review type
export type Review = {
  user: string;
  rating: number;
  comment: string;
  date: string;
}

// ✅ Product type
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
  // reviews?: Review[];
  countInStock?: number;
  colors?: string[];
}

// ✅ Async merging of data.ts + MongoDB collections
export async function getAllProducts(): Promise<ProductType[]> {
  // const client = await clientPromise;
  

  

  const all: ProductType[] = [
    ...data.relatedProducts, // data.ts
   
  ];

  return all.map(p => ({
    _id: p._id?.toString() || "",
    slug: p.slug,
    name: p.name,
    brand: p.brand,
    category: p.category,
    description: p.description || "",
    price: p.price,
    listPrice: p.listPrice,
    tags: p.tags || [],
    images: p.images || [],
    avgRating: p.avgRating || 0,
    numReviews: p.numReviews || 0,
    ratingDistribution: p.ratingDistribution || {5:0,4:0,3:0,2:0,1:0},
    // reviews: p.reviews || [],
    countInStock: p.countInStock ?? 0,
    colors: p.colors || [],
  }));
}

// ✅ Round number to 2 decimal places
export const round2 = (num: number) =>
  Math.round((num + Number.EPSILON) * 100) / 100;

// ✅ Generate random 24-digit ID (like MongoDB _id)
export const generateId = () =>
  Array.from({ length: 24 }, () => Math.floor(Math.random() * 10)).join("");
