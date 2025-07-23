"use client"
import React from 'react'
// import HomeLayout from '../layout'
import HomeCarousel from '@/components/shared/home/home-carousel'
import { data } from '@/lib/data'
import CardItem from '@/components/shared/home/home-card'
import ProductCard from '@/components/shared/product/product-card'
import BestSelling from '@/components/shared/product/best-selingProducts'
import RelatedProducts from '@/components/shared/product/related-products'
import { Card, CardContent } from '@/components/ui/card'


export default function HomePage ()  {
  return (
          <div className='bg-gray-5'>
            <HomeCarousel  items={data.carousels}/>
            <CardItem cards={data.featureSections}/>
            {/* <ProductCard product={data.todaysDeals}/> */}
            <div className='bg-white py-3'>
          <Card>
            <CardContent>
                <h2 className='text-2xl font-bold px-8'>{`Today's Deals`}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2  p-4">
         
        {data.todaysDeals.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
            </CardContent>
          </Card>
          </div>
            <div className='bg-white'>
            <h2 className='text-2xl font-bold px-8'>Best Sellings</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2  p-4">
         
        {data.bestSellingProducts.slice(0,6).map((product) => (
          <BestSelling key={product.name} product={product} />
        ))}
        
      </div>
          </div>

           <div className='bg-white'>
            <h2 className='text-2xl font-bold px-8'>Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2  p-4">
         
        {data.relatedProducts.slice(0,6).map((product) => (
          <RelatedProducts key={product.name} product={product} />
        ))}
      </div>
          </div>
          </div>

        

  )
}
