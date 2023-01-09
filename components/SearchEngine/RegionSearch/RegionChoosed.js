import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { useContext } from 'react';
import { AppContext } from '../../../pages/_app';
import { CountryIndexContext } from '../../../pages/[country]/index'
import { useRouter } from 'next/router';

export default function RegionChoosed({}) {

  const router = useRouter();

  // const {choosedRegion, setChoosedRegion} = useContext(CountryIndexContext)
  const {searchConditions, setSearchConditions} = useContext(AppContext)

  let RegionsList = [];
  searchConditions.map(obj => {

    let regions = [];
    if(obj.name === 'region'){
      obj.value.map(v => {
          if(v.isSearching === true) {
            regions = [...regions, v.region]
            // console.log(regions)
          } RegionsList = regions; 
      }
      )
    } 
  }
  )
  
  const handleDeleteRegionFromList = (e) => {
    
    let Region = e.target.getAttribute('name')

    // setCountries(countries.map(region => {
    //   if((region.name === Region) && (region.OnList !== "deactive")){
    //   return {
    //     ...region, 
    //     added: false,
    //     OnList: true,
    //     regionList:true
    //   }
    // } else return {...region}
    // }))

    setSearchConditions(searchConditions.map(obj => {
      if(obj.name === 'region') { 
            return {
              id:1,
              name: obj.name,
              value: obj.value.map(v => {
                if(v.region === Region) {
                  console.log(v)
                    return {
                      ...v,
                      isSearching: false
                    }
              } else return {...v}
            })
            }
      } else return {...obj}
      }
      ))

    // if(choosedCountry.length >= 0 && choosedCountry.length < 2){
    //   setCountryPlaceHolder("Wybierz Kraj (mozesz kilka)")
    // }
    }

  return (
    <div className="">
      <div className='flex items-start flex-wrap-reverse justify-start'>
        {RegionsList.map(region => (
          <>
            <div onClick={handleDeleteRegionFromList} name={region} className='choosed-multiple-option-region'>
              <span onClick={handleDeleteRegionFromList} name={region} className='flex justify-center items-center'>{region}</span>
            <CloseIcon
                  className="close-icon"
                  onClick={handleDeleteRegionFromList}
                  name={region}
              />
            </div>
          </>
        ))}
    </div>
    </div>
  )
}