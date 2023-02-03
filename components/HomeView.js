import Image from "next/image";
import { useContext } from "react";
import { AppContext } from "../pages/_app";

function HomeView() {

  const {searchShow, setSearchShow} = useContext(AppContext)
  return (
      <div className={searchShow ?
      'h-screen mt-24 w-screen m-0 overflow-hidden bg-white bg-none'
      :
      'h-[120vh] w-screen duration-500 md:bg-cover  sm:-mt-20 bg-cover md:bg-[url("../components/images/main_bg4.jpeg")] bg-[url("../components/images/main_bg4.jpeg")]' 
      }>
        <div className={searchShow ? 
        "absolute transition-transform bg-white z-20 w-full h-full top-0"
        :
        "absolute transition-transform bg-white z-20 w-full h-full -top-full"}>
        </div>
      </div>   
  )
}
export default HomeView