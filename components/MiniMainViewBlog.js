import React from 'react'

export default function MiniMainViewBlog() {
  return (
    <div className='w-full h-96 flex'>
      <div className=' lg:w-5/12 w-full lg:pl-36 px-20 flex flex-col justify-center'>
        <p className='text-6xl py-1 font-bold'>Witaj na Blogu.</p> 
        <p className='text-2xl font-'> Staramy się publikować obszerne wyjaśnienia i odpowiedzi na pytania, które chciałbyś zadać expertowi. </p>
      </div>
      <div className='relative w-7/12 bg-center bg-contain bg-no-repeat lg:block hidden bg-[url("../components/images/8_max.png")]'>
      <div className='-rotate-45 bg-white lg:absolute hidden lg:block bottom-0 right-0 w-0 h-0 border-l-[90px] border-r-[90px] border-t-[90px] border-l-transparent border-r-transparent border-t-white -mx-12 -mb-4'></div>
      </div>
    </div>
  )
}
