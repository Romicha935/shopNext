import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { data } from "./data"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}



    export function formatCurrency(amount: number, currency: string = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(amount)
}

export function getAllProducts()  {
   return [
    ...data.todaysDeals,
    ...data.bestSellingProducts,
    ...data.relatedProducts
   ]
}
export const round2 = (num: number) =>
  Math.round((num + Number.EPSILON) * 100) / 100

export const generateId = () =>
  Array.from({ length: 24 }, () => Math.floor(Math.random() * 10)).join('')