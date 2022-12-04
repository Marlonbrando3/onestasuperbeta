import { useEffect, useState } from "react"
import ChevronRightIcon from '@mui/icons-material/ChevronRightOutlined';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeftOutlined';
import { ImageSearch } from "@mui/icons-material";

export default function ResultsSlider({
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


    const handleChangeSite = () => {
      
      setImagesNew(images.map((img, index) => {
            if(index === actualImg){
              return{
                img: img,
                visible:false
              }
            }
            if(index === actualImg+1){
              console.log('okejka')
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
          setActualImg(actualImg + 1)
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
    <div className="h-60 w-full relative">
        <div onClick={handleChangeSite} className="flex items-center justify-center absolute w-10 h-full left-0 cursor-pointer hover:bg-sky-900/25 transition duration-450 hover:ease-in-out">
        <ChevronLeftIcon className="w-full h-full text-white" />
        </div>
        <div onClick={handleChangeSite} className="flex items-center justify-center absolute w-10 h-full right-0 cursor-pointer group hover:bg-sky-900/25 transition duration-450 hover:ease-in-out">
        <ChevronRightIcon className="w-full h-full text-white"/>
        </div>
        {imagesNew.map((img, index) => 
        {
          if(img.visible === true) {
            return (
              <div key={index} className="w-full h-full">
                <img key={img.img} className="object-cover h-full" src={img.img} />
              </div>
          )}
          else return false;
        }
        )}
    </div>
  )
}
