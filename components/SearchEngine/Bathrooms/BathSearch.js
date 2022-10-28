
import { useState } from "react"

export default function Bathrooms({ 
  apply,
  setApply,
  setBathMin, 
  setBathMax,
  searchConditions,
  setSearchConditions
}
) {

  const handleChangeFrom = (e) =>{
    setBathMin(e.target.value)
    setApply(true)

    let targetvalue = e.target.value
    console.log(e.target.value)
    setSearchConditions(searchConditions.map(param => {
      // console.log(param)
      // console.log(param.isSearching)
      if(param.name === 'bathf'){
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
    setBathMax(e.target.value)
    setApply(true)
    
    let targetvalue = e.target.value
    setSearchConditions(searchConditions.map(param => {
      // console.log(param)
      // console.log(param.isSearching)
      if(param.name === 'batht'){
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
        <input type="number" onChange={handleChangeFrom}  className="InputsProps  mr-2 " autoComplete="off" name="" placeholder="Od"></input>
        <input type="number" onChange={handleChangeTo} className="InputsProps ml-2 " autoComplete="off" name="" placeholder="Do"></input>
      </div>
    </>
  )
}
