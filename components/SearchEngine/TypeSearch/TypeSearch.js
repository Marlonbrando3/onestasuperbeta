export default function TypeSearch({
  apply,
  setApply,
  TypeList,
  choosedTypes,
  setChoosedTypes,
  setTypeList,
  activeTypeList,
  setActiveTypeList,
  searchConditions,
  setSearchConditions
}) {

  const handleShowTypeList = (e) => {

    //show list of types
    setActiveTypeList(activeTypeList => !activeTypeList)

  }

  const handleAddTypeToTheList = (e) => {

    setApply(true)

    //hide list of types
    setActiveTypeList(activeTypeList => !activeTypeList)

    //get value of cliked option
    const Type = e.target.getAttribute ('name')

    //add choosed option(s) to list
    setSearchConditions(current => [...current, {
      id:3,
      value: Type, 
      name: 'type',
      isSearching: true
    }])

    setChoosedTypes(current => [...current, Type])
    setTypeList(TypeList.map(type=> {
      if(type.type===Type) {
      return{
        ...type,
        onList:false
      }
    } else 
    return{
      ...type,
    }
  } 
    
    ))
  }

  let ActualTypeList = TypeList.filter(type => type.onList === true)

  return (
    <>
      <div className="InputsStyle w-full">
        <input onClick={handleShowTypeList} className="InputsProps w-full" autoComplete="off" name="type" placeholder="Typ nieruchomości"></input>
      </div>
        {activeTypeList && <div className="ListWithChooseContainer">{ActualTypeList.map(type => 
        <li key={type}
          className="listToChoose"
          name={type.type}
          onClick={handleAddTypeToTheList}
          >{type.type}</li>)}</div>}
      </>
  )
}
