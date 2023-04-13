import React from 'react'
import Image from 'next/image'
import { useState } from 'react';

export default function ImagesInPropetyCard({property, images, setImages}) {

  const [activeImgNumber, setActiveImgNumber] = useState(1);
  
  const handleActiveImage = (indexfromClick) =>{
    setImages(images.map((img, index) => {
      if(img.showed === false && index+1 === indexfromClick){
        return{
          ...img,
          showed: true
        }
      }
        if(img.showed === true && index+1 === indexfromClick){
          return{
            ...img,
            showed: true
          }
      } else return {
            ...img,
            showed: false
        }
    }))
  }

  return (
    <>
    {images.map((prop, index)=> (
        <div key={prop} className={prop.showed === true ? 'h-full sm:w-32 w-[92.2vw] flex border-red-700 sm:border-2': 'h-full sm:w-32 w-[92.2vw] flex border-red-700/[0] sm:border-2'}>
          <Image className='cursor-pointer object-cover'
            src={prop.image}
            width={1000}
            height={500}
            onClick={() => handleActiveImage(index+1)}
            number={index+1}
          ></Image>
        </div>
      ))}
    </>
  )
}