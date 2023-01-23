import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logotype from './images/logotype.png'
import SearchComponent from "./searchComponent"
import MiniMainViewBlog from './MiniMainViewBlog'
import Blog from '../data/Blog.json'


export default function HeaderBlog({temat}) {

    let img;
    Blog.map(i => {
        console.log(i.title)
        if(i.title === temat){
            img = i.link
        }
      })


  return (
    <>
    <div className='relative w-full lg:h-96 h-56 flex justify-between items-start lg:pl-36 bg-cover px-10 lg:bg-none'>
        {/* Left side  */}
        <div className='flex flex-col lg:w-1/2 w-10/12 h-full'>
            <Link className="cursor-pointer flex items-center" href='/'>
            <Image className="py-3"
                src={Logotype}
                width={150}
                alt="logo"
            />
            </Link>
        <h1 className='lg:text-5xl lg:text-gray-900 lg: text-normal text-3xl font-bold w-full grow flex items-center leading-14 lg:px-20 px-0'>{temat}</h1>
        </div>
         {/* Right side  */}
        <div className='lg:w-1/2 lg:h-full object-cover overflow-hidden lg:block hidden'>
            <Image 
                src={img}
                width={700}
                height={500}
                alt="logo"
            />
        </div>
      <div className='-rotate-45 bg-white lg:absolute hidden lg:block bottom-0 right-0 w-0 h-0 border-l-[90px] border-r-[90px] border-t-[90px] border-l-transparent border-r-transparent border-t-white -mx-12 -mb-4'></div>
    </div>
    </>
  )
}
