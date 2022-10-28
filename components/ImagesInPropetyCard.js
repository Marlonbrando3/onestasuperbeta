import React from 'react'
import Image from 'next/image'
import { useState } from 'react';

export default function ImagesInPropetyCard({property, images, setImages}) {

  const [activeImgNumber, setActiveImgNumber] = useState(1);
  
  const handleActiveImage = (indexfromClick) =>{
    console.log(indexfromClick)
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
        <div className={prop.showed === true ? 'h-full w-36 mx-2 flex border-red-700 border-4': 'h-full w-36 mx-2 flex border-red-700/[0] border-4'}>
          <Image className='cursor-pointer'
            src={prop.image}
            width={200}
            height={130}
            onClick={() => handleActiveImage(index+1)}
            number={index+1}
          ></Image>
        </div>
      ))}
    </>
  )
}
