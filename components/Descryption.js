import React from 'react'
import DescAboutProperty from './DescAboutProperty'
import DescAboutObiect from './DescAboutObiect'

export default function Descryption({description, bedrooms, bathrooms, distance, pool}) {
  return (
    <div className='w-full bg-white px-10 py-10 mx-1 rounded-md lg:w-10/12 lg:leading-7 lg:mx-auto '>
        <DescAboutObiect 
          description={description}
          />
        <DescAboutProperty 
           description={description}
           bedrooms={bedrooms}
           bathrooms={bathrooms}
           distance={distance}
           pool={pool}
        />
    </div>
  )
}
