"use client"
import Image from 'next/image'
import React, { useState } from 'react'

const ImageHover = ({
    src,
    hoverSrc,
    alt
}:{
    src: string
    hoverSrc:string
    alt:string
}) => {

    const [isHovered,setIsHovered] = useState(false)
     let hoverTimeout: NodeJS.Timeout | null = null

    const handleMouseEnter = () => {
        hoverTimeout = setTimeout(()=> setIsHovered(true),1000)
    }

    const handleMouseLeave = () => {
         if (hoverTimeout !== null) {
      clearTimeout(hoverTimeout)
    }
        setIsHovered(false)
    }
  return (
    <div className='relative h-52' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Image src={src} alt={alt} fill sizes='80vw' className={`object-cover transition-opacity  duration-500 ${isHovered? 'opacity-100': 'opacity-100'}`} />
        <Image src={hoverSrc} alt={alt} fill sizes='80vw' className={`object-cover transition-opacity  duration-500 ${isHovered? 'opacity-100': 'opacity-0'}`} />
    </div>
  )
}

export default ImageHover