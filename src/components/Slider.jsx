'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const data = [
  {
    id: 1,
    title: 'alway fresh & always crispy & always hot',
    image: '/slide1.png',
  },
  {
    id: 2,
    title: 'we deliver your order wherever you are in lagos',
    image: '/slide2.png',
  },
  {
    id: 3,
    title: 'the best meals to share with your family',
    image: '/slide3.jpg',
  },
]

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      3000
    )
    return () => clearInterval(interval)
  }, [])

  return (
    <div className='flex flex-col lg:flex-row h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] bg-fuchsia-50 '>
      {/* Text Container */}
      <div className='flex flex-col flex-1 items-center justify-center gap-8 text-red-500 font-bold'>
        <h1 className='text-5xl uppercase p-4 md:px-10 text-center md:text-6xl xl:text-7xl'>
          {data[currentSlide].title}
        </h1>
        <button className='bg-red-500 text-white py-4 px-8'>Order Now</button>
      </div>
      {/* Image Container */}
      <div className='relative flex-1 w-full'>
        <Image
          src={data[currentSlide].image}
          alt='img1'
          fill
          className='object-cover'
        />
      </div>
    </div>
  )
}

export default Slider