import { useContext } from "react";
import { AppContext } from "../../../pages/_app";
import { SearchEngineContext } from '../SearchEngine'

export default function TypeSearch({}) {

  const {searchConditions, setSearchConditions} = useContext(AppContext)
  const {activeTypeList, setActiveTypeList} = useContext(SearchEngineContext)

  let TypeList = [];
  searchConditions.map(obj => {

    let types = [];
    if(obj.name === 'type'){
      obj.value.map(v => {
          if(v.isSearching === false) {
            types = [...types, v.type]
            // console.log(regions)
          } TypeList = types; 
      }
      )
    } 
  })
  
  const handleShowTypeList = (e) => {

    //show list of types
    setActiveTypeList(activeTypeList => !activeTypeList)

  }

  const handleAddTypeToTheList = (e) => {

    //hide list of types
    setActiveTypeList(activeTypeList => !activeTypeList)

    //get value of cliked option
    const Type = e.target.getAttribute ('name')

    //add choosed option(s) to list
    // setSearchConditions(current => [...current, {
    //   id:3,
    //   value: Type, 
    //   name: 'type',
    //   isSearching: true
    // }])

    setSearchConditions(searchConditions.map(obj => {
      if(obj.name === 'type') { 
            return {
              id:3,
              name: obj.name,
              value: obj.value.map(v => {
                if(v.type === Type) {
                  console.log(v)
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

  // let ActualTypeList = TypeList.filter(type => type.onList === true)

  return (
    <>
      <div className="InputsStyle w-full">
        <input onClick={handleShowTypeList} className="InputsProps w-full" autoComplete="off" name="type" placeholder="Typ nieruchomości"></input>
      </div>
        {activeTypeList && <div className="ListWithChooseContainer">{TypeList.map(type => 
        <li key={type}
          className="listToChoose"
          name={type}
          onClick={handleAddTypeToTheList}
          >{type}</li>)}</div>}
      </>
  )
}
