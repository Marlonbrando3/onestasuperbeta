import { useRouter } from 'next/router'
import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../pages/_app'


export default function MobileFilters() {

  const router = useRouter();

    const {searchShow,setSearchShow,showSearchComponentsOnMobile,setShowSearchComponentsOnMobile} = useContext(AppContext)

    const handleShowMobileFilters = () => {
        setShowSearchComponentsOnMobile(showSearchComponentsOnMobile => !showSearchComponentsOnMobile)
      }
      let filters;
      if(router.asPath.includes("page")){
        filters = 1
      } else {
          filters = 0;
      }

  return (
        <div className={filters===1 ? "bg-red-600 rounded-b-xl border-blue-900 border-b-2 px-2 py-1 ml-4 w-28 mr-4 z-0 md:hidden fixed top-16 right-0 visible": "hidden"} onClick={handleShowMobileFilters}>
              <p className="visible cursor-pointer text-white text-base flex justify-center font-bold">Filtry</p>
        </div>
  )
}
