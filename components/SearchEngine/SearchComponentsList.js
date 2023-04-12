import { useState, useRef, createContext } from "react";
// import CitySearch from "./CitySearch/CitySearch";
import RegionSearch from "./RegionSearch/RegionSearch";
import RegionChoosed from "./RegionSearch/RegionChoosed";
import TypeSearch from "./TypeSearch/TypeSearch";
import TypeChoosed from "./TypeSearch/TypeChoosed";
import CountrySearchInSearchEngine  from "../CountrySearchInSearchEngine";
import Offersparameters from "./SearchparametrsCheckbox/Offersparameters";
import Pool from '@mui/icons-material/Pool';
import Parking from '@mui/icons-material/DirectionsCar';
import Garden from '@mui/icons-material/LocalFlorist';
import PriceSearch from './PriceSearch/PriceSearch';
import Solarium from '@mui/icons-material/SolarPower';
import Balcony from '@mui/icons-material/Balcony';
import Range from './Searange/Searange'
import Beds from './Bedrooms/BedSearch'
import Baths from './Bathrooms/BathSearch';
import Applychanges from "./Applychanges";
import Seaview from '@mui/icons-material/Houseboat';
import { AppContext } from "../../pages/_app";
import { useContext } from "react";
import { useEffect } from "react";

export const SearchComponentsContext = createContext();

export default function SearchInput({
  ActualCountry,
  setActualCountry,
  choosedTypes,
  setChoosedTypes,
  choosedRegion,
  setChoosedRegion,
  choosedCountry,
  setChoosedCountry,
  countries,
  setCountries,
  actualSite,
  setActualSite,
  priceMin,
  setPriceMin,
  priceMax,
  setPriceMax,
  bathMin,
  bathMax,
  setBathMin,
  setBathMax,
  bedMin,
  bedMax,
  setBedMin,
  setBedMax,
  seaMax,
  setSeaMax,
  searchConditions,
  setSearchConditions, 
  apply,
  setApply,
}) {

  const {aprove, setAprove, showSearchComponentsOnMobile, setShowSearchComponentsOnMobile, searchShow, setSearchShow} = useContext(AppContext)

  const handleShowMobileFilters = () => {
    setShowSearchComponentsOnMobile(showSearchComponentsOnMobile => !showSearchComponentsOnMobile)
  }

  const ShowPopUpChangedApply = useRef();

  const ShowChangedAreApply = () => {
    console.log("działa")
    ShowPopUpChangedApply.current.style.display = "block"
    setTimeout(() => {

    ShowPopUpChangedApply.current.style.display = "none"
    },1000)
  };

  return (
    <>
    <div ref={ShowPopUpChangedApply} className="bg-green-700 transition fixed z-40 bottom-2 right-2 text-white px-3 rounded-md hidden ">Zmiany wprowdzone!</div>
    <div className={showSearchComponentsOnMobile ?
        "transition-all absolute duration-700 top-0 w-screen pt-8 z-30 bg-white p-1 md:h-auto h-[1050px] ":
        "transition-all duration-700 absolute disable hidden -top-screen flex-col items-center justify-center lg:w-[280px] lg:flex lg:static"}>
      <div className="border-2 border-red-600 bg-white  px-2 pt-1 m-4 w-26 z-40 block md:hidden fixed top-0 right-0" onClick={handleShowMobileFilters}>
          <p className="visible cursor-pointer">X</p>
    </div>
        <form className="flex flex-col m-auto justify-start items-center bg-white rounded-md h-auto p-1 mb-60 lg:w-11/12 w-10/12 shadow-md">
        <SearchComponentsContext.Provider value={{ShowChangedAreApply}}>
          <div className="InputsStyleContainer w-11/12 lg:w-11/12 md:w-11/12 ">
            <div className="m-auto w-full h-auto">
            <CountrySearchInSearchEngine
              ActualCountry={ActualCountry}
              setActualCountry={setActualCountry}
              countries={countries}
              setCountries={setCountries}
              choosedCountry={choosedCountry}
              setChoosedCountry={setChoosedCountry}
              choosedTypes={choosedTypes}
              setChoosedTypes={setChoosedTypes}
              choosedRegion={choosedRegion}
              setChoosedRegion={setChoosedRegion}
              actualSite={actualSite}
              setActualSite={setActualSite}
            /> 
            </div>
          </div>
          <div className="InputsStyleContainer w-11/12 lg:w-11/12 md:w-11/12">
            <p>Cena (€)</p>
              {/* <div className="InputsStyle w-12 m-auto md:w-full"> */}
                <PriceSearch 
                 priceMin={priceMin}
                 setPriceMin={setPriceMin}
                 priceMax={priceMax}
                 setPriceMax={setPriceMax}
                 searchConditions={searchConditions}
                 setSearchConditions={setSearchConditions}
                 apply={apply}
                 setApply={setApply}
                />
              {/* </div> */}
            </div>
              <div className="InputsStyleContainer w-11/12 lg:w-11/12 md:w-11/12">
            <p>Liczba łazienek</p>
                <Baths
                  bathMin={bathMin}
                  bathMax={bathMax}
                  setBathMax={setBathMax}
                  setBathMin={setBathMin}
                  apply={apply}
                  setApply={setApply}
                />
              </div>
            <div className="InputsStyleContainer w-11/12 lg:w-11/12 md:w-11/12">
            <p>Liczba łóżek</p>
                <Beds
                  bedMin={bedMin}
                  bedMax={bedMax}
                  setBedMax={setBedMax}
                  setBedMin={setBedMin}
                  apply={apply}
                  setApply={setApply} />
              </div>
              <div className="InputsStyleContainer w-11/12 lg:w-11/12 md:w-11/12">
            <p>Dystans do morza</p>
                <Range
                  apply={apply}
                  setApply={setApply}
                  seaMax={seaMax}
                  setSeaMax={setSeaMax}
              />
              </div>
          <div className="InputsStyleContainer w-11/12 lg:w-11/12 md:w-11/12">
            <h1 className="font-bold mt-7">Parametry oferty</h1>
              <Offersparameters
                name="pool"
                IconName={<Pool className="IconsByChoosing"/>}
                title={"Basen"}
                 />
              <Offersparameters 
                name="seaview"
                IconName={<Seaview className="IconsByChoosing"/>}
                title={"Widok na morze"}
                />
              <Offersparameters 
                name="parking"
                IconName={<Parking className="IconsByChoosing"/>} 
                title={"Parking"}
                />
              <Offersparameters 
                name="garden"
                IconName={<Garden className="IconsByChoosing"/>}
                title={"Ogródek"}
                />
              <Offersparameters 
                name="solarium"
                IconName={<Solarium className="IconsByChoosing"/>}
                title={"Solarium"}
                />
              <Offersparameters 
                name="balcony"
                IconName={<Balcony className="IconsByChoosing"/>}
                title={"Balkon"}
              />
            </div>
            </SearchComponentsContext.Provider>
          </form>
    </div>
    </>
  )
}
