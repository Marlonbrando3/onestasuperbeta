import React from 'react'

export default function DescAboutObiect({description}) {
  return (
    <div>
      <p className='font-bold text-xl my-4'> Opis nieruchomości</p>
      {description}
    </div>
  )
}
