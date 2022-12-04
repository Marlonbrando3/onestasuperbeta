import React from 'react'
import CopyrightIcon from '@mui/icons-material/Copyright';
import Property from '../pages/property';

export default function Footer() {
  return (
        <div className='lg:mx-20 mx-0 lg:text-sm text-xs flex items-center my-2 z-20'>
          <CopyrightIcon className='h-3' /> 
          <p>Onesta Group Agencja Nieruchomości. Agencja Marketingowa.</p>
        </div>
  )
}
