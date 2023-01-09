
import { useState, useContext, useRef } from "react"
import CloseIcon from '@mui/icons-material/Close';
import { SearchEngineContext } from '../SearchEngine'
import { AppContext } from "../../../pages/_app"

export default function Bedrooms({
}) {
  const {searchConditions, setSearchConditions} = useContext(AppContext)
  const {applyBed, setApplyBed} = useContext(SearchEngineContext)

  const BedFromRef = useRef();
  const BedToRef = useRef();

  let bedfrom;
  let bedfromString;
  let bedto;
  let bedtoString;
  let SummaryBeds = [];

  searchConditions.map(obj =>{
    if(obj.name ==='bedf'){
      bedfrom = obj.value
    }
    if(obj.name ==='bedt'){
      bedto = obj.value
    }
  })

  if(bedfrom !== ''){
    bedfromString = "od "+bedfrom
  } else {
    bedfromString = '';
  }

  if(bedto !== ''){
    bedtoString = " do "+bedto
  }else {
    bedtoString = '';
  } 

  if(bedto === '' && bedfrom === '') {
    SummaryBeds = []
  } else {
    SummaryBeds = [bedfromString + bedtoString]
  }


  //handle by useRef data 'from'
  const handleChangeData = (e) => {
    let bedfrom = [];
    let bedto = [];

      searchConditions.map(obj => {
        if(obj.name === "bedf"){
          bedfrom = obj.value
          }
        if(obj.name === "bedt"){
          bedto = obj.value
          }})

      if((BedFromRef.current.value === bedfrom) && (BedToRef.current.value === bedto)){
        setApplyBed(false)
      } else {
        setApplyBed(true)
      }
  }

  //hide apply button after click and change value 'from' and 'to' in searchConditions
  const hideAppyButton = (e) => {
    setApplyBed(false)

    setSearchConditions(searchConditions.map(param => {
      if(param.name === 'bedt'){
        if((BedToRef.current.value === '')){
          return{
            ...param,
            isSearching: false,
            value: ''
          }
        } else return {
          ...param,
          isSearching: true,
          value: BedToRef.current.value
        }
      } if(param.name === 'bedf'){
        if((BedFromRef.current.value === '')){
          return{
            ...param,
            isSearching: false,
            value: ''
          }
        } else return {
          ...param,
          isSearching: true,
          value: BedFromRef.current.value
        }
      } else return {...param}
    })) 

    BedFromRef.current.value = ''
    BedToRef.current.value = ''
  }

  const resetFilters = () => {

    // setActualBeds(false)
    setSearchConditions(searchConditions.map(param => {
      if(param.name === 'bedt'){
          return{
            ...param,
            isSearching: false,
            value: ''
          }
        } 
      if(param.name === 'bedf'){
          return{
            ...param,
            isSearching: false,
            value: ''
          }
        } else return {...param}
    })) 
  }

  return (
    <>
    {applyBed && <div onClick={hideAppyButton} className="applyButton">Zatwierdź</div>}
    {SummaryBeds.map(obj => (
        <span ket={obj} onClick={resetFilters} className="choosed-multiple-option-beds">Sypilani: {obj} <CloseIcon className="close-icon" /></span>
      ))}
      <div className="InputsStyle">
        <input ref={BedFromRef} onChange={handleChangeData} className="InputsProps  mr-2 " autoComplete="off" name="bedsfrom" placeholder="Od"></input>
        <input ref={BedToRef} onChange={handleChangeData} className="InputsProps ml-2 " autoComplete="off" name="bedsto" placeholder="Do"></input>
      </div>
    </>
  )
}
