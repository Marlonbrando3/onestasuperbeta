import React from 'react'

export default function MiniHomeView({ActualCountry}) {
  return (
    <div className='w-full h-24 bg-[url("../components/images/main_bg.jpg")] bg-cover'>
      <div className='text-white text-5xl pl-20 mt-16'>{ActualCountry}</div>
    </div>
  )
}