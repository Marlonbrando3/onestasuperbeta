import Image from "next/image";
import { useContext } from "react";
import { AppContext } from "../pages/_app";

function HomeView() {

  const {searchShow, setSearchShow} = useContext(AppContext)
  return (
      <div className={searchShow ?
      'h-screen mt-24 w-screen m-0 overflow-hidden bg-white bg-none'
      :
      'h-[120vh] w-screen duration-500 md:bg-cover md:mt-24 sm:-mt-20 bg-cover md:bg-[url("../components/images/main_bg4.jpeg")] bg-[url("../components/images/main_bg4.jpeg")]' 
      }>
        <div className={searchShow ? 
        "absolute transition-transform bg-white z-20 w-full h-full top-0"
        :
        "absolute transition-transform bg-white z-20 w-full h-full -top-full"}>
        </div>
        {/* <div className="absolute bg-gray-900/[0.3] mt-10 md:w-full md:h-full"></div> */}
        {/* <iframe className="-mt-20 mx-auto invisible" width="2000" height="1142"src="https://www.youtube.com/embed/YGAsG6_JgAI?controls=0&start=1900&autoplay=1&mute=1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox">
        </iframe> */}
      </div>   
  )
}
export default HomeView