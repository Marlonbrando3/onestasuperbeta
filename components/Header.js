import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Logotype from './images/logotype.png'
import FBIcon from './images/facebook.png'
import IGIcon from './images/instagram.png'
// import { UserIcon, StarIcon } from '@heroicons/react/outline'
import Applychanges from "./SearchEngine/Applychanges";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function Header({searchShow, setSearchShow, apply, setApply,showSearchComponentsOnMobile,
  setShowSearchComponentsOnMobile}) {

  const [MobileMenu, setMobileMenu] = useState(false)

  const handleShowMobileMenu = () => {
    setMobileMenu(MobileMenu => !MobileMenu)
  }

  const handleShowMobileFilters = () => {
    setShowSearchComponentsOnMobile(showSearchComponentsOnMobile => !showSearchComponentsOnMobile)
  }

  return (
    <>
    <div className={searchShow ? 'transition-all duration-700 z-50 flex bg-white w-full h-16 fixed top-0 lg:pl-16 lg:pt-2 lg:pb-2 lg:pr-10 px-4 text-gray-900':
    'shadow-md transition-all duration-700 z-50 flex md:bg-gray-800/[0.4] lg:bg-gray-800/[0.4] bg-white fixed w-full h-16 first-letter md:h-20 top-0 lg:pl-16 lg:pr-10 px-4'}>
    <div className={MobileMenu ? 
      "flex items-center justify-center transition-all duration-700 bg-white absolute w-full h-screen left-0 top-0": 
      "flex items-center justify-center transition-all duration-700 bg-red-400 absolute w-full h-screen left-full top-0"}>
        <ul className="flex flex-col items-start justify-center mr-6">
           <li >Strona główna</li>
           <li >Oferta</li>
           <li >Jak kupić</li>
           <li >O Nas</li>
           <li >ABC Zakupu</li>
           <li >Kontakt</li>
          </ul>
    </div>
        <Image
            src={Logotype}
            width={160}
            objectFit="contain"
            alt="logo"
          />
            <div className="flex flex-col flex-1 h-full">
            <div className=""></div>
                <div className="h-full justify-end lg:flex items-center">
                      <ul className="lg:flex mr-6 hidden">
                          <li className={searchShow ? 'list' : 'listScrolled '}>Strona główna</li>
                          <li className={searchShow ? 'list' : 'listScrolled '}>Oferta</li>
                          <li className={searchShow ? 'list' : 'listScrolled '}>Jak kupić</li>
                          <li className={searchShow ? 'list' : 'listScrolled '}>O Nas</li>
                          <li className={searchShow ? 'list' : 'listScrolled '}>ABC Zakupu</li>
                          <li className={searchShow ? 'list' : 'listScrolled '}>Kontakt</li>
                      </ul>
                      <div className="h-full  flex justify-end items-center">
                        <div 
                          className={searchShow ? 
                            "border-2 border-gray-900 rounded-md px-2 ml-4 w-26 mr-4 z-50 block md:hidden" : 
                            "border-2 border-gray-900 rounded-md px-2 ml-4 w-32 mr-4 z-50 invisible md:hidden"}
                            onClick={handleShowMobileFilters}>
                              <p className={(searchShow===true && showSearchComponentsOnMobile===true) ? "visible cursor-pointer" : "hidden"}>X</p>
                              <p className={(searchShow===true && showSearchComponentsOnMobile===false) ? "visible cursor-pointer" : "hidden"}>Filtry</p>
                        </div>
                        {MobileMenu ? <CloseIcon 
                          className="transition-all duration-700 cursor-pointer block z-50 w-10 h-10 lg:hidden visible"
                          onClick={handleShowMobileMenu}/> : 
                          <MenuIcon 
                          className="transition-all duration-700 cursor-pointer block z-50 w-10 h-10 lg:hidden visible"
                          onClick={handleShowMobileMenu}/>}
                      </div>
                </div>

            </div>
    </div>
    </>
  )
}
