import { useState,useEffect } from "react"

export default function ChangeSite({
  actualSite, 
  setActualSite,
  searchConditions,
  setSearchConditions,
  sitesArraycounter
}) {
    
  const handleClickOnSite = (e, key) => {

      setActualSite(key+1)
    
      setSearchConditions(searchConditions.map(page => {
      if(page.name === "page"){
      return{
          ...page,
          value: key+1
    }} else return {...page}
  
  }))
    }

  return (
    <div className="flex items-center justify-center w-12/12">
        {sitesArraycounter.map((index, key) =>
            <div key={key} className={key+1 === actualSite ? 'sitesArrow ActiveSite' : 'sitesArrow' } onClick={e => handleClickOnSite(e, key)}>{key+1}</div>
        )}
    </div>
  )
}
