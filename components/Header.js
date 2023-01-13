import { useState, useEffect, useContext } from "react";
import { AppContext } from "../pages/_app";
import Head from "next/head";
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
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import PhoneIcon from '@mui/icons-material/Phone';

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
        <Head>
            <title>Onesta Group</title>
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600&display=swap" rel="stylesheet"></link>
            <meta name="viewport" content="initial-scale=1.0, width=device-width, minimum-scale=1, maximum-scale=1" />
        </Head>
    <div className='transition-all duration-700 flex w-full h-22 top-0 lg:pl-24 lg:pt-2 lg:pb-0 lg:pr-10 px-4 text-gray-900 bg-white'>
    <div className={MobileMenu ? 
      "flex items-center z-40 justify-center duration-300 bg-white absolute h-screen left-0 top-0 w-full": 
      "hidden items-center justify-center duration-300 bg-red-400 absolute w-full -left-screen top-0"}>
        <ul className="flex flex-col items-start justify-center mr-6 z-30">
        <li ><Link onClick={handleBackToMainPage}href='/'>Strona główna</Link></li>
           <li >Oferta</li>
           <li >Jak kupić</li>
           <li ><Link href='/aboutus'>O Nas</Link></li>
           <li ><Link href='/aboutus'>ABC Inwestora</Link></li>
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
            <div className="w-full h-1/3 flex justify-end items-center">
              <div className="mx-5 font-bold text-xs bg-red-700 lg:px-2 px-1 py-1 text-white rounded-md md:flex items-center cursor-pointer md:w-40 w-8 h-8 lg:static absolute top-2 right-10 ">
                <PhoneIcon className="lg:w-7 lg:h-3 lg:pr-2 text-white px-auto"/>
                <a href="tel:+48669752525" className="hidden md:block">+48 669 75 25 25</a></div>
              <div className="lg:static absolute top-14 left-0 bg-white ">
                <a href="https://www.facebook.com/profile.php?id=100071864003899"><FacebookIcon className="iconscosialheader" /></a>
                <InstagramIcon className="iconscosialheader"/>
                <LinkedInIcon className="iconscosialheader"/>
                <YouTubeIcon className="iconscosialheader"/>
                <PodcastsIcon className="iconscosialheader"/>
              </div>
            </div>
                <div className="h-2/3 justify-end lg:flex items-center mt-1">
                      <ul className="lg:flex hidden">
                      <li className='list'><Link  onClick={handleBackToMainPage} href='/'>Strona główna</Link></li>
                      <li className='list'><Link href='/aboutus'>O Nas</Link></li>
                          <li className='list'>Zarządzanie najmem</li>
                          <li className='list'>Blog</li>
                          <li className='list'><Link href='/abc'>ABC Inwestora</Link></li>
                          <li className='list'>Kontakt</li>
                      </ul>
                      <div className="h-full flex justify-end items-center lg:hidden">
                        {MobileMenu ? <CloseIcon 
                          className="transition-all duration-700 cursor-pointer block z-50 w-10 h-10 lg:hidden visible"
                          onClick={handleShowMobileMenu}/> : 
                          <MenuIcon 
                          className="transition-all duration-700 cursor-pointer z-50 w-10 h-10 lg:hidden block"
                          onClick={handleShowMobileMenu}/>}
                      </div>
                </div>
            </div>
    </div>
    <MobileFilters />
    </>
  )
}
