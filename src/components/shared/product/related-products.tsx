'use client'

import React from 'react'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import ImageHover from './image-hover'

import { IProduct } from '@/types'



const RelatedProducts = ({
  product,
  hideBorder = false,
  
}: {
  product: IProduct
  hideBorder?: boolean
  hideDetails?: boolean
  hideAddToCart?: boolean
}) => {


  return (
    
 <Link href={`/product/${product.slug}`}
      className={cn(
        'group block  hover:shadow-lg transition overflow-hidden bg-white',
        {
          'border-none': hideBorder
        }
      )}
    >
      
      
     
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
           <div className="p-4">
      <h2 className="font-bold text-lg">{product.name}</h2>
      <h3 className="text-sm line-clamp-2 font-semibold text-gray-600">{product.description}</h3>
      {/* <p>⭐{product.avgRating}</p> */}
      <p>⭐⭐⭐⭐({product.numReviews})</p>
      <p className='text-2xl text-center'>${product.price}</p>
    </div>

        </Card>
        </Link>
 
  )
}

export default RelatedProducts
