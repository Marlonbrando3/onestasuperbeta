import CloseIcon from '@mui/icons-material/Close';

export default function TypeChoosed({
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

  const handleDeleteTypeFromList = (e) => {
    setApply(true)

    let Type = e.target.getAttribute('name')

    setTypeList(TypeList.map(type => {
      if(type.type === Type){
      return {
        ...type,
        onList: true
      }
    } else return {...type}
    }))

    setSearchConditions(searchConditions.map(type => {
      if(type.value === Type){
      return{
          id:2,
          value: '',
          name: 'type',
          isSearching: false
    }} else return {...type}
  
  }))

    setChoosedTypes(choosedTypes.filter(type => type !== Type))
  }

  return (
    <div className="">
      <div className='flex items-start flex-wrap-reverse justify-start'>
        {choosedTypes.map(type => 
          <>
            <div onClick={handleDeleteTypeFromList} name={type} className='flex border-black bg-gray-500/[0.2] text-xs rounded-md m-1 px-1 cursor-pointer'>
                <span onClick={handleDeleteTypeFromList} name={type} className='flex justify-center items-center'>{type}</span>
            <CloseIcon
                className="cursor-pointer text-red-900 w-4 border"
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
