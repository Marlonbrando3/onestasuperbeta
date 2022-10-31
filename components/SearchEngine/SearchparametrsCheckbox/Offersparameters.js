import { CommentsDisabledOutlined } from '@mui/icons-material'
import Pool from '@mui/icons-material/Pool';
import Seaview from '@mui/icons-material/Houseboat';

import React from 'react'

export default function Offersparameters({
  apply,
  setApply,
  title, 
  name, 
  choosedCountry, 
  setChoosedCountry, 
  query,
  setQuery,
  searchConditions,
  setSearchConditions,
  newSearch,
  setNewSearch,
  IconName}) {

  const handleSelectParameter = (e) => {

    let targetname = e.target.name
    setApply(true)
    // setNewSearch(false)

    setSearchConditions(searchConditions.map(param => {
      if(param.name === targetname && param.isSearching === false){
        return{
          ...param,
          isSearching: true,
          value: true
        }
      }

      if(param.name === targetname && param.isSearching === true){
        return{
          ...param,
          isSearching: false,
          value: false
      }} else return {...param,}
    }))


      setChoosedCountry(() => {
        if(choosedCountry[e.target.name] === false){
          return{
            ...choosedCountry,[e.target.name]: true
        }
    } else return {...choosedCountry,[e.target.name]: false}
  })
}

  return (
  <>
      <div className='flex items-center justify-start w-full'>
        <input 
          name={name} 
          onChange={handleSelectParameter} 
          className="w-5 h-5" 
          type="checkbox"
          checked={choosedCountry.name}></input>
          {IconName}
        <label id="pool" className="p-2">{title}</label>
      </div>
    </>
  )
}
