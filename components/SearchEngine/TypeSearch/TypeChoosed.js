import CloseIcon from '@mui/icons-material/Close';
import { useContext } from 'react';
import { AppContext } from '../../../pages/_app';
import { useState } from 'react';
import { SearchComponentsContext } from "../SearchComponentsList";

export default function TypeChoosed({}) {

  const {searchConditions, setSearchConditions} = useContext(AppContext)
  const {ShowChangedAreApply} = useContext(SearchComponentsContext)

  let TypeList = [];
  searchConditions.map(obj => {

    let types = [];
    if(obj.name === 'type'){
      obj.value.map(v => {
          if(v.isSearching === true) {
            types = [...types, v.type]
            // console.log(regions)
          } TypeList = types; 
      }
      )
    } 
  }
  )

  const handleDeleteTypeFromList = (e) => {

    let Type = e.target.getAttribute('name')
    ShowChangedAreApply()
    setSearchConditions(searchConditions.map(obj => {
      if(obj.name === 'type') { 
            return {
              id:3,
              name: obj.name,
              value: obj.value.map(v => {
                if(v.type === Type) {
                  // console.log(v)
                    return {
                      ...v,
                      isSearching: false
                    }
              } else return {...v}
            })
            }
      } else return {...obj}
      }
      ))
  }

  return (
    <div className="">
      <div className='flex items-start flex-wrap-reverse justify-start'>
        {TypeList.map(type => 
          <>
            <div onClick={handleDeleteTypeFromList} name={type} className='choosed-multiple-option-multiple'>
                <span onClick={handleDeleteTypeFromList} name={type} className='flex justify-center items-center'>{type}</span>
            <CloseIcon
                className="close-icon"
                onClick={handleDeleteTypeFromList}
                name={type}
            />
            </div>
          </>
          )}
    </div>
    </div>
  )
}
