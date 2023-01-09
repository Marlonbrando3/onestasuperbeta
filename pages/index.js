import {useState, useEffect, useContext} from 'react'
import {useRouter} from 'next/router'
import Head from 'next/head'
import Header from '../components/Header'
import HomeView from '../components/HomeView'
import SearchButton from '../components/SearchButton'
import MainTheme from '../components/MainTheme'
import Applychanges from '../components/SearchEngine/Applychanges'
import {AppContext} from '../pages/_app'

export default function FirstView ({}) {

    const router = useRouter();

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

    const {searchShow,setSearchShow} = useContext(AppContext)
    const {headerAfterFirstView, setHeaderAfterFirstView} = useContext(AppContext)
    // setSearchShow(false)
    // setHeaderAfterFirstView(false)

    return(
        <div className='main-index'>
        <Head>
            <title>Onesta Group</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width, minimum-scale=1, maximum-scale=1" />
        </Head>
        <div className={searchShow ? 'hidden': 'w-full md:h-16 fixed top-0 md:bg-gray-800/[0.4] z-10 bg-white shadow-xl'}>
            <Header />
        </div>
        <Applychanges />
        <HomeView />
        <SearchButton
            choosedCountry={choosedCountry}
            setChoosedCountry={setChoosedCountry}
        />
        <MainTheme />
    </div>
    )
}