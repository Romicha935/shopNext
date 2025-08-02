// src/types/index.ts

export interface SiteCurrency {
  code: string       
  symbol: string     
  name: string       
}

export interface ClientSetting {
  defaultCurrency: string            
  currency: string                  
  availableCurrencies: SiteCurrency[]
  
}

export interface IProduct {
  _id: string         
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
  countInStock?: number  
}



// types/order.ts

export interface OrderItem extends Partial<IProduct> {
  _id: string
  name: string
  slug: string
  image: string         
  price: number
  countInStock: number
}


