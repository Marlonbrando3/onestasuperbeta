import { useState, useRef, useContext } from "react";
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
import {HiOutlineMenu} from 'react-icons/hi'
import {HiOutlineMenuAlt3} from 'react-icons/hi'


export default function Header({}) {
  
    const {searchShow,setSearchShow} = useContext(AppContext)
    const {headerAfterFirstView, setHeaderAfterFirstView} = useContext(AppContext)

    const MouseOnZarzadzanie = useRef();
    const MouseOnZarzadzanieSpain = useRef();
    const MouseOnProperties = useRef();
    const MouseOnSpain = useRef();
    const MouseOnPortugal = useRef();
    const MouseOnCroatia = useRef();


  const [MobileMenu, setMobileMenu] = useState(false)

  const handleShowMobileMenu = () => {
    setMobileMenu(MobileMenu => !MobileMenu)
  }

  const handleBackToMainPage = () => {
    window.localStorage.clear()
    setSearchShow(false)
  }

  const handleShowListMenuZarzadzanie = () => {
    MouseOnZarzadzanie.current.style.display = "flex";
    MouseOnZarzadzanie.current.style.color = "black";
    MouseOnZarzadzanie.current.style.backgroundColor = "white";
  }

  const handleHideListMenuZarzadzanie = () => {
    MouseOnZarzadzanie.current.style.display = "none";
    MouseOnZarzadzanie.current.style.backgroundColor = "none";
  }

  const handleShowListMenuNieruchomosci = () => {
    MouseOnProperties.current.style.display = "flex";
    MouseOnProperties.current.style.backgroundColor = "none";
  }

  const handleHideListMenuNieruchomosci = () => {
    MouseOnProperties.current.style.display = "none";
    MouseOnProperties.current.style.backgroundColor = "none";
  }

  const handleHover = (e) => {

    e.current.style.backgroundColor = "#B91C1C";
    e.current.style.color = "white";
  }

  const handleHoverLeave = (e) => {

    e.current.style.backgroundColor = "white";
    e.current.style.color = "black";
  }

  const handleClearData = () => {

    async function cleardata() {
      await window.localStorage.clear()
  }
  cleardata()
  }

  return (
    <>
    {/* Mobile Menu */}
    <div className='transition-all duration-700 w-full h-[60px] md:h-[60px] top-0 lg:pb-0 lg:pr-10 px-4 text-gray-900 bg-white'>
    <div className="xl:w-[1200px] w-full h-full flex mx-auto">
    <div className={MobileMenu ? 
      "flex items-center z-40 justify-center duration-300 bg-white absolute h-screen left-0 top-0 w-full": 
      "hidden items-center justify-center duration-300 bg-red-400 absolute w-full -left-screen top-0"}>
        <ul className="flex flex-col items-start justify-center mr-6 z-30">
          <li ><Link className="text-3xl" onClick={handleBackToMainPage}href='/'>Strona główna</Link></li>
          <li ><Link className="text-3xl" href={{pathname:'/[country]', query: {country:"hiszpania", page:1}}}>Nieruchomości</Link></li>
          <li ><Link className="text-3xl" href='/aboutus'>O Nas</Link></li>
          <li ><Link className="text-3xl" href='/zarzadzanie-nieruchomosciami-w-hiszpanii'>Zarządzanie najmem</Link></li>
          <li ><Link className="text-3xl" onClick={handleBackToMainPage}href='/blog'>Blog</Link></li>
          <li ><Link className="text-3xl" href='/abc'>ABC Inwestora</Link></li>
          <li ><Link className="text-3xl" href='#'>Kontakt</Link></li>
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
            <div className="w-full lg:h-1/3 flex justify-end items-center">
              <a href="tel:+48669752525">
              <div className="mx-5 mt-1 font-bold text-xs bg-red-700 lg:px-2 px-1 py-2 text-white rounded-md md:flex items-center cursor-pointer md:w-40 w-[30px] h-[30px] lg:static absolute top-2 right-10 ">
                <PhoneIcon className="lg:w-7 lg:h-3 lg:pr-2 text-white px-auto"/>
                <p className="hidden md:block">+48 669 75 25 25</p></div>
            </a>
              <div className="lg:static absolute top-14 left-0 bg-white ">
                <a href="https://www.facebook.com/profile.php?id=100071864003899"><FacebookIcon className="iconscosialheader"/></a>
                <InstagramIcon className="iconscosialheader"/>
                <LinkedInIcon className="iconscosialheader"/>
                <YouTubeIcon className="iconscosialheader"/>
                <PodcastsIcon className="iconscosialheader"/>
              </div>
              {/* <Link href="/account/login" className="px-2  border rounded-md border-green-700 mr-2 cursor-pointer duration-300 hover:bg-green-700 hover:text-white " >Zaloguj</Link>
              <Link href="/account/signup" className="border bg-green-700 border-green-700 px-2 rounded-md text-white cursor-pointer duration-300 hover:bg-white hover:text-black">Utwórz konto</Link> */}
            </div>
            {/* Desktop Menu */}
                <div className="h-full justify-end flex items-center ">
                      <ul className="lg:flex hidden">
                      <li className='list'><Link  onClick={handleBackToMainPage} href='/'>Strona główna</Link></li>
                      <li className='list'><Link href='/aboutus'>O Nas</Link></li>
                      <li className='list' onMouseEnter={handleShowListMenuNieruchomosci} onMouseLeave={handleHideListMenuNieruchomosci}>Nieruchomości
                        <div className="hidden absolute mt-2 -ml-2 bg-white flex-col" ref={MouseOnProperties}>
                            <Link onClick={handleClearData} href={{pathname:'/[country]', query: {country:"hiszpania", page:1}}} className="p-2 text-black" ref={MouseOnSpain} name="MouseOnSpain" onMouseEnter={() => handleHover(MouseOnSpain)} onMouseLeave={() => handleHoverLeave(MouseOnSpain)}>Nieruchomości w Hiszpanii</Link>
                            <Link href={{pathname:'/[country]', query: {country:"chorwacja", page:1}}} className="p-2 text-black" ref={MouseOnCroatia} name="MouseOnCroatia" onMouseEnter={() => handleHover(MouseOnCroatia)} onMouseLeave={() => handleHoverLeave(MouseOnCroatia)}>Nieruchomości w Chorwacji</Link>
                            <Link href={{pathname:'/[country]', query: {country:"portugalia", page:1}}} className="p-2 text-black" ref={MouseOnPortugal} name="MouseOnPortugal" onMouseEnter={() => handleHover(MouseOnPortugal)} onMouseLeave={() => handleHoverLeave(MouseOnPortugal)}>Nieruchomości w Portugalii</Link>
                        </div>
                      </li>
                      <li className='list' onMouseEnter={handleShowListMenuZarzadzanie} onMouseLeave={handleHideListMenuZarzadzanie}>Zarządzanie najmem
                        <div className="hidden absolute mt-2 -ml-2 bg-white flex-col" ref={MouseOnZarzadzanie}>
                          <Link href='/zarzadzanie-nieruchomosciami-w-hiszpanii' className="p-2 text-black" ref={MouseOnZarzadzanieSpain} onMouseEnter={() => handleHover(MouseOnZarzadzanieSpain)} onMouseLeave={() => handleHoverLeave(MouseOnZarzadzanieSpain)}>Zarządzanie najmem w Hiszpanii</Link>
                        </div>
                      </li>
                      <li className='list'><Link onClick={handleBackToMainPage}href='/blog'>Blog</Link></li>
                      <li className='list'><Link href='/abc'>ABC Inwestora</Link></li>
                          <li className='list'>Kontakt</li>
                      </ul>
                      <div className="h-[40px] w-[40px] flex justify-center items-center lg:hidden">
                        {MobileMenu ? <HiOutlineMenuAlt3 
                          className="transition-all duration-700 cursor-pointer block z-50 h-[40px] w-[40px] lg:hidden visible"
                          onClick={handleShowMobileMenu}/> : 
                          <HiOutlineMenu className="transition-all duration-700 cursor-pointer z-50 h-[40px] w-[40px] lg:hidden block"
                          onClick={handleShowMobileMenu}/>}
                      </div>
                </div>
            </div>
          </div>
    </div>
    <MobileFilters />
    </>
  )
}
