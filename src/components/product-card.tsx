import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"

type Props = {
  product: {
    _id: string
    slug: string
    title: string
    description?: string
    price: number
    dealPrice?: number
    image: string
    category?: string
    rating?: number
    numReviews?: number
  }
}

export default function ProductCard({ product }: Props) {
  const finalPrice = product.dealPrice ?? product.price
  const hasDeal = product.dealPrice && product.dealPrice < product.price
  const discount = hasDeal
    ? Math.round(((product.price - product.dealPrice!) / product.price) * 100)
    : 0

  return (
    <Card>
     
        <div className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden">
          <Link href={`/product/${product.slug}`} className="block">
            <div className="relative w-full h-52">
              <Image src={product.image} alt={product.title} fill className="object-cover" />
              {hasDeal && (
                <span className="absolute top-2 left-2 text-xs font-bold bg-red-600 text-white px-2 py-1 rounded-full">
                  {discount}% OFF
                </span>
              )}
            </div>
            <div className="p-4">
                {/* Category */}
              {product.category && (
                <p className="text-xl font-bold text-gray-900 mt-1">{product.category}</p>
              )}
              <h1 className="font-semibold line-clamp-2 min-h-[3rem]">{product.title}</h1>
            

              {/* Rating */}
              {product.rating && (
                <p className="text-yellow-500 text-2xl mt-3">
                  ⭐⭐⭐⭐ {product.rating} ({product.numReviews ?? 3})
                </p>
              )}

            

              {/* Price */}
              <div className="mt-3 flex items-center gap-2">
                <span className="text-lg font-bold">${finalPrice}</span>
                {hasDeal && (
                  <>
                    <span className="text-sm line-through text-gray-400">List Price : ${product.price}</span>
                    <span className="text-sm text-green-600 font-bold">-{discount}%</span>
                  </>
                )}
              </div>

              <Button className="w-full mt-3">Add to Cart</Button>
            </div>
          </Link>
        </div>
      
    </Card>
  )
}
