import { CountertopsRounded } from "@mui/icons-material"

export default function HeaderCountrySearch({
    countries,
    setCountries,
    choosedCountry,
    setChoosedCountry,
    searchConditions,
    setSearchConditions,
    choosedTypes,
    setChoosedTypes,
    choosedRegion,
    setChoosedRegion,
    actualSite,
    setActualSite}) {

    const handleChangeCountry = (e) => {

        let Country = e.target.value

        setChoosedRegion([])
        setChoosedTypes([])
        setActualSite(1)

        setSearchConditions(searchConditions.map(prop => {
            if(prop.name === 'country'){
            return{
              ...prop,
              value: Country,
            }} 
            if(prop.name === 'page'){
                return{
                  ...prop,
                  value: 1,
            }}

            if(prop.name === 'region'){
                return{
                  ...prop,
                  value: '',
                  isSearching:false
            }}
            
            else return {...prop}
          }))

        setChoosedCountry({...choosedCountry, country: Country})

        setCountries(countries.map(country => {
            if(country.nameCountry === Country)
                return{
                ...country, regionList: true
            }
            if(country.nameCountry !== Country)
            return{
            ...country, regionList: false
        }
            else return {...country}
        }
        ))
    }

  return (
    <div className='flex items-center w-full h-12'>
        <span className='w-full'>
            <select value={choosedCountry.country} onChange={handleChangeCountry} id="Country" className="text-sm py-1 px-1 w-full outline-none" placeholder="Wybierz z listy">
                <option value="Hiszpania">Hiszpania</option>
                <option value="Portugalia">Portugalia</option>
                <option value="Chorwacja">Chorwacja</option>
            </select>
        </span>
</div>
  )
}