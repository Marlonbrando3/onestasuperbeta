import React from 'react'
import CopyrightIcon from '@mui/icons-material/Copyright';

export default function Footer() {
  return (
        <div className='lg:px-20 lg:py-2 mx-0 lg:text-sm text-xs flex items-center z-20 bg-slate-900'>
          <CopyrightIcon className='h-3' /> 
          <p className='text-md text-white font-normal'>© Onesta Group 2022</p>
        </div>
  )
}
