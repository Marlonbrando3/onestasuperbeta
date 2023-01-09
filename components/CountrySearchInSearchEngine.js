import { CountertopsRounded } from "@mui/icons-material"
import { useRouter } from 'next/router'
import { useContext } from "react";
import { AppContext } from "../pages/_app"
import DataCountry from '../data/DataCountry.json'

export default function HeaderCountrySearch({
    countries,
    ActualCountry,
    setActualCountry,
    setCountries,
    choosedCountry,
    setChoosedCountry,
    setChoosedTypes,
    setActualSite}) {

    const router = useRouter();
    const {searchConditions, setSearchConditions} = useContext(AppContext)

    const handleChangeCountry = (e) => {

 
        let Country = e.target.value
        window.localStorage.clear()

        console.log(Country)
        
        setActualSite(1)

        setActualCountry(Country)

          router.push({
          pathname:'/[country]',
          query: {country:Country}
        }) 

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
        // lalal

        setSearchConditions(searchConditions.map(param => {

            if(param.name === 'type'){
                let data = [];
                 param.value.map(v => {
                    data = [...data, {
                        type: v.type,
                        isSearching:false
                    }]

                 })
                return {
                   ...param,
                    value: data    
                }
            }    
            if(param.name === 'page'){
                return{
                    ...param,
                    value: 1,
                    isSearching: true,
                }
            }
            if(param.name === 'region'){
                let data = [];
                DataCountry.map(obj => {
                    if(obj.country === Country){
                        obj.region.map(region => {
                            console.log(region)
                                data = [...data, {
                                            region: region,
                                            isSearching: false,
                                        }]
                            })
                        }                
                    })
                    return {
                        ...param,
                        value: data,
                    }
            }     
                    else return {
                        ...param,
                        value:'',
                        isSearching:false
                    }
                }))
    }

  return (
    <div className='flex items-center w-full h-12'>
        <span className='w-full'>
            <select defaultValue={ActualCountry} onChange={handleChangeCountry} id="Country" className="text-sm py-2 px-2 w-full border border-gray-400 rounded-md outline-none cursor-pointer" placeholder="Wybierz z listy">
                <option value="Hiszpania">Hiszpania</option>
                <option value="Portugalia">Portugalia</option>
                <option value="Chorwacja">Chorwacja</option>
            </select>
        </span>
</div>
  )
}