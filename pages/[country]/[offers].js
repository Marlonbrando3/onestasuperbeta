import Image from 'next/image';
import { useRef } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Header from '../../components/Header';
import {useRouter} from 'next/router';
import MiniHomeView from '../../components/SearchEngine/MiniHomeView';
import { useState, useEffect, useLayoutEffect } from 'react';
import React from 'react';
import db from '../../utils/db';
import PropertyTwo from '../../model/propertymodel';
import Localization from '@mui/icons-material/Room';
import ShowerOutlinedIcon from '@mui/icons-material/ShowerOutlined';
import WavesOutlinedIcon from '@mui/icons-material/WavesOutlined';
import PoolOutlinedIcon from '@mui/icons-material/PoolOutlined';
import Bedrooms from '@mui/icons-material/AirlineSeatIndividualSuiteOutlined';
import ImagesInPropetyCard from '../../components/ImagesInPropetyCard';
import ChevronRightIcon from '@mui/icons-material/ChevronRightOutlined';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeftOutlined';
import Features from '../../components/Features';
import Descryption from '../../components/Descryption';


export default function Property(
  {property},
  ) {

  const buttonLeft = useRef();
  const buttonRight = useRef();
  const photosContainer = useRef();
  const photosContainerMain = useRef();
  const photosRow = useRef();

  const router = useRouter();
  let propertyDescription = (property[0].description)
  let propertyId = (property[0].id)

  const [actualImage, setActualImage] = useState(1);
  const [searchShow, setSearchShow] = useState(true);
  const [images, setImages] = useState(property[0].image.map((image, index) =>{
    if(index === 0){
      return{
        id:index+1,
        image,
        count:1,
        showed:true
      }
    } else return {
        id:index+1,
        image,
        count:0,
        showed:false
    }
  }))

  let showedImage

  images.filter(img=>{
    if(img.showed === true) {
        showedImage = img.image
      }
    })
  const [handleMarginSlider, setHandleMarginSlider] = useState(false)
  const [margin, setMargin] = useState(0)


  //change Imagearray
  let hiddenImg;


  const handleChangeSlideLeft = () => {
    setHandleMarginSlider('true')

    const photosCM = photosContainerMain.current.offsetWidth
    const photosC = photosContainer.current.offsetWidth
    const photosR = photosRow.current.offsetWidth
    console.log("PhotosCM: "+photosCM)
    console.log("PhotosC: "+photosC)
    console.log("PhpotosR: "+photosR)

    let oneImageLength = photosR / images.length
    let cutedImage = photosCM / oneImageLength
    // console.log(oneImageLength)
    // console.log(Math.floor(cutedImage))
    // console.log(oneImageLength - oneImageLength * (cutedImage - Math.floor(cutedImage)))

    let marginWork = 0

    if(photosC - photosCM < oneImageLength*2) {
        console.log("warunek 1")
        marginWork = 0
    }

    if(photosC - photosCM >= oneImageLength*2) {
      console.log("warunek 2")
      marginWork = margin - oneImageLength*2
    }

    if(photosC === photosCM) {
      console.log("warunek 3")
      marginWork = photosR-photosCM
    } 

    if(photosC - photosR === 0) {
      console.log("warunek 3")
      marginWork = margin - (oneImageLength - oneImageLength * (cutedImage - Math.floor(cutedImage)))
    } 


    console.log(photosR - photosC)
    
    photosContainer.current.style.marginLeft = `-${marginWork.toString()}px`
    console.log(`-${margin.toString()}`)

   setTimeout(() => {

      setMargin(marginWork)
   
  },400)
}
  
  
  const handleChangeSlideRight = () => {
    setHandleMarginSlider('true')

    const photosCM = photosContainerMain.current.offsetWidth
    const photosC = photosContainer.current.offsetWidth
    const photosR = photosRow.current.offsetWidth

    console.log("PhotosCM: "+photosCM)
    console.log("PhotosC: "+photosC)
    console.log("PhpotosR: "+photosR)

    let oneImageLength = photosR / images.length
    let cutedImage = photosCM / oneImageLength

    console.log(photosR - photosC)

    let marginWork = 0
    
    if(photosR - photosC > oneImageLength*2){
      marginWork = margin + oneImageLength*2
    }
    if(photosR - photosC < oneImageLength*2){
      marginWork = margin+(photosR - photosC)
    }

    if(photosR - photosC < 10){
      marginWork = 0
    }

    console.log(marginWork)
    
    photosContainer.current.style.marginLeft = `-${marginWork.toString()}px`
    console.log(`-${margin.toString()}`)

   setTimeout(() => {

      setMargin(marginWork)
   
  },400)
}

const handleShowNavi = () => {
  buttonLeft.current.style.visibility = "visible"
  buttonRight.current.style.visibility = "visible"
} 

const handleHideNavi = () => {  
  buttonLeft.current.style.visibility = "hidden"
  buttonRight.current.style.visibility = "hidden"
}

  const pool = property.map(prop => {
    if(prop.pool === true){
      return "tak"
    } else return "nie"
  })

  const seaview = property.map(prop => {
    if(prop.seaview === true){
      return "tak"
    } else return "nie"
  })

  const parking = property.map(prop => {
    if(prop.parking === true){
      return "tak"
    } else return "nie"
  })

  const garden = property.map(prop => {
    if(prop.garden === true){
      return "tak"
    } else return "nie"
  })

  const priceOne = property[0].price.toString().slice(0,3)
  const priceTwo = property[0].price.toString().slice(3,6)
  const priceToShow = priceOne +" "+priceTwo

  

  return (
    <>
     {/* <!-- Google tag (gtag.js) --> */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-P4VZ7P7VZ5"></Script>
        <Script id="google-analitycs">{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-P4VZ7P7VZ5');
              `}
        </Script>
         <Head>
            <title>{property[0].title} - Onesta Group</title>
            <link rel="shortcut icon" href="/logotype.png" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width, minimum-scale=1, maximum-scale=1" />
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
            <link href="https://fonts.googleapis.com/css2?family=Manjari:wght@100;400;700&family=Nunito+Sans&display=swap" rel="stylesheet"></link>
        </Head>
        <div className='flex flex-col bg-gray-100'>
          <div className='fixed w-full bg-white h-16 z-50'>
            <Header 
              searchShow={searchShow}
              setSearchShow={setSearchShow}/>
          </div>
          <MiniHomeView />
          <div className='flex items-center justify-center h-[80px] w-full px-auto my-[10px] mx-auto bg-white'>
            <p className='block w-12/12 text-lg lg:text-2xl font-bold lg:mx-auto'>{property[0].title}</p>
          </div>
          <div className='w-[100%] p-[20px] mx-auto my-0 bg-white rounded-md lg:w-10/12'>
            <div className='flex flex-col md:flex-row h-full mx-auto'>
              <div className='md:w-[55%] w-full h-full overflow-hidden mr-[20px]'>
              <div className='flex h-full w-full flex-col justify-between'>
                <div className='overflow-hidden'>
                  <Image 
                      src={showedImage}
                      width={1000}
                      height={600}
                  ></Image>
                </div>
                <div ref={photosContainerMain}className='relative flex h-[100px]' onMouseEnter={handleShowNavi} onMouseLeave={handleHideNavi} >
                  <div onClick={handleChangeSlideLeft} ref={buttonLeft} className='absolute w-[55px] my-[2px] flex left-0 z-40 h-full justify-center items-center cursor-pointer bg-gray-600/[0.4] hover:bg-gray-600/[0.6] duration-300 invisible'>
                    <ChevronLeftIcon 
                        className='h-full w-8 text-white block'
                        onClick={handleChangeSlideLeft}/>
                  </div>
                  <div ref={photosContainer} className='overflow-x-hidden duration-300 flex h-full p-[1px] border-2'>
                    <div ref={photosRow} className={handleMarginSlider ? 'duration-300 flex flex-nowrap':'flex flex-nowrap ml-0'}>
                    <ImagesInPropetyCard
                      property={images}
                      images={images}
                      setImages={setImages}
                    />
                    </div>
                  </div>
                  {/* <div className='w-[30px] h-full cursor-pointer border'></div> */}
                  <div onClick={handleChangeSlideRight} ref={buttonRight} className='absolute w-[55px] my-[2px] flex right-0 z-40 h-full justify-center items-center cursor-pointer bg-gray-600/[0.4] hover:bg-gray-600/[0.6] duration-300 invisible'>
                    <ChevronRightIcon 
                      className='h-full w-8 text-white block'
                      onClick={handleChangeSlideRight}/>
                  </div>
                </div>
              </div>
              </div>
              <div className='flex flex-col justify-center md:w-[45%] w-full  bg-gray-200'>
                <div className='w-full h-28 lg:h-16'>
                  <div className='flex h-full items-center'>
                    <div className='h-12 w-10 flex items-center justify-center'>
                      <Localization />
                    </div>
                    <div className='flex flex-col h-full justify-center'>
                      <div className=''>{property[0].country}</div>
                      <div className='text-xl font-bold'>{property[0].region}, {property[0].city} </div>
                    </div>
                  </div>
                </div>
                <div className='flex flex-wrap justify-between content-center'>
                    <div className='w-1/4 border-2 border-white h-16 bg-gray-200 pt-2'>
                    <div className='w-full flex justify-center text-sm'>Sypalni</div>
                    <div className='flex h-full justify-center'>
                        <div className='mr-2'><Bedrooms/></div>
                        <div>{property[0].bedrooms}</div>
                      </div>
                    </div>
                    <div className='w-1/4 border-2 border-white h-16 bg-gray-200 pt-2'>
                    <div className='w-full flex justify-center text-sm'>Łazienki</div>
                        <div className='flex justify-center '>
                          <div className='mr-2'><ShowerOutlinedIcon/></div>
                          <div>{property[0].bathrooms}</div>
                        </div>
                    </div>
                    <div className='w-1/4 border-2 border-white h-16 bg-gray-200 pt-2'>
                    <div className='w-full flex justify-center text-xs'>Do Morza</div>
                        <div className='flex justify-center  '>
                          <div className='mr-2'><WavesOutlinedIcon/></div>
                          <div>{property[0].distance}</div>
                        </div>
                    </div>
                    <div className='w-1/4 border-2 border-white h-16 bg-gray-200 pt-2'>
                        <div className='w-full flex justify-center text-xs'>Basen</div>
                          <div className='flex justify-center '>
                            <div className='mr-2'><PoolOutlinedIcon/></div>
                            <div className='font-bold text-md'>{pool.toString().toUpperCase()}</div>
                          </div>
                    </div>
                    <div className='w-full h-64'>
                    <iframe className="w-[100%] h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6297.78949969237!2d-0.7631180743668244!3d37.88614401895693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd630f53e30fd6e9%3A0x65e736f432819e2f!2s03191%20Mil%20Palmeras%2C%20Prowincja%20Alicante%2C%20Hiszpania!5e0!3m2!1spl!2spl!4v1666100630565!5m2!1spl!2spl" allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                      <div className='bg-red-600 w-full h-20 flex flex-col justify-center items-start pl-4'>
                        <p className='text-5xl font-bold text-white'>od {priceToShow} €</p>
                        <p className='text-md text-white font-bold block'>Nr ref. {property[0].id}</p>
                      </div>
                </div>
              </div>
            </div>
          </div>
          <Features/>
          <Descryption 
            description={propertyDescription}
            bedrooms={property[0].bedrooms}
            bathrooms={property[0].bathrooms}
            distance={property[0].distance}
            pool={property[0].pool}
            propertyId={propertyId}
          />
        </div>
    </>
  )
}

export async function getServerSideProps (contex) {

      const id = contex.query
      const offerId = id.offers.slice(0,6)

      await db.connect();
      const results = await PropertyTwo.find({id:offerId})
      const property = JSON.parse(JSON.stringify(results))

      return {
        props:{
          property: property,
        }
      }
}





