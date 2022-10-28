import Image from "next/image";
import img from '../components/images/main_bg.jpeg';


function HomeView({searchShow, setSearchShow}) {
  return (
      <div className={searchShow ? 'w-full h-12 m-0 overflow-visible transition duraration-700 bg-cover bg-[url("../components/images/main_bg.jpeg")]'
      :
      'h-screen w-screen -mt-20 overflow-hidden transition-all duration-700 bg-cover bg-center bg-[url("../components/images/main_bg.jpeg")]'
      }>
          {/* <Image 
            src={img}
            className={searchShow ?"h-10 object-none":"h-screen object-fill"}
            layout="fill"
            objectFit="cover"
          /> */}
       </div>   
  )
}
export default HomeView