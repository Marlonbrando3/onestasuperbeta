import {useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import {useContext} from 'react'
import {CCountry} from '../context/CCountry'
import Head from 'next/head'
import Header from '../components/Header'
import HomeView from '../components/HomeView'
import SearchButton from '../components/SearchButton'
import MainTheme from '../components/MainTheme'
import Applychanges from '../components/SearchEngine/Applychanges'

export default function FirstView () {

    const router = useRouter();

    const [searchConditions, setSearchConditions] = useState([
        {id: 1, name: 'country', value: '', isSearching:false},
        {id: 3, name: 'type', value: '', isSearching:false},
        {id: 4, name: 'pf', value:'', isSearching:false},
        {id: 5, name: 'pt', value: '', isSearching:false},
        {id: 5, name: 'distance', value: '', isSearching:false},
        {id: 6, name: 'bathf', value: '', isSearching:false},
        {id: 7, name: 'batht', value: '', isSearching:false},
        {id: 8, name: 'bedf', value: '', isSearching:false},
        {id: 9, name: 'bedt', value: '', isSearching:false},
        {id: 10, name: 'parking', value:'', isSearching:false},
        {id: 11, name: 'pool', value:'', isSearching:false},
        {id: 12, name: 'garden', value:'', isSearching:false},
        {id: 13, name: 'seaview', value:'', isSearching:false},
        {id: 14, name: 'solarium', value:'', isSearching:false},
        {id: 15, name: 'page', value:1, isSearching:false},
    ])
    const [choosedCountry, setChoosedCountry] = useState(
        {
            id:'',
            country: 'Hiszpania',
            region:'',
            city:'',
            title:'',
            market:'',
            type:'',
            bathrooms:'',
            bedrooms:'',
            seaview: false,
            pool: false,
            parking:false,
            garden:false,
            solarium: false,
            balcony: false,
            price:'',
            distancetothesea:'',
        },
    )
    const [searchShow, setSearchShow] = useState(false);

    return(
        <>
        <Head>
            <title>Onesta Group</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width, minimum-scale=1, maximum-scale=1" />
        </Head>
        <Header 
            searchShow={searchShow}
            setSearchShow={setSearchShow}
            // apply={apply}
            // setApply={setApply}
            // showSearchComponentsOnMobile={showSearchComponentsOnMobile}
            // setShowSearchComponentsOnMobile={setShowSearchComponentsOnMobile}
        />
        <Applychanges
            // apply={apply}
            // setApply={setApply}
            // setNewSearch={setNewSearch}
            // newSearch={newSearch} 
        />
        <HomeView 
            // showMainPage={showMainPage}
            // setShowMainPage={setShowMainPage}
            // searchShow={searchShow}
            // setSearchShow={setSearchShow}
            // apply={apply}
            // setApply={setApply}
            />
        <SearchButton
            searchShow={searchShow}
            setSearchShow={setSearchShow}
            choosedCountry={choosedCountry}
            setChoosedCountry={setChoosedCountry}
            // actualSite={actualSite}
            // setActualSite={setActualSite}
            searchConditions={searchConditions}
            setSearchConditions={setSearchConditions}
        />
        <MainTheme 
            // searchShow={searchShow}
            // setSearchShow={setSearchShow}
        />
    </>
    )
}