
import { useState, useEffect, useContext } from "react"
import { useRouter } from "next/router"
import { AppContext } from "../../../pages/_app";
import DataCountry from '../../../data/DataCountry.json'
import { NumbersOutlined, OneKPlusOutlined } from "@mui/icons-material";
import SolarPower from "@mui/icons-material/SolarPower";

export default function CountrySearch({
  activeRegionList,
  setActiveRegionList,
}) {

  const router = useRouter();
  const {searchConditions, setSearchConditions} = useContext(AppContext)

  let RegionsList = [];
  searchConditions.map(obj => {

    let regions = [];
    if(obj.name === 'region'){
      obj.value.map(v => {
          if(v.isSearching === false) {
            regions = [...regions, v.region]
            // console.log(regions)
          } RegionsList = regions; 
      }
      )
    } 
  }
  )

  // console.log(RegionsList)


  const handleShowCountryList = () => {

    setActiveRegionList(activeRegionList => !activeRegionList)
    }
    // DataCountry.map (obj =>{
    //   if(obj.country === router.query.country){
    //     ActualRegionList = ActualRegionList.filter(obj => (obj !== Region))
    //   }
    // })

  const handleChooseThisRegion = (e) => {

    let Region = e.target.getAttribute ('name')
    setActiveRegionList(activeRegionList => !activeRegionList)

    // if(choosedCountry.length >= 0){
    //   setCountryPlaceHolder("")
    // }

    // setChoosedRegion(current => [...current, Region])
    // setChoosedCountry(region => {
    //   return{
    //     ...region,
    //     region: Region,
    //   }
    // })

    setSearchConditions(searchConditions.map(obj => {
      if(obj.name === 'region') { 
            return {
              id:1,
              name: obj.name,
              value: obj.value.map(v => {
                if(v.region === Region) {
                    return {
                      ...v,
                      isSearching: true
                    }
              } else return {...v}
            })
            }
      } else return {...obj}
      }
      ))
    
    // setCountries(countries.map(country => {
    //   if(country.name === Region){
    //   return {
    //     ...country, 
    //     added: true,
    //     OnList: false,
    //     regionList: false
    //   }
    // } else return {...country}
    // }))
  }


  return (
    <>
    <div className="InputsStyle w-full">
      <input readonly="readonly" onClick={handleShowCountryList} className="InputsProps w-full" autoComplete="off" name="country" placeholder="Wybierz region"></input>
    </div>
    {activeRegionList && <div className="ListWithChooseContainer w-full">{RegionsList.map(region => 
      <li key={region}
        className="listToChoose"
        name={region}
        onClick={handleChooseThisRegion}>{region}</li>)}</div>}
      </>
  )
}
