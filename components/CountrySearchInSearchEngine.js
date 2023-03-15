import Head from 'next/head'
import Link from 'next/link'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloseIcon from '@mui/icons-material/Close';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import { useRouter } from 'next/router'
import { useState, useRef, useReducer, useEffect, useCallback, useMemo} from "react"
import CheckIcon from '@mui/icons-material/Check';
import Image from 'next/image'
import data from "../data/DataCountry.json"

export default function Home() {

  const router = useRouter();

    let regionsToShow = [router.query.region];
    const country = router.query.country

    console.log(country)
    
    const handleDeleteParam = (e) => {
    const params = new URLSearchParams(router.query);
    params.delete('region');
    const queryString = params.toString();
    const path = `/[country]${queryString ? `?${queryString}` : ''}`;
    // console.log(queryString)

    router.push(path, '', { scroll: false });

  }

  
  const countrylist = useRef();
  const regionslist = useRef();

  const handleCountryListShow = () => {
    countrylist.current.style.display = "block"
  }

  const handleCountryListHide = () => {
    countrylist.current.style.display = "none"
  }

  const handleRegionsListShow = () => {
    regionslist.current.style.display = "block"
  }

  const handleRegionsListHide = () => {
    regionslist.current.style.display = "none"
  }

  const pushCountry = (e) => {

    let name = e.target.getAttribute('name')
    countrylist.current.style.display = "none"

    router.push({
      pathname: `/${name}`,
      query:{page:1}
      })

  } 

  const pushRegions = (query) => {

    let region = query.target.innerHTML
    regionslist.current.style.display = "none"

    router.push({
      pathname: "/[country]",
      query:{...router.query,region:region, page:1}
      })
  }

  const pushBungalow = (e) => {

    if(router.query.bungalow) {
      const params = new URLSearchParams(router.query);
      params.delete('bungalow');
      params.set('page',1)
      const queryString = params.toString();
    //   console.log(queryString)
      const path = `/[country]${queryString ? `?${queryString}` : ''}`;
      router.push(path, '', { scroll: false });
    }
    else {
      
      router.push({
      scroll:false,
      pathname: "/[country]",
      query:{...router.query,bungalow:true, page:1},

    })
  }
  }

  const pushHouse = (e) => {

    if(router.query.house) {
      const params = new URLSearchParams(router.query);
      params.delete('house');
      params.set('page',1)
      const queryString = params.toString();
      const path = `/[country]${queryString ? `?${queryString}` : ''}`;
      router.push(path, '', { scroll: false });
    }
    else {
      router.push({
      pathname: "/[country]",
      query:{...router.query,house:true, page:1}
    })
  }
}

const pushApartament = (e) => {

  if(router.query.apartament) {
    const params = new URLSearchParams(router.query);
    params.delete('apartament');
    params.set('page',1)
    const queryString = params.toString();
    const path = `/[country]${queryString ? `?${queryString}` : ''}`;
    router.push(path, '', { scroll: false });
  }
  else {
    router.push({
    pathname: "/[country]",
    query:{...router.query,apartament:true, page:1}
  })
}
}

const conditions = data.map(c => {
  if(c.country === country){
    return (
      c.region.map((r,i) => 
        <p key={i} onClick={pushRegions} onMouseDown={(e) => e.preventDefault()} className='hover:bg-red-600/[0.9] hover:text-white text-black cursor-pointer text-normal pl-3' query={{region:{r}}}>{r}</p>
        )
      )
    }
})

const RegionsList = regionsToShow.map(region => {
    if(router.query.region !== undefined) {
        return <div key={region} className='bg-red-600 text-white flex items-center justify-between pl-2 pr-1 rounded-md absolute top-0 h-8 w-full cursor-pointer'>
            <span className='font-normal'>{region}</span>
            <span>
                <CloseIcon className='w-5 h-5' onClick={handleDeleteParam} />
                <KeyboardArrowDownIcon className='w-6 h-6' onClick={handleRegionsListShow}/>
            </span>
        </div>
    } else {
        return <div className='bg-white w-full absolute' key={region}>{region}</div>
    }
})


  const handleFirstMarket = (e) => {

    if(router.query.firstmarket) {
      const params = new URLSearchParams(router.query);
      params.delete('firstmarket');
      params.set('page',1)
      const queryString = params.toString();
      const path = `/[country]${queryString ? `?${queryString}` : ''}`;
      router.push(path, '', { scroll: false });
    }
    else {
      router.push({
      pathname: "/[country]",
      query:{...router.query,firstmarket:true, page:1}
    })
  }
  }

  const handleSecondMarket = (e) => {

    if(router.query.secondmarket) {
      const params = new URLSearchParams(router.query);
      params.delete('secondmarket');
      params.set('page',1)
      const queryString = params.toString();
      const path = `/[country]${queryString ? `?${queryString}` : ''}`;
      router.push(path, '', { scroll: false });
    }
    else {
      router.push({
      pathname: "/[country]",
      query:{...router.query,secondmarket:true, page:1}
    })
  }
  }


  return (
    <>
      <Head>
        <title>Nieruchomości</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <main className='flex flex-col w-full mx-auto'>
          {/* Countries */}
          <div className=''>
            <label className='mt-2 font-semibold'>Kraj</label>
            <div className='relative w-full'>
                <input autoComplete="off"  className='border border-gray-900 rounded-md h-8 w-full' name="country" onFocus={handleCountryListShow} onBlur={handleCountryListHide}></input>
                <div className=' flex justify-between px-1 text-white absolute cursor-pointer bg-red-600 top-0 h-8 pl-2 rounded-md w-full items-center font-normal'>{router.query.country.charAt(0).toUpperCase() + router.query.country.slice(1)}<KeyboardArrowDownIcon className='w-6 h-6' onClick={handleCountryListShow} /></div>
            </div>
            <div className='absolute bg-white text-black w-full top-6 -mt-1 hidden border border-gray-900 rounded-md' ref={countrylist}>
                <div className='cursor-pointer hover:bg-red-500/[0.9] pl-3 font-normal hover:text-white' onMouseDown={(e) => e.preventDefault()} name="hiszpania" onClick={pushCountry}>Hiszpania</div>
                <div className='cursor-pointer hover:bg-red-500/[0.9] pl-3 font-normal hover:text-white' onMouseDown={(e) => e.preventDefault()} name="chorwacja" onClick={pushCountry}>Chorwacja</div>
                <div className='cursor-pointer hover:bg-red-500/[0.9] pl-3 font-normal hover:text-white' onMouseDown={(e) => e.preventDefault()} name="portugalia" onClick={pushCountry}>Portugalia</div>
            </div>
            <div className='mt-2 font-semibold'>Region</div>
          </div>
          {/* Regions */}
          <div className='relative'>
            <input autoComplete="off" placeholder="szukasz: wszystkie regiony" className='placeholder:pl-2 rounded-md border border-gray-800 h-8 w-full flex justify-center align-center outline-none' name="country" onFocus={handleRegionsListShow} onBlur={handleRegionsListHide}></input>
            {RegionsList}
          </div>
          <div className='absolute text-white w-full top-24 -mt-4 hidden h-auto border rounded-md border-gray-700 bg-white z-10' ref={regionslist}>
            {conditions}
            {/* {conditions.map((i => {
                if(router.query.country === i.country){
                  return (
                    i.regions.map(r=> (
                    <p key={i} onClick={pushRegions} onMouseDown={(e) => e.preventDefault()} className='hover:bg-red-600/[0.9] hover:text-white text-black cursor-pointer text-normal pl-3' query={{region:{r}}}>{r}</p>
                  ))
                  )
                }}))} */}
          </div>
        <div className='mt-4 font-semibold relative'>Rodzaj zabudowy</div>
            <div className="flex items-center w-11/12 lg:w-11/12 md:w-11/12">
                <div onClick={pushBungalow} name="bungalow" className={router.query.bungalow ? 'rounded-sm border-gray-700 my-2 mr-2 w-5 h-5 p-0 accent-red-600 cursor-pointer' :"rounded-sm border-gray-700 my-2 mr-2 w-5 h-5 p-0 accent-red-600 cursor-pointer border"}>
                    <div className={router.query.bungalow ? 'rounded-sm bg-red-600 text-white w-full h-full':'hidden'}><CheckIcon className='w-full h-full rounded-sm flex items-center justify-center'/></div>
                </div>
                <p className="font-bold block">Bungalow</p>
            </div>
            <div className="flex items-center w-11/12 lg:w-11/12 md:w-11/12">
                <div type="checkbox" onClick={pushApartament} name="apartament" className={router.query.apartament ? 'rounded-sm border-gray-700 my-2 mr-2 w-5 h-5 p-0 accent-red-600 cursor-pointer' :"rounded-sm border-gray-700 my-2 mr-2 w-5 h-5 p-0 accent-red-600 cursor-pointer border"}>
                    <div className={router.query.apartament ? 'rounded-sm bg-red-600 text-white w-full h-full':'hidden'}><CheckIcon className='w-full h-full rounded-sm flex items-center justify-center'/></div>
                </div>
                <p className="font-bold block">Apartament</p>
            </div>
            <div className="flex items-center w-11/12 lg:w-11/12 md:w-11/12">
                <div type="checkbox" onClick={pushHouse} name="dom" className={router.query.house ? 'rounded-sm border-gray-700 my-2 mr-2 w-5 h-5 p-0 accent-red-600 cursor-pointer' :"rounded-sm border-gray-700 my-2 mr-2 w-5 h-5 p-0 accent-red-600 cursor-pointer border"}>
                    <div className={router.query.house ? 'rounded-sm bg-red-600 text-white w-full h-full':'hidden'}><CheckIcon className='w-full h-full rounded-sm flex items-center justify-center'/></div>
                </div>
                <p className="font-bold block">Dom</p>
            </div>
            <div className='mt-4 font-semibold'>Rynek</div>
            <div className="flex items-center w-11/12 lg:w-11/12 md:w-11/12">
                <div type="checkbox" onClick={handleFirstMarket} name="pierwotny" className={router.query.firstmarket ? 'rounded-sm border-gray-700 my-2 mr-2 w-5 h-5 p-0 accent-red-600 cursor-pointer' :"rounded-sm border-gray-700 my-2 mr-2 w-5 h-5 p-0 accent-red-600 cursor-pointer border"}>
                    <div className={router.query.firstmarket ? 'rounded-sm bg-red-600 text-white w-full h-full':'hidden'}><CheckIcon className='w-full h-full rounded-sm flex items-center justify-center'/></div>
                    </div>
                <p className="font-bold block">Pierwotny</p>
                </div>
            <div className="flex items-center w-11/12 lg:w-11/12 md:w-11/12">
                <div type="checkbox"  onClick={handleSecondMarket} name="wtorny" className={router.query.scondmarket ? 'rounded-sm border-gray-700 my-2 mr-2 w-5 h-5 p-0 accent-red-600 cursor-pointer' :"rounded-sm border-gray-700 my-2 mr-2 w-5 h-5 p-0 accent-red-600 cursor-pointer border"}>
                    <div className={router.query.secondmarket ? 'rounded-sm bg-red-600 text-white w-full h-full':'hidden'}><CheckIcon className='w-full h-full rounded-sm flex items-center justify-center'/></div>
                </div>
                <p className="font-bold block">Wtórny</p>
            </div>
          <Link href='/'>reset</Link>
      </main>
    </>
  )
}
