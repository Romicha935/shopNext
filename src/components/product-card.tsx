import Image from "next/image"
import Link from "next/link"

type Props = {
  product: {
    _id: string
    slug: string
    title: string
    price: number
    dealPrice?: number
    image: string
    category?: string
    rating?: number
  }
}

export default function ProductCard({ product }: Props) {
  const finalPrice = product.dealPrice ?? product.price
  const hasDeal = product.dealPrice && product.dealPrice < product.price
  const discount = hasDeal
    ? Math.round(((product.price - product.dealPrice!) / product.price) * 100)
    : 0


    
  return (
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
          <h3 className="font-semibold line-clamp-2 min-h-[3rem]">{product.title}</h3>
          {product.category && (
            <p className="text-xs text-gray-500 mt-1">{product.category}</p>
          )}
          <div className="mt-3 flex items-center gap-2">
            <span className="text-lg font-bold">{finalPrice}</span>
            {hasDeal && (
              <span className="text-sm line-through text-gray-400">${product.price}</span>
            )}
          </div>
          <button className="mt-3 w-full bg-yellow-500 text-white py-2 rounded-xl hover:bg-yellow-600 cursor-pointer">
            Add to cart
          </button>
        </div>
      </Link>
    </div>
  )
}
