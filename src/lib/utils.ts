import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { data } from "./data";

// Utility: Combine Tailwind + custom classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Utility: Format currency
export function formatCurrency(amount: number, currency: string = "USD"): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(amount);
}

// Review type
export type Review = {
  user: string;
  rating: number;
  comment: string;
  date: string;
};



// Product type
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
  reviews: Review[];
  countInStock?: number;
  colors?: string[];
};

// Safe merging of product arrays with full type
export function getAllProducts(): ProductType[] {
  const all = [
    ...data.todaysDeals,
    ...data.bestSellingProducts,
    ...data.relatedProducts,
  ];

  return all.map((product) => ({
    _id: product._id || "",
    slug: product.slug,
    name: product.name,
    brand: product.brand,
    category: product.category,
    description: product.description || "",
    price: product.price,
    listPrice: product.listPrice,
    tags: product.tags || [],
    images: product.images || [],
    avgRating: product.avgRating || 0,
    numReviews: product.numReviews || 0,
    ratingDistribution: product.ratingDistribution || {
      5: 0,
      4: 0,
      3: 0,
      2: 0,
      1: 0,
    },
    reviews: product.reviews || [],
    countInStock: product.countInStock ?? 0,
    colors: product.colors || [],
  }));
}

// Round number to 2 decimal places
export const round2 = (num: number) =>
  Math.round((num + Number.EPSILON) * 100) / 100;

// Generate random 24-digit ID (like MongoDB _id)
export const generateId = () =>
  Array.from({ length: 24 }, () => Math.floor(Math.random() * 10)).join("");
