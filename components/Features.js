import React from 'react'
import WavesOutlinedIcon from '@mui/icons-material/WavesOutlined';
import PoolOutlinedIcon from '@mui/icons-material/PoolOutlined';
import Parking from '@mui/icons-material/DirectionsCar';
import Garden from '@mui/icons-material/LocalFlorist';
import Seaview from '@mui/icons-material/Houseboat';
import Solarium from '@mui/icons-material/SolarPower';

export default function Features() {
  return (
    <div className='flex rounded-xl w-full bg-white my-[10px] px-2 flex-wrap'>
      <span className='flex w-1/2 py-1'><PoolOutlinedIcon /> Basen</span>
      <span className='flex w-1/2 py-1'><Parking /> Parking</span>
      <span className='flex w-1/2 py-1'><Garden /> Ogród</span>
      <span className='flex w-1/2 py-1'><Solarium /> Solarium/Taras</span>
      <span className='flex w-1/2 py-1'><WavesOutlinedIcon /> Blisko morza</span>
      <span className='flex w-1/2 py-1'><Seaview /> Widok na morze</span>
      <span className='flex w-1/2 py-1'><PoolOutlinedIcon /> Balkon</span>
    </div>
  )
}
