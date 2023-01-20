import React from 'react'
import Link from 'next/link'
import Blog from '../data/Blog.json'
import Image from 'next/image'

export default function BlogItems() {
  return (
    <div className='flex justify-evenly flex-wrap w-10/12 mx-auto'>
        {Blog.map(obj => (
            <div key={obj} className='lg:w-1/3 w-12/12 mx-auto py-2'>
                <div className='w-10/12 mx-auto bg-gray-100/[0.4]'>
                    <Image className='h-52 object-cover'
                        src={obj.link}
                        width={500}
                        height={500}
                    />
                    <div className='p-2'>
                        <p className='font-bold text-xl'>{obj.title}</p>
                        <div>{obj.description}...</div>
                        <button className={obj.status !== "wating" ? 'border-gray-500 mt-12 px-3 py-1 rounded-lg cursor-pointer bg-white drop-shadow-md hover:bg-red-600 duration-100 hover:text-white': 'hidden'}><Link href={{pathname: `/blog/${obj.tag}`, query:{id: obj.id}}}>Czytaj więcej</Link></button>
                    </div>
                    </div>
            </div>
        ))}
    </div>
  )
}
