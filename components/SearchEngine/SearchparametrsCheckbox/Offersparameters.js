import { CommentsDisabledOutlined } from '@mui/icons-material'
import { AppContext } from '../../../pages/_app';
import { SearchEngineContext } from '../SearchEngine'
import Pool from '@mui/icons-material/Pool';
import Seaview from '@mui/icons-material/Houseboat';
import { useRouter } from 'next/router';
import React, { useContext } from 'react'

export default function Offersparameters({
  title, 
  name, 
  IconName}) {

    const {searchConditions, setSearchConditions} = useContext(AppContext)
    
  let ActualValue; 

  searchConditions.map(param => {
  if(param.name === name) ActualValue = param.value})

  const handleSelectParameter = (e) => {

    let targetname = e.target.name

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

    })
    )

  console.log(targetname)
}
  return (
  <>
      <div className='flex items-center justify-start w-full'>
        <input 
          name={name}
          onChange={handleSelectParameter}
          className="w-5 h-5 cursor-pointer"
          type="checkbox"
          checked={ActualValue}
          >
        </input>
          {IconName}
        <label id={name} className="p-2 font-normal cursor-pointer">{title}</label>
      </div>
    </>
  )
}
