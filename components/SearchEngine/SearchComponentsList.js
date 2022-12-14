import { useState } from "react";
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

export default function SearchInput({
  ActualCountry,
  setActualCountry,
  TypeList,
  choosedTypes,
  setChoosedTypes,
  setTypeList,
  activeTypeList,
  setActiveTypeList,
  choosedRegion,
  setChoosedRegion,
  countryPlaceHolder,
  setCountryPlaceHolder,
  choosedCountry,
  setChoosedCountry,
  searchShow,
  setSearchShow,
  countries,
  setCountries,
  countryInput,
  actualSite,
  setActualSite,
  activeRegionList,
  setActiveRegionList,
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
  query,
  setQuery,
  searchConditions,
  setSearchConditions, 
  apply,
  setApply,
  newSearch,
  setNewSearch,
  showSearchComponentsOnMobile
}) {

  return (
    <>
    <div className={showSearchComponentsOnMobile ?
        "transition-all absolute duration-700 top-10 w-screen z-30 bg-white p-1":
        "transition-all duration-700 hidden -top-screen flex-col items-center justify-center md:w-3/12 md:flex md:static"}
    >
        <form className="flex sticky flex-col m-auto justify-start items-center bg-white rounded-md h-auto p-1 mb-60 lg:w-11/12 w-10/12">
        <div className="InputsStyleContainer w-11/12 lg:w-9/12 md:w-11/12">
        <p>Kraj</p>
          <div className="InputsStyle m-auto w-full">
            <CountrySearchInSearchEngine
              ActualCountry={ActualCountry}
              setActualCountry={setActualCountry}
              countries={countries}
              setCountries={setCountries}
              choosedCountry={choosedCountry}
              setChoosedCountry={setChoosedCountry}
              searchConditions={searchConditions}
              setSearchConditions={setSearchConditions}
              choosedTypes={choosedTypes}
              setChoosedTypes={setChoosedTypes}
              choosedRegion={choosedRegion}
              setChoosedRegion={setChoosedRegion}
              actualSite={actualSite}
              setActualSite={setActualSite}
            /> 
            </div>
          </div>
          <div className="InputsStyleContainer w-11/12 lg:w-9/12 md:w-11/12">
            <p className="font-semibold">Region</p>
            <RegionChoosed
              apply={apply}
              setApply={setApply}
              choosedRegion={choosedRegion}
              setChoosedRegion={setChoosedRegion}
              countryPlaceHolder={countryPlaceHolder}
              setCountryPlaceHolder={setCountryPlaceHolder}
              choosedCountry={choosedCountry}
              setChoosedCountry={setChoosedCountry}
              countries={countries}
              setCountries={setCountries}
              searchConditions={searchConditions}
              setSearchConditions={setSearchConditions}
            />
          <div className="InputsStyle m-auto w-full">
            <RegionSearch
              choosedRegion={choosedRegion}
              setChoosedRegion={setChoosedRegion}
              countryPlaceHolder={countryPlaceHolder}
              setCountryPlaceHolder={setCountryPlaceHolder}
              choosedCountry={choosedCountry}
              setChoosedCountry={setChoosedCountry}
              searchShow={searchShow}
              setSearchShow={setSearchShow}
              countries={countries}
              setCountries={setCountries}
              countryInput={countryInput}
              activeRegionList={activeRegionList}
              setActiveRegionList={setActiveRegionList}
              searchConditions={searchConditions}
              setSearchConditions={setSearchConditions}
              apply={apply}
              setApply={setApply}
              newSearch={newSearch}
              setNewSearch={setNewSearch}
            />
          </div></div>
          {/* <div className="InputsStyleContainer">
            <p>Wybierz miasto:</p>
            <div className="InputsStyle">
            <CitySearch
              countryPlaceHolder={countryPlaceHolder}
              setCountryPlaceHolder={setCountryPlaceHolder}
              choosedCountry={choosedCountry}
              setChoosedCountry={setChoosedCountry}
              searchShow={searchShow}
              setSearchShow={setSearchShow}
              countries={countries}
              setCountries={setCountries}
              countryInput={countryInput}
              activeCountryList={activeCountryList}
              setActiveCountryList={setActiveCountryList}
              choosedRegion={choosedRegion}
              setChoosedRegion={setChoosedRegion}
            />
            <ChoosedCity 
              countryPlaceHolder={countryPlaceHolder}
              setCountryPlaceHolder={setCountryPlaceHolder}
              choosedCountry={choosedCountry}
              setChoosedCountry={setChoosedCountry}
              countries={countries}
              setCountries={setCountries}
              choosedRegion={choosedRegion}
              setChoosedRegion={setChoosedRegion}
            />
          </div></div> */}
          <div className="InputsStyleContainer w-11/12 lg:w-9/12 md:w-11/12">
            <p>Typ nieruchomości</p>
            <TypeChoosed
                  apply={apply}
                  setApply={setApply}
                  TypeList={TypeList}
                  choosedTypes={choosedTypes}
                  setChoosedTypes={setChoosedTypes}
                  setTypeList={setTypeList}
                  activeTypeList={activeTypeList}
                  setActiveTypeList={setActiveTypeList}
                  query={query}
                  setQuery={setQuery} 
                  searchConditions={searchConditions}
                  setSearchConditions={setSearchConditions}
                  newSearch={newSearch}
                  setNewSearch={setNewSearch}
            />
          <div className="InputsStyle w-full m-auto md:w-full">
               <TypeSearch
                  apply={apply}
                  setApply={setApply}
                  TypeList={TypeList}
                  searchConditions={searchConditions}
                  setSearchConditions={setSearchConditions}
                  choosedTypes={choosedTypes}
                  setChoosedTypes={setChoosedTypes}
                  setTypeList={setTypeList}
                  activeTypeList={activeTypeList}
                  setActiveTypeList={setActiveTypeList}
                  query={query}
                  setQuery={setQuery} 
                />
          </div></div>
          <div className="InputsStyleContainer w-11/12 lg:w-9/12 md:w-11/12">
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
              <div className="InputsStyleContainer w-11/12 lg:w-9/12 md:w-11/12">
            <p>Liczba łazienek</p>
                <Baths
                  bathMin={bathMin}
                  bathMax={bathMax}
                  setBathMax={setBathMax}
                  setBathMin={setBathMin}
                  searchConditions={searchConditions}
                  setSearchConditions={setSearchConditions}
                  apply={apply}
                  setApply={setApply}
                />
              </div>
            <div className="InputsStyleContainer w-11/12 lg:w-9/12 md:w-11/12">
            <p>Liczba łóżek</p>
                <Beds
                  bedMin={bedMin}
                  bedMax={bedMax}
                  setBedMax={setBedMax}
                  setBedMin={setBedMin}
                  searchConditions={searchConditions}
                  setSearchConditions={setSearchConditions}
                  apply={apply}
                  setApply={setApply} />
              </div>
              <div className="InputsStyleContainer w-11/12 lg:w-9/12 md:w-11/12">
            <p>Dystans do morza</p>
                <Range
                  apply={apply}
                  setApply={setApply}
                  seaMax={seaMax}
                  setSeaMax={setSeaMax}
                  searchConditions={searchConditions}
                  setSearchConditions={setSearchConditions}/>
              </div>
          <div className="InputsStyleContainer w-11/12 lg:w-9/12 md:w-11/12">
          <h1 className="font-bold mt-7">Rynek</h1>
              <Offersparameters 
                name="firstmarket"
                choosedCountry={choosedCountry}
                setChoosedCountry={setChoosedCountry}
                query={query}
                setQuery={setQuery} 
                title={"Pierwotny"}
                searchConditions={searchConditions}
                setSearchConditions={setSearchConditions}
                apply={apply}
                setApply={setApply}
                newSearch={newSearch}
                setNewSearch={setNewSearch}/>
              <Offersparameters 
                name="secondarymarket"
                choosedCountry={choosedCountry}
                setChoosedCountry={setChoosedCountry}
                query={query}
                setQuery={setQuery} 
                title={"Wtórny"}
                searchConditions={searchConditions}
                setSearchConditions={setSearchConditions}
                apply={apply}
                setApply={setApply}
                newSearch={newSearch}
                setNewSearch={setNewSearch}/>
            <h1 className="font-bold mt-7">Parametry oferty</h1>
              <Offersparameters
                name="pool"
                IconName={<Pool className="IconsByChoosing"/>}
                choosedCountry={choosedCountry}
                setChoosedCountry={setChoosedCountry}
                query={query}
                setQuery={setQuery}  
                title={"Basen"}
                searchConditions={searchConditions}
                setSearchConditions={setSearchConditions}
                apply={apply}
                setApply={setApply}
                newSearch={newSearch}
                setNewSearch={setNewSearch} />
              <Offersparameters 
                name="seaview"
                IconName={<Seaview className="IconsByChoosing"/>}
                choosedCountry={choosedCountry}
                setChoosedCountry={setChoosedCountry}
                query={query}
                setQuery={setQuery} 
                title={"Widok na morze"}
                searchConditions={searchConditions}
                setSearchConditions={setSearchConditions}
                apply={apply}
                setApply={setApply}
                newSearch={newSearch}
                setNewSearch={setNewSearch}
                />
              <Offersparameters 
                name="parking"
                IconName={<Parking className="IconsByChoosing"/>}
                choosedCountry={choosedCountry}
                setChoosedCountry={setChoosedCountry}
                query={query}
                setQuery={setQuery} 
                title={"Parking"}
                searchConditions={searchConditions}
                setSearchConditions={setSearchConditions}
                apply={apply}
                setApply={setApply}
                newSearch={newSearch}
                setNewSearch={setNewSearch}/>
              <Offersparameters 
                name="garden"
                IconName={<Garden className="IconsByChoosing"/>}
                choosedCountry={choosedCountry}
                setChoosedCountry={setChoosedCountry}
                query={query}
                setQuery={setQuery} 
                title={"Ogródek"}
                searchConditions={searchConditions}
                setSearchConditions={setSearchConditions}
                apply={apply}
                setApply={setApply}
                newSearch={newSearch}
                setNewSearch={setNewSearch}/>
              <Offersparameters 
                name="solarium"
                IconName={<Solarium className="IconsByChoosing"/>}
                choosedCountry={choosedCountry}
                setChoosedCountry={setChoosedCountry}
                query={query}
                setQuery={setQuery} 
                title={"Solarium"}
                searchConditions={searchConditions}
                setSearchConditions={setSearchConditions}
                apply={apply}
                setApply={setApply}
                newSearch={newSearch}
                setNewSearch={setNewSearch}/>
              <Offersparameters 
                name="balcony"
                IconName={<Balcony className="IconsByChoosing"/>}
                choosedCountry={choosedCountry}
                setChoosedCountry={setChoosedCountry}
                query={query}
                setQuery={setQuery} 
                title={"Balkon"}
                searchConditions={searchConditions}
                setSearchConditions={setSearchConditions}apply={apply}
                setApply={setApply}
                newSearch={newSearch}
                setNewSearch={setNewSearch}
              />
            </div>
          </form>
    </div>
    </>
  )
}
