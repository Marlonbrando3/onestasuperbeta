import { useEffect, useState } from "react";
import ChevronRightIcon from '@mui/icons-material/ChevronRightOutlined';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeftOutlined';
import { ImageSearch } from "@mui/icons-material";
import Image from "next/image";
import Link from 'next/link';

export default function ResultsSlider({
  property,
  images,
  choosedCountry,
  actualSite}) {

    const [actualImg, setActualImg] = useState(0)

    const [imagesNew, setImagesNew] = useState(images.map((img, index) => {
      if(index === 0){
        return{
          img: img,
          visible:true
        }
      } else return {img}}))

      // console.log(actualImg)

      const handleChangeSiteLeft = () => {

        setImagesNew(imagesNew.map((img, index) => {
          let imgLength = imagesNew.length-1
              if(actualImg === 0){
                if(index === 0){
                  setActualImg(imgLength)
                return{
                  img: img.img,
                  visible:false
                }
              }
              if(index === imgLength){
                console.log('okejka '+ index)
                return{
                  img: img.img,
                  visible:true
                }
              }else {
                return{
                  img: img.img,
                  visible:false
                }
              }
            }
            
            if(actualImg > 0){
              if(index === actualImg){
                setActualImg(actualImg-1)
                  return{
                    img: img.img,
                    visible:false
                  }
              }
              if(index === actualImg-1){
                console.log('okejka '+ index)
                return{
                  img: img.img,
                  visible:true
                }
              }
              else {
                return{
                  img: img.img,
                  visible:false
                }
              }
              }
            }))
      }


    const handleChangeSiteRight = () => {

      setImagesNew(imagesNew.map((img, index) => {
        let imgLength = imagesNew.length-1
            if(actualImg < imgLength){
              setActualImg(actualImg + 1)
              if(index === actualImg){
              return{
                img: img.img,
                visible:false
              }
            }
            if(index === actualImg+1){
              console.log('okejka '+ index)
              return{
                img: img.img,
                visible:true
              }
            }else {
              return{
                img: img.img,
                visible:false
              }
            }
          }
          
          if(actualImg === imgLength){
            if(index === actualImg){
              setActualImg(0)
                return{
                  img: img.img,
                  visible:false
                }
            }
            if(index === 0){
                return{
                  img: img.img,
                  visible:true
                }
            }
            else {
              return{
                img: img.img,
                visible:false
              }
            }
            }
          }))
    }

    useEffect(()=>{
      setImagesNew(images.map((img, index) => {
        if(index === 0){
          return{
            img: img,
            visible:true
          }
        } else {
          return{
            img: img,
            visible:false
          }
        }}))
  
    },[choosedCountry, actualSite, images])

  return (
    <div className="h-60 md:h-full w-full relative bg-white">
        <div onClick={handleChangeSiteLeft} className="flex items-center z-10 justify-center absolute w-10 h-full left-0 cursor-pointer bg-gray-900/[0.13] hover:bg-sky-900/[0.4] transition duration-450 hover:ease-in-out">
        <ChevronLeftIcon className="w-full h-full text-white" />
        </div>
        <div onClick={handleChangeSiteRight} className="flex items-center z-10 justify-center absolute w-10 h-full right-0 cursor-pointer group bg-gray-900/[0.13] hover:bg-sky-900/[0.4] transition duration-450 hover:ease-in-out">
        <ChevronRightIcon className="w-full h-full text-white"/>
        </div>
        {imagesNew.map((img, index) => 
        {
          if(img.visible === true) {
            console.log(img.img)
            return (
              <div key={index} className='overflow-hidden'>
                 <Link href={`/${property.country}/${property.id}&${property.title.replaceAll(' ','-')}`}>
                 <span class="loader absolute mx-auto"></span>
                    <div className="cursor-pointer w-full h-full">
                      <Image className="object-cover"
                        src={img.img}
                        alt="Picture of the author"
                        fill
                        priorit
                      />
                    </div>
                </Link>
                <div className="absolute text-base text-white bg-gray-900 p-2 bottom-0 right-0">{actualImg+1} / {imagesNew.length}</div>
                {/* <img key={img.img} className="object-cover h-full md:w-full" src={img.img} /> */}
              </div>
          )}
          else return false;
        }
        )}
    </div>
  )
}
