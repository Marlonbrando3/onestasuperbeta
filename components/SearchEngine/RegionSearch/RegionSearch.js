
import { useState, useEffect, useContext } from "react"
import { useRouter } from "next/router"
import { AppContext } from "../../../pages/_app";
import { SearchComponentsContext } from "../SearchComponentsList";
import DataCountry from '../../../data/DataCountry.json'
import { NumbersOutlined, OneKPlusOutlined } from "@mui/icons-material";
import SolarPower from "@mui/icons-material/SolarPower";

export default function CountrySearch({
  activeRegionList,
  setActiveRegionList,
}) {

  const router = useRouter();
  const {aprove, setAprove, searchConditions, setSearchConditions} = useContext(AppContext)
  const {ShowChangedAreApply} = useContext(SearchComponentsContext)

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


  const handleShowCountryList = () => {

    setActiveRegionList(activeRegionList => !activeRegionList)
    }

  const handleChooseThisRegion = (e) => {

    let Region = e.target.getAttribute ('name')
    ShowChangedAreApply()
    setActiveRegionList(activeRegionList => !activeRegionList)

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
    
  }


  return (
    <>
    <div className="InputsStyle w-full">
      <input readOnly onClick={handleShowCountryList} className="InputsProps w-full" autoComplete="off" name="country" placeholder="Wybierz region"></input>
    </div>
    {activeRegionList && <div className="ListWithChooseContainer w-full">{RegionsList.map(region => 
      <li key={region}
        className="listToChoose"
        name={region}
        onClick={handleChooseThisRegion}>{region}</li>)}</div>}
      </>
  )
}
