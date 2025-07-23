'use client'

import React from 'react'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import ImageHover from './image-hover'
// import Rating from './rating'
// import ProductPrice from './product-price'
import { IProduct } from '@/types'
// import { IProduct } from '@/types'
// import { IProduct } from '@/types'


const BestSelling = ({
  product,
  hideBorder = false,
  // hideDetails = false,
  // hideAddToCart = false
}: {
  product: IProduct
  hideBorder?: boolean
  hideDetails?: boolean
  hideAddToCart?: boolean
}) => {
  //  const percentage =
  //   product.listPrice && product.listPrice > product.price
  //     ? Math.round(((product.listPrice - product.price) / product.listPrice) * 100)
  //     : 0

//       console.log("Product name:", product.name);
// console.log("Product tags:", product.tags);

  return (
    
 <Link href={`/product/${product.slug}`}
      className={cn(
        'group block  hover:shadow-lg transition overflow-hidden bg-white',
        {
          'border-none': hideBorder
        }
      )}
    >
      
      {/* Product Image with Hover Effect */}
      <Card>
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
</Card>
       {/* Discount percentage badge */}
          {/* {percentage > 0 && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
              {percentage}% OFF
            </div>
          )} */}
    </Link>
 
  )
}

export default BestSelling
