
import { useState, useEffect } from "react"
import RegionChoosed from "./RegionChoosed"

export default function CountrySearch({
  newSearch,
  setNewSearch,
  apply,
  setApply,
  countryPlaceHolder,
  setCountryPlaceHolder,
  choosedCountry,
  setChoosedCountry,
  choosedRegion,
  setChoosedRegion,
  searchShow,
  setSearchsearchShow,
  countries,
  setCountries,
  countryInput,
  activeRegionList,
  setActiveRegionList,
  searchConditions,
  setSearchConditions
}) {

  const handleShowCountryList = () => {
    setActiveRegionList(activeRegionList => !activeRegionList)
    }

  const handleChooseThisRegion = (e) => {
    setApply(true)

    let Region = e.target.getAttribute ('name')
    setActiveRegionList(activeRegionList => !activeRegionList)

    if(choosedCountry.length >= 0){
      setCountryPlaceHolder("")

    }

    setChoosedRegion(current => [...current, Region])
    setChoosedCountry(region => {
      return{
        ...region,
        region: Region,
      }
    })

    setSearchConditions(current => [...current, {
          id:2,
          value: Region,
          name: 'region',
          isSearching: true
    }])
    
    setCountries(countries.map(country => {
      if(country.name === Region){
      return {
        ...country, 
        added: true,
        OnList: false,
        regionList: false
      }
    } else return {...country}
    }))
  }

  let ActualRegionList = countries.filter(country => country.regionList === true)
  

  return (
    <>
    <div className="InputsStyle w-full">
      <input onClick={handleShowCountryList} className="InputsProps w-full" autoComplete="off" name="country" placeholder="Wybierz region"></input>
    </div>
    {activeRegionList && <div className="ListWithChooseContainer w-full">{ActualRegionList.map(country => 
      <li key={country}
        className="listToChoose"
        name={country.name}
        onClick={handleChooseThisRegion}>{country.name}</li>)}</div>}
      </>
  )
}
