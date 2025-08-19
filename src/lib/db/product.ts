// src/lib/db/products.ts
import clientPromise from './mongodb'
import { IProduct } from '@/types'

// Today's Deals fetch
export async function getTodaysDeals(): Promise<IProduct[]> {
  try {
    const client = await clientPromise
    const db = client.db('nextShop')
    
    const products = await db
      .collection<IProduct>('todays-deal')
      .find({})
      .toArray()

    return products
  } catch (error) {
    console.error("Error fetching Today's Deals:", error)
    return []
  }
}

// Best Selling Products fetch
export async function getBestSellingProducts(): Promise<IProduct[]> {
  try {
    const client = await clientPromise
    const db = client.db('nextShop')
    const products = await db
      .collection<IProduct>('bestSelling')
      .find({})
      .toArray()
    return products
  } catch (error) {
    console.error('Error fetching Best Selling Products:', error)
    return []
  }
}

// Featured Products fetch
export async function getFeaturedProducts(): Promise<IProduct[]> {
  try {
    const client = await clientPromise
    const db = client.db('nextShop')
    
    // tags array এর মধ্যে 'featured' আছে এমন products
    const products = await db
      .collection<IProduct>('featured-products')
      .find({ tags: { $in: ['featured'] } })
      .toArray()

    return products
  } catch (error) {
    console.error('Error fetching Featured Products:', error)
    return []
  }
}

// Generic fetch by tag
export async function getProductsByTag(tag: string): Promise<IProduct[]> {
  try {
    const client = await clientPromise
    const db = client.db('nextShop')
    
    const products = await db
      .collection<IProduct>('products')
      .find({ tags: { $in: [tag] } })
      .toArray()
    return products
  } catch (error) {
    console.error(`Error fetching products with tag "${tag}":`, error)
    return []
  }
}
