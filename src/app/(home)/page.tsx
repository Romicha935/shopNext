import React from 'react'
import HomeLayout from './layout'
import HomeCarousel from '@/components/shared/home/home-carousel'
import { data } from '@/lib/data'
import CardItem from '@/components/shared/home/home-card'


export default function HomePage ()  {
  return (
          <div>
            <HomeCarousel items={data.carousels}/>
            <CardItem cards={data.featureSections}/>
          </div>
  // <HomeLayout>
  // <h1>home page</h1>
  //     </HomeLayout>
        

  )
}
