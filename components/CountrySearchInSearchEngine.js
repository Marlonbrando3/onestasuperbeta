import { CountertopsRounded } from "@mui/icons-material"
import { useRouter } from 'next/router'

export default function HeaderCountrySearch({
    countries,
    ActualCountry,
    setActualCountry,
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

    const router = useRouter()

    const handleChangeCountry = (e) => {


        let Country = e.target.value
        console.log(Country)

        setChoosedRegion([])
        setChoosedTypes([])
        setActualSite(1)

        setActualCountry(Country)

        // router.push({
        //   pathname:'/[country]',
        //   query: {country:Country}
        // })

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
            <select defaultValue={ActualCountry} onChange={handleChangeCountry} id="Country" className="text-sm py-2 px-2 w-full border border-gray-400 rounded-md outline-none" placeholder="Wybierz z listy">
                <option value="Hiszpania">Hiszpania</option>
                <option value="Portugalia">Portugalia</option>
                <option value="Chorwacja">Chorwacja</option>
            </select>
        </span>
</div>
  )
}