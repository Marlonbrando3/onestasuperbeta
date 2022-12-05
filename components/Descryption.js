import React from 'react'
import DescAboutProperty from './DescAboutProperty'
import DescAboutObiect from './DescAboutObiect'

export default function Descryption({description}) {
  return (
    <div className='w-full bg-white px-3 mx-1 rounded-xl '>
        <DescAboutObiect 
          description={description}/>
        {/* <DescAboutProperty /> */}
    </div>
  )
}
