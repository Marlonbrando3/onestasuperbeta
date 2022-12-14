import React, {useState, useEffect} from 'react'
import { useRouter } from 'next/router'

export default function SearchButton({
    actualSite,
    setActualSite,
    searchShow, 
    setSearchShow,
    choosedCountry,
    setChoosedCountry,
    query,
    setQuery,
    searchConditions,
    setSearchConditions

}) {    
    const router = useRouter()

    const handleShowSearch = (e) =>{

        let targetvalue = e.target.value
        
        router.push({
            pathname:'/[country]',
            query: {country:targetvalue}
        })
        
        
        setSearchConditions(searchConditions.map(param => {
        if(param.name === 'country'){
            return{
                ...param,
                isSearching: true,
                value: targetvalue
            }}
        if(param.name === 'page'){
            return{
                ...param,
                value: actualSite,
                isSearching: true,
            }
        }
        else return {...param}
        }))

        setSearchShow(true)
        setChoosedCountry({...choosedCountry, country:targetvalue})

    }
    return (
            <>
                <div 
                    className={searchShow ? 'hidden' : 'md:p-2 lg:p-5 mx-7 transition absolute top-3/4 md:h-1/5 md:top-3/4 left-0 right-0 md:left-20 md:right-20 lg:right-6 md:mx-4 lg:top-72 lg:left-2/3 md:rounded-xl md:bg-gray-50 bg-white/[0.0] z-96 flex flex-col cursor-pointer'}>
                    <span>
                            <p className='mb-4 sm:mb-0 hidden md:block sm:inline md:pt-0 sm:pt-0 pt-5 xl:text-xl md:text-base text-lg'>W jakim kraju szukasz nieruchmości?</p>
                    <select 
                    onChange={handleShowSearch}
                    className="CountrySelect border-solid border-2 rounded-3xl text-2xl py-2 px-4 outline-none">
                        <option default >Kliknij aby wybać kraj</option>
                        <option value="Hiszpania" >Nieruchomości w Hiszpanii</option>
                        <option value="Portugalia">Nieruchomości w Portugalii</option>
                        <option value="Chorwacja">Nieruchomości w Chorwacji</option>
                    </select>
                </span>
            </div>
        </>
    )
}
