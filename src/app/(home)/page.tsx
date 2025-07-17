"use client"
import React from 'react'
import HomeLayout from './layout'
import HomeCarousel from '@/components/shared/home/home-carousel'
import { data } from '@/lib/data'
import CardItem from '@/components/shared/home/home-card'
import ProductCard from '@/components/shared/product/product-card'


export default function HomePage ()  {
  return (
          <div>
            <HomeCarousel items={data.carousels}/>
            <CardItem cards={data.featureSections}/>
            {/* <ProductCard product={data.todaysDeals}/> */}
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {data.todaysDeals.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
          </div>
  // <HomeLayout>
  // <h1>home page</h1>
  //     </HomeLayout>
        

  )
}
