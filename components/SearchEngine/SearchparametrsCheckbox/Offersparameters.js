import { CommentsDisabledOutlined } from '@mui/icons-material'
import CancelIcon from '@mui/icons-material/Cancel';
import CheckIcon from '@mui/icons-material/Check';
import { AppContext } from '../../../pages/_app';
import { SearchEngineContext } from '../SearchEngine'
import Pool from '@mui/icons-material/Pool';
import Seaview from '@mui/icons-material/Houseboat';
import { useRouter } from 'next/router';
import React, { useContext } from 'react'
import { SearchComponentsContext } from "../SearchComponentsList";

export default function Offersparameters({name, title}) {

    const router = useRouter();

    const {searchConditions, setSearchConditions} = useContext(AppContext)
    const {ShowChangedAreApply} = useContext(SearchComponentsContext)
    
  let ActualValue; 

  searchConditions.map(param => {
  if(param.name === name) ActualValue = param.value})

  const handleFunction = (e) => {

    let name = e.target.getAttribute('name')
    console.log(router.asPath.toString())
    console.log(name)

    if(router.asPath.toString().includes(name)) {
      const params = new URLSearchParams(router.query);
      params.delete(name);
      const queryString = params.toString();
      console.log(queryString)
      const path = `/[country]${queryString ? `?${queryString}` : ''}`;
      router.push(path, '', { scroll: false });
    }
    else {
      const params = new URLSearchParams(router.query);
      params.append(name, true)
      const queryString = params.toString();
      console.log(queryString)
      const path = `/[country]${queryString ? `?${queryString}` : ''}`;
      router.push(path, '', { scroll: false });
  }
}

  return (
  <>
      <div className="flex items-center w-11/12 lg:w-11/12 md:w-11/12">
          <div onClick={handleFunction} name={name} className={router.asPath.includes(name) ? 'rounded-sm border-gray-700 my-2 mr-2 w-5 h-5 p-0 accent-red-600 cursor-pointer' :"rounded-sm border-gray-700 my-2 mr-2 w-5 h-5 p-0 accent-red-600 cursor-pointer border"}>
              <div name={name} className={router.asPath.includes(name) ? 'rounded-sm bg-red-600 text-white w-full h-full':'hidden'}>
                <CheckIcon name={name} className='w-full h-full rounded-sm flex items-center justify-center'/>
              </div>
          </div>
        <p className="font-bold block">{title}</p>
      </div>
    </>
  )
}
