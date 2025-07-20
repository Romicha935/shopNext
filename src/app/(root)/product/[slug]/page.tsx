"use client"
import ProductGallery from '@/components/shared/product/product-gallery'
import ProductPrice from '@/components/shared/product/product-price'
import Rating from '@/components/shared/product/rating'
import { data } from '@/lib/data'
import { getAllProducts } from '@/lib/utils'
// import { getTranslations } from 'next-intl/server'
import React from 'react'

export default async function ProductDetailsPage  (props: {
    params: Promise <{slug: string}> }) {

        // const t = await getTranslations() 
        const params = await props.params
        const product = getAllProducts().find(p => p.slug === params.slug)

        if(!product){
            return <div className='text-center text-red-500 py-10'>Product not found</div>
        }
  return (
    <div>
       
        <div className='grid grid-cols-1 md:grid-cols-5'>
            <div className='col-span-2'>
              <ProductGallery images={product.images} />
            </div>
            <div className='flex flex-col w-full gap-2 md:p-5 col-span-2'>
                <div className='flex flex-col gap-2'>
                  <p className='p-medium-16 rounded-full bg-gray-500/10 text-gray-500'>
                    {product.brand} {product.category}
                  </p>
                   <h1 className='text-lg lg:text-xl font-bold'>{product.name}</h1>
                   <Rating avgRating={product.avgRating} numReviews={product.numReviews}   ratingDistribution={product.ratingDistribution} size={6} />

                   <div className='flex flex-col gap-3 sm:flex-row sm:items-center'>
                    <div className='flex gap-3'>
                        <ProductPrice price={product.price} listPrice={product.listPrice}  isDeal={product.tags.includes('todays-deal')} forListing={false}/>
                    </div>
                   </div>
                </div>

                <div className='flex flex-col gap-2'>
              <p className='p-bold-20 text-grey-600'>
                Description:
              </p>
              <p className='p-medium-16 lg:p-regular-18'>
                {product.description}
              </p>
            </div>
            </div>
        </div>
     
    </div>
  )
}
