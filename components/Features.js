import React from 'react'
import WavesOutlinedIcon from '@mui/icons-material/WavesOutlined';
import PoolOutlinedIcon from '@mui/icons-material/PoolOutlined';
import Parking from '@mui/icons-material/DirectionsCar';
import Garden from '@mui/icons-material/LocalFlorist';
import Seaview from '@mui/icons-material/Houseboat';
import Solarium from '@mui/icons-material/SolarPower';

export default function Features() {
  return (
    <div className='features-container'>
      <span className='one-feature'><PoolOutlinedIcon /> Basen</span>
      <span className='one-feature'><Parking /> Parking</span>
      <span className='one-feature'><Garden /> Ogród</span>
      <span className='one-feature'><Solarium /> Solarium/Taras</span>
      <span className='one-feature'><WavesOutlinedIcon /> Odległość od morza</span>
      <span className='one-feature'><Seaview /> Widok na morze</span>
      <span className='one-feature'><PoolOutlinedIcon /> Balkon</span>
    </div>
  )
}
