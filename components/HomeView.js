import Image from "next/image";
import { useContext } from "react";
import { AppContext } from "../pages/_app";

function HomeView() {

  const {searchShow, setSearchShow} = useContext(AppContext)
  return (
      <div className={searchShow ?
      'h-full mt-24 w-screen m-0 overflow-hidden bg-white bg-none'
      :
      'h-full mt-24 duration-500 md:bg-contain sm:-mt-20 bg-horizontal md:bg-[url("../components/images/main_bg2.jpeg")] bg-[url("../components/images/main_bg1.jpg")]' 
      }>
        <div className={searchShow ? 
        "absolute transition-transform bg-white z-20 w-full h-full top-0"
        :
        "absolute transition-transform bg-white z-20 w-full h-full -top-full"}>
        </div>
        <div className="absolute bg-gray-900/[0.3] mt-10 md:w-full md:h-full"></div>
        <iframe className="-mt-20 mx-auto invisible" width="2000" height="1142"src="https://www.youtube.com/embed/YGAsG6_JgAI?controls=0&start=1900&autoplay=1&mute=1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox">
        </iframe>
      </div>   
  )
}
export default HomeView