import CloseIcon from '@mui/icons-material/Close';

export default function RegionChoosed({
  apply,
  setApply,
  choosedRegion,
  setChoosedRegion,
  countryPlaceHolder,
  setCountryPlaceHolder,
  choosedCountry,
  setChoosedCountry,
  countries,
  setCountries,
  activeCountryList,
  setActiveCountryList,
  searchConditions,
  setSearchConditions
}) {

  const handleDeleteRegionFromList = (e) => {

    setApply(true)
    
    let regionName = e.target.getAttribute('name')

    setCountries(countries.map(region => {
      if((region.name === regionName) && (region.OnList !== "deactive")){
      return {
        ...region, 
        added: false,
        OnList: true,
        regionList:true
      }
    } else return {...region}
    }))

    setSearchConditions(searchConditions.map(region => {
      if(region.value === regionName){
      return{
          id:2,
          value: '',
          name: 'region',
          isSearching: false
    }} else return {...region}
  
  }))

    if(choosedCountry.length >= 0 && choosedCountry.length < 2){
      setCountryPlaceHolder("Wybierz Kraj (mozesz kilka)")
    }
      setChoosedRegion(choosedRegion.filter(region => region !== regionName))
    }

  return (
    <div className="">
      <div className='flex items-start flex-wrap-reverse justify-start'>
        {choosedRegion.map(region => 
          <>
            <div onClick={handleDeleteRegionFromList} name={region} className='flex border-black bg-gray-500/[0.2] text-xs rounded-md m-1 px-1 cursor-pointer'>
              <span onClick={handleDeleteRegionFromList} name={region} className='flex justify-center items-center'>{region}</span>
            <CloseIcon
                  className="cursor-pointer text-red-900 w-4 border"
                  onClick={handleDeleteRegionFromList}
                  name={region}
              />
            </div>
          </>
          )}
    </div>
    </div>
  )
}
