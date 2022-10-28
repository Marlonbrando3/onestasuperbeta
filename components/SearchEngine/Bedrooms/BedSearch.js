
import { useState } from "react"

export default function Bedrooms({
  apply,
  setApply,
  setBedMin, 
  setBedMax,
  searchConditions,
  setSearchConditions
}) {

  const handleChangeFrom = (e) =>{
    setBedMin(e.target.value)
    setApply(true)

    let targetvalue = e.target.value
    setSearchConditions(searchConditions.map(param => {
      // console.log(param)
      // console.log(param.isSearching)
      if(param.name === 'bedf'){
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
    setBedMax(e.target.value)
    setApply(true)
    
    let targetvalue = e.target.value
    setSearchConditions(searchConditions.map(param => {
      // console.log(param)
      // console.log(param.isSearching)
      if(param.name === 'bedt'){
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
        <input onChange={handleChangeFrom} className="InputsProps  mr-2 " autoComplete="off" name="" placeholder="Od"></input>
        <input onChange={handleChangeTo} className="InputsProps ml-2 " autoComplete="off" name="" placeholder="Do"></input>
      </div>
    </>
  )
}
