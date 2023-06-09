import { useState, useEffect, useContext } from "react"
import { useRouter } from "next/router"
import { AppContext } from "../../pages/_app"

export default function ChangeSite({
  actualSite, 
  setActualSite,
  sitesArraycounter
}) {
  const router = useRouter();
  // const {searchConditions, setSearchConditions} = useContext(AppContext)
    
  const handleClickOnSite = (e, key) => {

      setActualSite(key+1)
      
      router.replace({
        pathname: "/[country]",
        query:{...router.query, page:key+1}
      })
    }

  return (
    <div className="flex items-center justify-center w-12/12">
        {sitesArraycounter.map((index, key) =>
            <div key={key} className={key+1 === actualSite ? 'sitesArrow ActiveSite' : 'sitesArrow' } onClick={e => handleClickOnSite(e, key)}>{key+1}</div>
        )}
    </div>
  )
}
