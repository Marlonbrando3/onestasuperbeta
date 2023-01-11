
import { useState, useContext, useRef } from "react"
import CloseIcon from '@mui/icons-material/Close';
import { SearchEngineContext } from '../SearchEngine'
import { AppContext } from "../../../pages/_app"
import { SearchComponentsContext } from "../SearchComponentsList";

export default function Bathrooms({}
) {

  const {searchConditions, setSearchConditions} = useContext(AppContext)
  const {applyBath, setApplyBath} = useContext(SearchEngineContext)
  const {ShowChangedAreApply} = useContext(SearchComponentsContext)

  const BathFromRef = useRef();
  const BathToRef = useRef();

  let bathfrom;
  let bathfromString;
  let bathto;
  let bathtoString;
  let SummaryBaths = [];

  searchConditions.map(obj =>{
    if(obj.name ==='bathf'){
      bathfrom = obj.value
    }
    if(obj.name ==='batht'){
      bathto = obj.value
    }
  })

  if(bathfrom !== ''){
    bathfromString = "od "+bathfrom
  } else {
    bathfromString = '';
  }

  if(bathto !== ''){
    bathtoString = " do "+bathto
  }else {
    bathtoString = '';
  } 

  if(bathfrom === '' && bathto === '') {
    SummaryBaths = []
  } else {
    SummaryBaths = [bathfromString + bathtoString]
  }

  const handleChangeData = (e) =>{
    let bathfrom = [];
    let bathto = [];

      searchConditions.map(obj => {
        if(obj.name === "bathf"){
          bathfrom = obj.value
          }
        if(obj.name === "batht"){
          bathto = obj.value
          }})

      if((BathFromRef.current.value === bathfrom) && (BathToRef.current.value === bathto)){
        setApplyBath(false)
      } else {
        setApplyBath(true)
      }

  }

  const hideAppyButton = (e) => {
    setApplyBath(false)
    ShowChangedAreApply()

    setSearchConditions(searchConditions.map(param => {
      if(param.name === 'batht'){
        if((BathToRef.current.value === '')){
          return{
            ...param,
            isSearching: false,
            value: ''
          }
        } else return {
          ...param,
          isSearching: true,
          value: BathToRef.current.value
        }
      } if(param.name === 'bathf'){
        if((BathFromRef.current.value === '')){
          return{
            ...param,
            isSearching: false,
            value: ''
          }
        } else return {
          ...param,
          isSearching: true,
          value: BathFromRef.current.value
        }
      } else return {...param}
    })) 

    BathFromRef.current.value = ''
    BathToRef.current.value = ''
    
  }

  const resetFilters = () => {

    // setActualB(false)
    setSearchConditions(searchConditions.map(param => {
      if(param.name === 'batht'){
          return{
            ...param,
            isSearching: false,
            value: ''
          }
        } 
      if(param.name === 'bathf'){
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
        {applyBath && <div onClick={hideAppyButton} className="applyButton">Zatwierdź</div>}
        {SummaryBaths.map(obj => (
        <span key={obj} onClick={resetFilters} className="choosed-multiple-option-beds">Łazienek: {obj} <CloseIcon className="close-icon" />
        </span>))}
      <div className="InputsStyle">
        <input ref={BathFromRef} type="number" onChange={handleChangeData}  className="InputsProps  mr-2 " autoComplete="off" name="" placeholder="Od"></input>
        <input ref={BathToRef} type="number" onChange={handleChangeData} className="InputsProps ml-2 " autoComplete="off" name="" placeholder="Do"></input>
      </div>
    </>
  )
}
