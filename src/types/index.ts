// src/types/index.ts

export interface SiteCurrency {
  code: string       // যেমন: 'USD', 'BDT'
  symbol: string     // যেমন: '$', '৳'
  name: string       // যেমন: 'US Dollar', 'Bangladeshi Taka'
}

export interface ClientSetting {
  defaultCurrency: string            // ডিফল্ট কারেন্সি কোড
  currency: string                   // বর্তমানে ব্যবহৃত কারেন্সি কোড
  availableCurrencies: SiteCurrency[]  // সাপোর্টেড কারেন্সির লিস্ট
  
}

export interface IProduct {
  _id: string         // এখানে যোগ করো
  name: string
  slug: string
  brand: string
  description: string
  images: string[]
  price: number
  listPrice: number
  avgRating: number
  numReviews: number
  tags: string[]
  countInStock?: number  // Optional যদি না থাকে সব প্রোডাক্টে
}



// types/order.ts

export interface OrderItem extends Partial<IProduct> {
  _id: string
  name: string
  slug: string
  image: string         // যদি একটার ছবি লাগে
  price: number
  countInStock: number
}


