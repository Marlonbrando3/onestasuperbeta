import Image from 'next/image';
import {useRouter} from 'next/router';
import { useState, useEffect } from 'react';
import React from 'react';
import db from '../utils/db';
import PropertyTwo from '../model/property';
import Localization from '@mui/icons-material/Room';
import ShowerOutlinedIcon  from '@mui/icons-material/ShowerOutlined';
import WavesOutlinedIcon from '@mui/icons-material/WavesOutlined';
import PoolOutlinedIcon from '@mui/icons-material/PoolOutlined';
import Bedrooms from '@mui/icons-material/AirlineSeatIndividualSuiteOutlined';
import ImagesInPropetyCard from '../components/ImagesInPropetyCard';
import ChevronRightIcon from '@mui/icons-material/chevronRightOutlined';
import ChevronLeftIcon from '@mui/icons-material/chevronLeftOutlined';
import Features from '../components/Features';
import Descryption from '../components/Descryption';
import ContactForm from '../components/ContactForm';


export default function Property({property}) {
  let propertyDescription = (property[0].description)
  let propertyId = (property[0].id)

  const [actualImage, setActualImage] = useState(1);
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

  console.log(images)
  let showedImage

  images.filter(img=>{
    if(img.showed === true) {
        showedImage = img.image
      }
    })

    // console.log(showedImage)
  const[handleMarginSlider, setHandleMarginSlider] = useState(false)


  //change Imagearray
  let hiddenImg;
  
  const handleChangeSlideLeft = () => {
    setHandleMarginSlider('true')

    setTimeout(() => {

      let ImagesSorted = images.map((image, index) => {
        if(image.count === 1){
          hiddenImg = {
              ...image,
              count:0
            }
        
            return {
              ...image,
              count:2,
           }
        }
      if(index === 1) {
          return{
            ...image,
            count:1
        }
      } 
      else return{...image}
  }
)
  ImagesSorted.push(hiddenImg)
  let ImagesDelete = ImagesSorted.filter(img => img.count !== 2)
  setImages(ImagesDelete)
    setHandleMarginSlider(false)
},400)

}
  const router = useRouter();
  const {id} = router.query

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
        <div className='property-card-container'>
          <div className='property-card-title'>
            <p className='block text-2xl font-bold'>{property[0].title}</p>
          </div>
          <div className='property-card-data-container'>
            <div className='flex h-full mx-auto'>
              <div className='property-data-left'>
              <div className='property-data-images-container'>
                <div className='property-data-main-image'>
                  <Image 
                      src={showedImage}
                      width={1000}
                      height={800}
                  ></Image>
                </div>
                <div className='property-card-data-gallery-container'>
                  <div className='property-card-data-gallery-arrow-blindbox'></div>
                  <div className='property-card-data-gallery-arrow-left'>
                    <ChevronLeftIcon className='h-full w-8'/>
                  </div>
                  <div className='property-card-data-gallery-all-images'>
                    <div className={handleMarginSlider ? 'property-card-data-gallery clickedSlideLeftGallery':'property-card-data-gallery unClickedSlideLeftGallery'}>
                    <ImagesInPropetyCard
                      property={images}
                      images={images}
                      setImages={setImages}
                    />
                    </div>
                  </div>
                  <div className='property-card-data-gallery-arrow-blindbox'></div>
                  <div className={handleMarginSlider ? 'property-card-data-gallery-arrow-right clickedSlideLeftGallery' : 'property-card-data-gallery-arrow-right unClickedSlideLeftGallery'}>
                    <ChevronRightIcon 
                      className='h-full w-8'
                      onClick={handleChangeSlideLeft}/>
                  </div>
                </div>
              </div>
              </div>
              <div className='property-data-right'>
                <div className='property-data-localization'>
                  <div className='flex h-full'>
                    <div className='h-full w-10 flex items-center justify-center'>
                      <Localization />
                    </div>
                    <div className='flex flex-col h-full'>
                      <div className=''>{property[0].country}</div>
                      <div className='text-xl font-bold'>{property[0].region}, {property[0].city} </div>
                    </div>
                  </div>
                </div>
                <div className='property-data-specyfication-box'>
                    <div className='property-data-specifation-one'>
                    <div className='w-full flex justify-center text-xs'>Sypalni</div>
                        <div className='flex '>
                          <div className='mr-2'><Bedrooms/></div>
                          <div>{property[0].bedrooms.toString()}</div>
                        </div>
                    </div>
                    <div className='property-data-specifation-one'>{property[0].bathrooms}</div>
                    <div className='property-data-specifation-one'>{property[0].distance}</div>
                    <div className='property-data-specifation-one'>
                        <div className='w-full flex justify-center text-xs'>Basen</div>
                          <div className='flex'>
                            <div className='mr-2'><PoolOutlinedIcon/></div>
                            <div className='font-bold text-md'>{pool.toString().toUpperCase()}</div>
                          </div>
                    </div>
                    <div className='w-full h-50'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6297.78949969237!2d-0.7631180743668244!3d37.88614401895693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd630f53e30fd6e9%3A0x65e736f432819e2f!2s03191%20Mil%20Palmeras%2C%20Prowincja%20Alicante%2C%20Hiszpania!5e0!3m2!1spl!2spl!4v1666100630565!5m2!1spl!2spl" width="458" height="200" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                      <div className='bg-red-600 w-full h-20 flex flex-col justify-center items-start pl-4'>
                        <p className='text-5xl font-bold text-white'>{priceToShow} €</p>
                        <p className='text-md text-white font-bold block'>Nr ref. {property[0].id}</p>
                      </div>
                </div>
              </div>
            </div>
          </div>
          <Features/>
          <Descryption 
            description={propertyDescription}
          />
          <ContactForm 
            propertyId={propertyId}
          />
        </div>
    </>
  )
}

export async function getServerSideProps (contex) {
      await db.connect();
      const results = await PropertyTwo.find({id:contex.query.id})
      const property = JSON.parse(JSON.stringify(results))

      console.log(property)

      return {
        props:{
          property: property
        }
      }
}





