import Image from "next/image";
import Link from 'next/link';
import {useRouter} from 'next/router';
import { useState, useContext } from "react";
import Localization from '@mui/icons-material/Room';
import AirlineSeatIndividualSuiteOutlinedIcon from '@mui/icons-material/AirlineSeatIndividualSuiteOutlined';
import ShowerOutlinedIcon  from '@mui/icons-material/ShowerOutlined';
import WavesOutlinedIcon from '@mui/icons-material/WavesOutlined';
import PoolOutlinedIcon from '@mui/icons-material/PoolOutlined';
import OtherHousesOutlinedIcon from '@mui/icons-material/OtherHousesOutlined';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
// import img from "../images/2_max.jpeg";
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import ResultsSlider from "./ResultsSlider";
import ShareIcon from '@mui/icons-material/Share';
import InsertLinkIcon from '@mui/icons-material/InsertLink';


export default function PropertyCard({
  actualSite,
  property, 
  choosedCountry,
  images, 
  country, 
  city,
  beds,
  baths,
  region, 
  price,
}) {

    const router = useRouter();
    // const propertyNew = useContext(PropertyContext)

    const PriceLength = price.toString().length
    let Milions = PriceLength - 6
    const RestOfThePrice =  price.toString().slice(0,PriceLength - 6);
    const PriceOneE = price.toString().slice(Milions,Milions+3)
    const PriceTwoE = price.toString().slice(Milions+3,Milions+6);

    const[copiedShowed,setCopiedShowed] = useState(false)


    const CopiedLink = ()=> {

      navigator.clipboard.writeText(`onesta.com.pl/${property.country}/${property.id}&${property.title.replaceAll(' ','-')}`)
      setCopiedShowed(true)

      setTimeout(() => {
        setCopiedShowed(false)
      },2000)
    }

  return (
    <div className="flex flex-col md:flex-row bg-gray-300 w-12/12 md:h-80 mb-4 mx-5 mr-0 rounded-md shadow-md">
      <div className="sm:w-[500px] sm:h-[320px] w-[400px] h-[280px] overflow-hidden rounded-t-md md:rounded-l-md flex items-center justify-center text-4xl relative">
        <ResultsSlider 
          property={property}
          country={property.country}
          choosedCountry={choosedCountry}
          actualSite={actualSite}
          images={images}
          />
      </div>
      <div className='flex relative flex-col md:w-[320px] lg:w-1/2 w-full bg-white cursor-pointer '>
        <span className="flex justify-center absolute m-1 p-1 rounded-3xl right-0 top-0 cursor-pointer">
          <InsertLinkIcon onClick={CopiedLink}/>
          <div className={copiedShowed ? "flex justify-center items-center p-1 right-1 w-32 absolute h-7 bg-red-700": 'hidden'}><p className="text-xs text-white text-center">Skopionwano link!</p></div>
        </span>
          <Link href={`/${property.country}/${property.id}&${property.title.replaceAll(' ','-')}`}>
            <div>
          <div className='flex p-2 w-full h-10 items-center'>
            <Localization className='mr-2 w-3 md:block md:w-6 md:h-5 lg:mt-6 lg:w-5 h-22'/>
            <p className="md:text-md pl-1 md:pt-6 text-xs p-0 leading-3">{country} <span className="text-xs font-bold">{region}</span><br></br> {city}</p>
          </div>
          <div className='w-full md:h-36 md:leading-6 md:pl-8 md:pt-8 pr-12 leading-auto md:text-xl pl-8 py-2 font-bold'>
            <p>{property.title}</p>
          </div>
          <div className='flex items-center justify-between w-full pt-1 bg-gray-900/[0.1]'>
            <div className='flex flex-col items-center justify-center w-[24%] bg-white md:p-1'>
                <p className='w-full text-center hidden md:block text-sm'>Sypilanie</p>
              <div className='flex md:flex-col h-10 lg:flex-row items-center justify-center'>
                <AirlineSeatIndividualSuiteOutlinedIcon className="w-2/5 md:w-5 pr-1 lg:w-8 md:h-6 h-14 md:py-0"/>
                <div className='flex items-center font-semibold h-14 text-base lg:text:xl md:text-sm pl-0 lg:pl-2'>{beds}</div>
              </div>
            </div>
            <div className='flex flex-col items-center justify-center w-[24%] bg-white md:p-1'>
                <p className='w-full text-center hidden md:block text-sm'>Łazienki</p>
                <div className='flex md:flex-col h-10 items-center lg:flex-row justify-center'>
                  <ShowerOutlinedIcon className="w-2/5 md:w-5 lg:w-8 md:h-6 h-14 md:py-0"/>
                  <div className='flex items-center font-semibold h-14 text-base lg:text:xl md:text-sm pl-0 lg:pl-2'>{baths}</div>
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
            <div className='flex flex-col items-center justify-center w-[24%] bg-white md:p-1'>
                <p className='w-full text-center hidden md:block text-sm'>Basen</p>
                <div className='flex md:flex-col h-10 items-center lg:flex-row justify-center'>
                  <PoolOutlinedIcon className="w-2/5 md:w-5 lg:w-8 md:h-6 h-14 md:py-0"/>
                  <div className='flex items-center font-semibold h-14 text-base lg:text:xl md:text-sm pl-0 lg:pl-2'>tak</div>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center w-[24%] bg-white md:p-1'>
                <p className='w-full text-center hidden md:block text-sm'>Pow. uzyt.</p>
              <div className='flex items-center h-10 md:flex-col lg:flex-row justify-center relative'>
                <OtherHousesIcon className="w-2/5 md:w-5 lg:w-8 md:h-6 h-14 md:py-0"  />
                <div className='flex items-center font-semibold h-14 text-base lg:text:xl md:text-sm pl-0 lg:pl-2'>20m<span className='text-xs absolute -mt-5 ml-8'>2</span></div>
               </div>
            </div>
          </div>
          <div className='bg-red-500 md:h-16 h-12 flex items-center text-darkblue text-2xl px-3 font-semibold'>
            <span className="ml-1 sm:text-xl text-2xl md:text-3xl text-white text-right w-full">od {RestOfThePrice} {PriceOneE} {PriceTwoE} €</span>
          </div>
          </div>
          </Link>
        </div>
    </div>
    
  )
}