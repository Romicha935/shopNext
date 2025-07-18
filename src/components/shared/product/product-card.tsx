'use client'

import React from 'react'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import ImageHover from './image-hover'
import Rating from './rating'
import ProductPrice from './product-price'
import { IProduct } from '@/types'
// import { IProduct } from '@/types'

const ProductCard = ({
  product,
  hideBorder = false,
  hideDetails = false,
  hideAddToCart = false
}: {
  product: IProduct
  hideBorder?: boolean
  hideDetails?: boolean
  hideAddToCart?: boolean
}) => {
  const percentage =
    product.listPrice && product.listPrice > product.price
      ? Math.round(((product.listPrice - product.price) / product.listPrice) * 100)
      : 0

//       console.log("Product name:", product.name);
// console.log("Product tags:", product.tags);

  return (
    

        
      <Link
      href={`/product/${product.slug}`}
      className={cn(
        'group block  hover:shadow-lg transition overflow-hidden bg-white',
        {
          'border-none': hideBorder
        }
      )}
    >
      
      {/* Product Image with Hover Effect */}
      <div className="relative h-60 bg-white">
    
  
        {product.images.length > 1 ? (
          <ImageHover
            src={product.images[0]}
            hoverSrc={product.images[1]}
            alt={product.name}
          />
        ) : (
          <ImageHover
            src={product.images[0]}
            hoverSrc={product.images[0]}
            alt={product.name}
          />
        )}
      </div>

      {/* Details */}
      {!hideDetails && (
        <div className="p-4 space-y-2 text-center">
          <p className="text-sm font-bold text-gray-600">{product.brand}</p>

          <h2 className="text-md font-semibold line-clamp-2 min-h-[48px]">
            {product.name}
          </h2>

          <p className="text-sm text-gray-500 line-clamp-2 min-h-[40px]">
            {product.description}
          </p>

          {/* Rating */}
          <div className="flex justify-center items-center gap-2">
            <Rating rating={product.avgRating} />
            <span className="text-xs text-gray-500">({product.numReviews})</span>
          </div>

          {/* Price + Discount */}
          <div className="flex flex-col items-center gap-1">
            <ProductPrice
              price={product.price}
              listPrice={product.listPrice}
              isDeal={product.tags.includes('todays-deal')}
            />
            {percentage > 0 && (
              <span className="text-xs text-red-500 font-medium">
                {percentage}% OFF
              </span>
            )}
          </div>
        </div>
      )}
    </Link>
 
  )
}

export default ProductCard
