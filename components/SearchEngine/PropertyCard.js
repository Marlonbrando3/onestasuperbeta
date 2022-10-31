import Image from "next/image";
import Link from 'next/link';
import {useRouter} from 'next/router';
import PropertyContext from "../../context/PropertyContext";
import { useState, useContext } from "react";
import Localization from '@mui/icons-material/Room';
import AirlineSeatIndividualSuiteOutlinedIcon from '@mui/icons-material/AirlineSeatIndividualSuiteOutlined';
import ShowerOutlinedIcon  from '@mui/icons-material/ShowerOutlined';
import WavesOutlinedIcon from '@mui/icons-material/WavesOutlined';
import PoolOutlinedIcon from '@mui/icons-material/PoolOutlined';
import OtherHousesOutlinedIcon from '@mui/icons-material/OtherHousesOutlined';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import img from "../images/2_max.jpeg";
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import ResultsSlider from "./ResultsSlider";
import Property from '../../pages/[property]'
// const fs = require('fs');


export default function PropertyCard({
  actualSite,
  property, 
  choosedCountry,
  images, 
  country, 
  city,
  title,
  beds,
  baths,
  region, 
  price,
  pool,
  desc,
  propDetails,
  setPropDetails,
  showProp,
  setShowProp,}) {

    const router = useRouter();
    const propertyNew = useContext(PropertyContext)

    const PriceOneE = price.toString();
    const PriceOne = PriceOneE.slice(0,3)
    const PriceTwoE = price.toString();
    const PriceTwo = PriceTwoE.slice(3,6);

    const handleShowDetails = () => {
      setShowProp(setShowProp => !setShowProp)
      setPropDetails(property)
    }
    
  return (
    <div className="flex bg-gray-300 w-12/12 h-44 md:h-72 mb-4 md:mx-auto mx-2 rounded-md overflow-hidden">
      <div className="w-6/12 h-full flex items-center justify-center text-4xl">
        <ResultsSlider 
          property={property}
          country={property.country}
          choosedCountry={choosedCountry}
          actualSite={actualSite}
          images={images}
          />
      </div>
      <div className='flex flex-col w-1/2 bg-white '>
          <div className=' flex p-2 w-full h-10 items-center'>
            <Localization className='mr-2 w-3 md:block md:w-5 md:h-5 hidden'/>
            <p className="lg: text-md pl-1 text-xs lg:leading-5 md:text-lg p-0 leading-3">{country}, <span className="text-xs font-bold">{region}</span>,<br></br> {city}</p>
          </div>
          <div className='w-full h-80 lg:leading-6 lg:pl-8 pr-12 md:leading-5 leading-1 md:text-2xl text-xs pl-3 pt-2 font-bold'>
            <p>{property.title}</p>
          </div>
          <div className='flex items-center w-full lg:h-14 bg-gray-900 '>
            <div className='flex flex-col items-center justify-center w-3/12 h-full border-2 bg-white md:p-1'>
                <p className='w-full text-center hidden lg:block text-sm'>Sypilanie</p>
              <div className='flex flex-col lg:flex-row items-center justify-center'>
                <AirlineSeatIndividualSuiteOutlinedIcon className="w-3 lg:w-8 h-5"/>
                <p className='font-semibold text-xs lg:text-xl pl-0 lg:pl-2'>{beds}</p>
               </div>
            </div>
            <div className='flex flex-col items-center justify-center w-3/12 border-2 bg-white md:p-1'>
                <p className='w-full text-center hidden lg:block text-sm'>Łazienki</p>
                <div className='flex flex-col items-center lg:flex-row justify-center'>
                  <ShowerOutlinedIcon className="w-3 lg:w-8 h-5"/>
                  <p className='font-semibold text-xs lg:text-xl pl-0 lg:pl-2'>{baths}</p>
               </div>
            </div>
            {/* <div className='flex flex-col items-center justify-center lg:block md:hidden w-2/6 h-16 border-2 bg-white p-1'>
                <p className='w-full text-center text-sm'>Do plazy</p>
              <div className='flex items-center justify-center'>
                <WavesOutlinedIcon
               />
               <p className='font-semibold pl-2'>450 m</p>
               </div>
            </div> */}
            <div className='flex flex-col items-center justify-center w-3/12 h-full border-2 bg-white md:p-1'>
                <p className='w-full text-center hidden lg:block text-sm'>Basen</p>
                <div className='flex flex-col items-center lg:flex-row justify-center'>
                  <PoolOutlinedIcon className="w-3 lg:w-8 h-5"/>
                  <p className='font-semibold text-xs lg:text:xl pl-0 lg:pl-2'>tak</p>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center w-3/12 h-full border-2 bg-white md:p-1'>
                <p className='w-full text-center hidden lg:block text-sm'>Pow. uzyt.</p>
              <div className='flex items-center flex-col lg:flex-row justify-center'>
                <OtherHousesIcon className="w-3 lg:w-8 h-5"  />
                <p className='font-semibold  text-xs lg:text:xl pl-0 lg:pl-2'>20m<span className='text-xs absolute'>2</span></p>
               </div>
            </div>
          </div>
          <div className='bg-red-500 lg:h-52 h-32 flex items-center justify-between text-darkblue text-2xl px-3 font-semibold'>
            <span className="ml-1 text-white md:text-3xl sm:text-xl text-sm ">{PriceOne} {PriceTwo} €</span>
            <span 
              className="blok flex transition items-center text-white border-white border-2 rounded-full font-sm p-0 md:py-1 md:px-4 cursor-pointer hover:bg-white hover:text-red-500"
              onClick={handleShowDetails}>
                      <Link href={`/oferty/?id=${property.id}&${property.title.replaceAll(' ','-')}`}>
                          <a className="lg:block hidden">więcej</a>
                      </Link>
                <DoubleArrowIcon />
              </span>
          </div>
      </div>
    </div>
  )
}
