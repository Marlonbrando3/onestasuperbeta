import { useEffect,useState } from "react"

export default function Searange({ 
  apply,
  setApply,
  seaMax, 
  setSeaMax,
  searchConditions,
  setSearchConditions
}
) {
  
  const handleChangeMax = (e) =>{
      setApply(true)

      let Evalue = parseInt(e.target.value)
      setSeaMax(Evalue)
      setSearchConditions(searchConditions.map(range=> {
        if(range.name === 'distance'){
        return{
          ...range,
          value: Evalue,
          isSearching:true
        }}
      else return {...range}}))
  }

  return (
    <>
      <div className="InputsStyle flex-col items-end">
        <input type="range" onChange={handleChangeMax} start="6000" step="100" max="10000" value={seaMax} className="InputsProp appearance-none outline-none rounded-md bg-red-500 h-1 w-full my-2 " autoComplete="off" name="" placeholder="Do"></input>
        <div className=" w-full h-10 border rounded-md border-gray-900/[0.5] p-1 mt-1">{seaMax} m / {seaMax/1000} km</div>
      </div> 
    </>
  )
}
