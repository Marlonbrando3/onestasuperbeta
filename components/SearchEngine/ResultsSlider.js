import { useEffect, useState, useRef } from "react";
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

    const imagesContainer = useRef();

    const [actualImg, setActualImg] = useState(0)
    const [margin, setMargin] = useState(0)
    const [imgCounter, setImgCounter] = useState(0)

    const [imagesNew, setImagesNew] = useState(images.map((img, index) => {
      if(index === 0){
        return{
          img: img,
          visible:true
        }
      } else return {img}}))

      const handleChangeSiteLeft = () => {
        const ImagesLength = images.length-1
        const divPX = 500
        const newMargin = margin + divPX

        if(imgCounter === 0){
          console.log("opcja 1")
          setImgCounter(ImagesLength)
          console.log(newMargin)
          imagesContainer.current.style.marginLeft = `${-(ImagesLength * divPX)}px`
          setMargin(-(ImagesLength * divPX))
        } else {  
          console.log("opcja 2")
          console.log(newMargin)
          setImgCounter(imgCounter - 1)
          imagesContainer.current.style.marginLeft = `${newMargin}px`
          setMargin(margin + divPX)
  
        }
      }

    const handleChangeSiteRight = () => {
      console.log("clicked right")
      const ImagesLength = images.length
      const divPX = 500
      const newMargin = margin - divPX
      if(imgCounter < ImagesLength-1){
        setImgCounter(imgCounter + 1)
        console.log(margin)
        imagesContainer.current.style.marginLeft = `${newMargin}px`
        setMargin(margin - divPX)
      } else {  
        setImgCounter(0)
        imagesContainer.current.style.marginLeft = `0px`
        setMargin(0)

      }
    }


  return (
    <div className="h-full w-full relative bg-white">
        <div onClick={handleChangeSiteLeft} className="flex items-center z-10 justify-center absolute w-10 h-full  left-0 cursor-pointer bg-gray-900/[0.13] hover:bg-sky-900/[0.4] transition duration-450 hover:ease-in-out">
        <ChevronLeftIcon className="w-full h-full text-white" />
        </div>
        <div onClick={handleChangeSiteRight} className="flex items-center z-10 justify-center absolute w-10 h-full right-0 cursor-pointer group bg-gray-900/[0.13] hover:bg-sky-900/[0.4] transition duration-450 hover:ease-in-out">
        <ChevronRightIcon className="w-full h-full text-white"/>
        </div>
        <div ref={imagesContainer} className="absolute flex duration-300">
          {images.map( i => (
          <div key={i} className="h-[320px] w-[500px] relative object-cover">
            <Image className="object-cover"
              src={i}
              fill
              priority
            />
          </div>
        ))}
        </div>
    </div>
  )
}
