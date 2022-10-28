import { useEffect, useState } from "react"
import ChevronRightIcon from '@mui/icons-material/chevronRightOutlined';
import ChevronLeftIcon from '@mui/icons-material/chevronLeftOutlined';
import { ImageSearch } from "@mui/icons-material";

export default function ResultsSlider({
  images,
  choosedCountry,
  actualSite}) {

    const [imagesNew, setImagesNew] = useState(images.map((img, index) => {
      if(index === 0){
        return{
          img: img,
          visible:true
        }
      } else return {img}}))

    const [actualImg, setActualImg] = useState(0)

    const handleChangeSite = () => {
      setImagesNew(images.map((img, index) => {
            if(index === actualImg){
              return{
                img: img,
                visible:false
              }
            }
            if(index+1 > actualImg){
              setActualImg(actualImg + 1)
              return{
                img: img,
                visible:true
              }
            }
            else return {
                img: img,
                visible:false
              }
            }
          ))
    }

    useEffect(()=>{
      setImagesNew(images.map((img, index) => {
        if(index === 0){
          return{
            img: img,
            visible:true
          }
        } else return {img}}))
  
    },[choosedCountry, actualSite, images])

  return (
    <div className="h-full w-full relative">
        <div onClick={handleChangeSite} className="flex items-center justify-center absolute w-10 h-full left-0 cursor-pointer hover:bg-sky-900/25 transition duration-450 hover:ease-in-out">
        <ChevronLeftIcon className="w-full h-full text-white" />
        </div>
        <div onClick={handleChangeSite} className="flex items-center justify-center absolute w-10 h-full right-0 cursor-pointer group hover:bg-sky-900/25 transition duration-450 hover:ease-in-out">
        <ChevronRightIcon className="w-full h-full text-white"/>
        </div>
        {imagesNew.map(img => 
        {
          if(img.visible === true) {
            return (
            <img className="object-fill w-full h-full" src={img.img} />
          )
        }
      }
        )}
    </div>
  )
}
