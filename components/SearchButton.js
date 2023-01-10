import React, {useState, useEffect} from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useContext } from 'react'
import { CCountry } from '../context/CCountry'

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

        router.push({
            pathname:'/[country]',
            query: {country:e.target.value}
        })
        
        let targetvalue = e.target.value
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
                    className={searchShow ? 'hidden' : 'p-5 transition absolute top-3/4 left-0 right-0 mx-4 lg:top-72 lg:left-2/3 rounded-xl bg-gray-50 z-96 flex flex-col cursor-pointer'}>
                    <span>
                            <p className='mb-4 pl-1 text-xl'>W jakim kraju szukasz nieruchmości?</p>
                    <select 
                    onChange={handleShowSearch}
                    className="CountrySelect border-solid border-2 rounded-xl text-2xl py-2 px-4 outline-none">
                        <option default >Wybierz z listy</option>
                        <option value="Hiszpania" >Nieruchomości w Hiszpanii</option>
                        <option value="Portugalia">Nieruchomości w Portugalii</option>
                        <option value="Chorwacja">Nieruchomości w Chorwacji</option>
                    </select>
                </span>
            </div>
        </>
    )
}