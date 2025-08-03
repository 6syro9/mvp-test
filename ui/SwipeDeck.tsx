'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const images = [
    '/image-1.png',
    '/image-2.png',
    '/image-3.png',
    '/image-4.png',
    '/image-5.png',
    '/image-6.png',
    '/image-7.png',
    '/image-8.png',
   '/image-9.png',
   '/image-10.png',
   '/image-11.png',
   '/image-12.png', 
]

const SwipeDeck = () => {
    const [activeIndex, setactiveIndex] = useState(0);
    const imageHandler = () => {
        setactiveIndex((activeIndex + 1) % images.length);
        console.log("image is clicked!")
    }
  return (
    <div className='bg-gray-50 p-4 shadow-2xl rounded-lg min-h-[720px] min-w-[400px] flex flex-col items-center justify-center'>
      <Image width={400} height={20} alt='' src={images[activeIndex]} className='object-contain rounded-2xl cursor-pointer' onClick={() => imageHandler()} >

      </Image>
    </div>
  )
}

export default SwipeDeck
