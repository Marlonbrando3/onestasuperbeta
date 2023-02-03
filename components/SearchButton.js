import React, {useState, useEffect, useContext, useRef} from 'react'
import { AppContext } from '../pages/_app'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import DataCountry from '../data/DataCountry.json'
import Loader from '../components/images/Spinner-1s-200px.gif';
import { RunningWithErrorsOutlined } from '@mui/icons-material'
import { sliderClasses } from '@mui/material'


export default function SearchButton({}) {    
    const router = useRouter();

    const {searchShow,setSearchShow} = useContext(AppContext)
    const {searchConditions, setSearchConditions} = useContext(AppContext)
    const {headerAfterFirstView, setHeaderAfterFirstView} = useContext(AppContext)
    console.log(searchConditions)
    console.log(headerAfterFirstView)

    const handleShowSearch = (e) =>{

    //     let targetvalue =  e.target.getAttribute('name')

    //     setHeaderAfterFirstView(true)
    //     setSearchShow(true)
        
    //     setSearchConditions(searchConditions.map(param => {

    //     if(param.name === 'page'){
    //         return{
    //             ...param,
    //             value: 1,
    //             isSearching: true,
    //             }
    //         }
    //     if(param.name === 'region'){
    //         let data = [];
    //         DataCountry.map(obj => {
    //             if(obj.country === targetvalue){

    //                 obj.region.map(region => {
    //                     console.log(region)
    //                         data = [...data, {
    //                                     region: region,
    //                                     isSearching: false,
    //                                 }]
    //                     })
    //                 }                
    //             })
    //             return {
    //                 ...param,
    //                 value: data,
    //             }
    //             } else return {...param}
    //         }))
    }


    const [countries, setCountires] = useState(['Hiszpania', 'Chorwacja', 'Portugalia'])
    const list = useRef()
    const listClaim = useRef()
    const listData = useRef()

    const ShowList = () => {
        list.current.style.height = "180px"
    }

    return (
            <>
                <div 
                    className={searchShow ? 'hidden' : '-mt-12 md:mt-auto md:p-2 lg:p-0 mx-7 transition absolute lg:w-96 top-3/4  md:top-3/4 left-0 right-0 md:left-20 md:right-20 lg:right-6 md:mx-4 lg:top-auto lg:left-auto md:rounded-xl rounded-3xl bg-white z-96 flex flex-col cursor-pointer border-red-400 border'}>
                    <div ref={list} onClick={ShowList} className="duration-300 transition-all border-solid rounded-3xl text-xl px-4 py-2 lg:py-3 bg-white outline-none overflow-hidden lg:h-14 h-12">
                        <p ref={listClaim} className='rounded-md inline center text-xl pl-2 md:text-2xl'>Naciśnij aby wybrać kraj</p>
                        <div ref={listData} className='overflow-hidden mt-3 flex flex-col w-full'>
                        {countries.map((obj, key) => (
                                <Link key={obj} href={obj.charAt(0).toLowerCase() + obj.slice(1)}className='hover:bg-red-700 hover:text-white w-12/12 flex justify-center border-b'>
                                    <div key={obj} onClick={handleShowSearch} className="text-2xl w-full" name={obj}>{obj}</div>
                                </Link>
                        ))}
                    </div>
                    </div>
            </div>
            {searchShow && 
            <div className='absolute md:w-40 md:h-40 w-56 h-56 z-30 mx-auto'>
            <Image className='spinner'
                src={Loader}
                width={800}
                height={800}
            />
            </div>
            }
        </>
    )
}