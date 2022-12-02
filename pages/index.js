import { useState, useEffect } from 'react'
import Head from 'next/head'
import {useRouter} from 'next/router'
import Header from '../components/Header'
import HomeView from '../components/HomeView'
import SearchButton from '../components/SearchButton'
import MainTheme from '../components/MainTheme'
import Applychanges from '../components/SearchEngine/Applychanges'

export default function FirstView () {
    return(
        <>
        <Head>
            <title>Onesta Group</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width, minimum-scale=1, maximum-scale=1" />
        </Head>
        <Header 
            // searchShow={searchShow}
            // setSearchShow={setSearchShow}
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
            // searchShow={searchShow}
            // setSearchShow={setSearchShow}
            // choosedCountry={choosedCountry}
            // setChoosedCountry={setChoosedCountry}
            // actualSite={actualSite}
            // setActualSite={setActualSite}
            // searchConditions={searchConditions}
            // setSearchConditions={setSearchConditions}
        />
        <MainTheme 
            // searchShow={searchShow}
            // setSearchShow={setSearchShow}
        />
    </>
    )
}