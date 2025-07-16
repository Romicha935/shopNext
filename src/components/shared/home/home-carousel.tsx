"use client"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function HomeCarousel  ({
    items,
}: {
    items:{
        image:string
        url:string
        title:string
        buttonCaption:string
    }[]
}) 

{
    const plugin = React.useRef(
        Autoplay({delay:300, stopOnInteraction:true})
    )



  return (
    <Carousel 
    dir='ltr' 
    plugins={[plugin.current]}
    className='w-full mx-auto'
    onMouseEnter={plugin.current.stop}
    onMouseLeave={plugin.current.reset}
>
    <CarouselContent>
        {items.map((item)=> (
            <CarouselItem key={item.title}>
           <Link href={item.url}>
          <div className="flex items-center h-[400px] md:h-[500px] px-6 md:px-20 bg-gray-100 gap-8">
  {/* 1/3 Left: Text */}
  <div className="w-1/3">
    <h2 className="text-2xl md:text-5xl font-bold text-primary mb-4">
      {item.title}
    </h2>
    <button className="bg-primary text-white px-5 py-3 rounded cursor-pointer">
      {item.buttonCaption}
    </button>
  </div>

  {/* 2/3 Right: Image */}
  <div className="w-2/3 relative h-full">
    <Image
      src={item.image}
      alt={item.title}
      fill
      className="object-contain"
      priority
    />
  </div>
</div>


           </Link>
            </CarouselItem>
        ))}
    </CarouselContent>
    <CarouselPrevious className='left-0 md:left-12'/>
     <CarouselNext className='right-0 md:right-12'/>
    </Carousel>
  )
}
