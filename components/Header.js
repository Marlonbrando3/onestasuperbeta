import { useState, useEffect, useContext } from "react";
import { AppContext } from "../pages/_app";
import Image from "next/image";
import Link from "next/link";
import Logotype from './images/logotype.png'
import FBIcon from './images/facebook.png'
import IGIcon from './images/instagram.png'
// import { UserIcon, StarIcon } from '@heroicons/react/outline'
import Applychanges from "./SearchEngine/Applychanges";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import MobileFilters from "./MobileFilters";

export default function Header({}) {
  
    const {searchShow,setSearchShow} = useContext(AppContext)
    const {headerAfterFirstView, setHeaderAfterFirstView} = useContext(AppContext)

  const [MobileMenu, setMobileMenu] = useState(false)

  const handleShowMobileMenu = () => {
    setMobileMenu(MobileMenu => !MobileMenu)
  }

  const handleBackToMainPage = () => {
    window.localStorage.clear()
    setSearchShow(false)
  }

 

  return (
    <>
    <div className='transition-all duration-700 flex w-full h-16 top-0 lg:pl-24 lg:pt-2 lg:pb-2 lg:pr-10 px-4 text-gray-900 bg-white'>
    <div className={MobileMenu ? 
      "flex items-center z-40 justify-center duration-300 bg-white absolute h-screen left-0 top-0 w-full": 
      "hidden items-center justify-center duration-300 bg-red-400 absolute w-full -left-screen top-0"}>
        <ul className="flex flex-col items-start justify-center mr-6 z-30">
        <li ><Link onClick={handleBackToMainPage}href='/'>Strona główna</Link></li>
           <li >Oferta</li>
           <li >Jak kupić</li>
           <li ><Link href='/aboutus'>O Nas</Link></li>
           <li >ABC Zakupu</li>
           <li >Kontakt</li>
          </ul>
    </div>
    <Link onClick={handleBackToMainPage} className="cursor-pointer flex items-center" href='/'>
        <Image className="py-3"
            src={Logotype}
            width={150}
            alt="logo"
          />
      </Link>
            <div className="flex flex-col flex-1 h-full">
            <div className=""></div>
                <div className="h-full justify-end lg:flex items-center">
                      <ul className="lg:flex mr-6 hidden">
                      <li ><Link  className='list' onClick={handleBackToMainPage} href='/'>Strona główna</Link></li>
                          <li className='list'>
                            <Link href='/aboutus'>O Nas</Link>
                          </li>
                          <li className='list'>Zarządzanie najmem</li>
                          <li className='list'>Blog</li>
                          <li className='list'>ABC Zakupu</li>
                          <li className='list'>Kontakt</li>
                      </ul>
                      <div className="h-full flex justify-end items-center">
                        {MobileMenu ? <CloseIcon 
                          className="transition-all duration-700 cursor-pointer block z-50 w-10 h-10 md:hidden visible"
                          onClick={handleShowMobileMenu}/> : 
                          <MenuIcon 
                          className="transition-all duration-700 cursor-pointer z-50 w-10 h-10 md:hidden block"
                          onClick={handleShowMobileMenu}/>}
                      </div>
                </div>

            </div>
    </div>
    <MobileFilters />
    </>
  )
}
