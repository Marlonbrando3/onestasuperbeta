import React from 'react'
import DescAboutProperty from './DescAboutProperty'
import DescAboutObiect from './DescAboutObiect'

export default function Descryption({description}) {
  return (
    <div className='descrytpion-container'>
        <DescAboutObiect 
          description={description}/>
        {/* <DescAboutProperty /> */}
    </div>
  )
}
