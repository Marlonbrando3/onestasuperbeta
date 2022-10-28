
import { useState } from "react"
import Applychanges from "../Applychanges"

export default function PriceSearch({
  priceMin,
  setPriceMin,
  priceMax,
  setPriceMax,
  searchConditions,
  setSearchConditions,
  apply,
  setApply
}) {

    const handleChangeFrom = (e) =>{
    setPriceMin(e.target.value)
    setApply(true)

    let targetvalue = e.target.value

    setSearchConditions(searchConditions.map(param => {
      // console.log(param)
      // console.log(param.isSearching)
      if(param.name === 'pf'){
        if((targetvalue === '') && (param.isSearching === true)){
          return{
            ...param,
            isSearching: false,
            value: targetvalue
          }
        } else return {
          ...param,
          isSearching: true,
          value: targetvalue
        }
      } else return {...param}
    }))

  }

  const handleChangeTo = (e) =>{
    setPriceMax(e.target.value)

    setApply(true)

    let targetvalue = e.target.value

    setSearchConditions(searchConditions.map(param => {
      // console.log(param)
      // console.log(param.isSearching)
      if(param.name === 'pt'){
        if((targetvalue === '') && (param.isSearching === true)){
          return{
            ...param,
            isSearching: false,
            value: targetvalue
          }
        } else return {
          ...param,
          isSearching: true,
          value: targetvalue
        }
      } else return {...param}
    }))

  }


  return (
    <>
      <div className="InputsStyle">
        <input type="number" onChange={handleChangeFrom} value={priceMin} className="InputsProps  mr-2 " autoComplete="off" name="" placeholder="Od"></input>
        <input type="number" onChange={handleChangeTo} value={priceMax} className="InputsProps ml-2 " autoComplete="off" name="" placeholder="Do"></input>
      </div>
    </>
  )
}
