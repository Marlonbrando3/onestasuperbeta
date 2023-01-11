
import { useState, useContext, useRef } from "react"
import CloseIcon from '@mui/icons-material/Close';
import { SearchEngineContext } from '../SearchEngine'
import { AppContext } from "../../../pages/_app"
import { SearchComponentsContext } from "../SearchComponentsList";

export default function PriceSearch({}) {

  const {searchConditions, setSearchConditions} = useContext(AppContext)
  const {applyPrice, setApplyPrice} = useContext(SearchEngineContext)
  const {ShowChangedAreApply} = useContext(SearchComponentsContext)

  const PriceFromRef = useRef();
  const PriceToRef = useRef();

  let pricefrom;
  let pricefromString;
  let priceto;
  let pricetoString;
  let SummaryPrice = [];

  searchConditions.map(obj =>{
    if(obj.name ==='pf'){
      pricefrom = obj.value
    }
    if(obj.name ==='pt'){
      priceto = obj.value
    }
  })

  if(pricefrom !== ''){
    pricefromString = "od "+pricefrom
  } else {
    pricefromString = '';
  }

  if(priceto !== ''){
    pricetoString = " do "+priceto
  }else {
    pricetoString = '';
  } 

  if(priceto === '' && pricefrom === '') {
    SummaryPrice = []
  } else {
    SummaryPrice = [pricefromString + pricetoString]
  }


  //handle by useRef data 'from'
  const handleChangeData = (e) => {
    let pricerom = [];
    let priceto = [];

      searchConditions.map(obj => {
        if(obj.name === "pf"){
          pricefrom = obj.value
          }
        if(obj.name === "pt"){
          priceto = obj.value
          }})

      if((PriceFromRef.current.value === pricefrom) && (PriceToRef.current.value === priceto)){
        setApplyPrice(false)
      } else {
        setApplyPrice(true)
      }
  }

  //hide apply button after click and change value 'from' and 'to' in searchConditions
  const hideAppyButton = (e) => {
    setApplyPrice(false)
    ShowChangedAreApply()

    setSearchConditions(searchConditions.map(param => {
      if(param.name === 'pt'){
        if((PriceToRef.current.value === '')){
          return{
            ...param,
            isSearching: false,
            value: ''
          }
        } else return {
          ...param,
          isSearching: true,
          value: PriceToRef.current.value
        }
      } if(param.name === 'pf'){
        if((PriceFromRef.current.value === '')){
          return{
            ...param,
            isSearching: false,
            value: ''
          }
        } else return {
          ...param,
          isSearching: true,
          value: PriceFromRef.current.value
        }
      } else return {...param}
    })) 

    PriceFromRef.current.value = ''
    PriceToRef.current.value = ''
  }

  const resetFilters = () => {

    // setActualBeds(false)
    setSearchConditions(searchConditions.map(param => {
      if(param.name === 'pt'){
          return{
            ...param,
            isSearching: false,
            value: ''
          }
        } 
      if(param.name === 'pf'){
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
    {applyPrice && <div onClick={hideAppyButton} className="applyButton top-0">Zatwierdź</div>}
    {SummaryPrice.map(obj => (
        <div key={obj} onClick={resetFilters} className="choosed-multiple-option-price">Cena {obj} € <CloseIcon className="close-icon" /></div>
      ))}
      <div className="InputsStyle">
        <input ref={PriceFromRef} type="number" onChange={handleChangeData} className="InputsProps  mr-2" autoComplete="off" name="" placeholder="Od"></input>
        <input ref={PriceToRef} type="number" onChange={handleChangeData} className="InputsProps ml-2" autoComplete="off" name="" placeholder="Do"></input>
      </div>
    </>
  )
}
