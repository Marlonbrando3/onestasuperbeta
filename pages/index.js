import { useState, useEffect } from 'react'
import Head from 'next/head'
import {useRouter} from 'next/router'
import Header from '../components/Header'
import HomeView from '../components/HomeView'
import SearchButton from '../components/SearchButton'
import MainTheme from '../components/MainTheme'
import SearchEngine from '../components/SearchEngine/SearchEngine'
import HeaderCountrySearch from '../components/HeaderCountrySearch'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Property from "../model/property"
import db from '../utils/db'
import FindReplaceOutlined from '@mui/icons-material/FindReplaceOutlined'
import FindReplaceOutlinedfrom from '@mui/icons-material/RouterTwoTone'
import Applychanges from '../components/SearchEngine/Applychanges'
import Footer from '../components/Footer'
import ContactFormMain from '../components/ContactFormMain'

export default function Home(
  // {propertiesWork}
  ) {
  console.log("index")
  
  const router = useRouter();

  const {country, id, pool, page, seaview, garden, parking, balcony, solarium, pf, pt, bedf, bedt, bathf, region, batht, distance} = router.query

  const[showSearchComponentsOnMobile, setShowSearchComponentsOnMobile] = useState(false)

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

  const [propertiesOnSite, setPropertiesOnSite] = useState(4);
  const [startCountingFrom, setStartCountingFrom] = useState(0);
  const [sitesArray, setSitesArray] = useState(['1','1','1'])

  const [propertiesWork, setPropertiesWork] = useState([
          {title: 'lala', id: 1, price: 250000, value: '', isSearching:false, image:[{first:'lalal'}]},
          {title: 'kolo', id: 3, price: 230000, value: '', isSearching:false, image:[{first:'lalal'}]},
          {title: 'jolo', id: 4, price: 210000, value:'', isSearching:false, image:[{first:'lalal'}]},
  ])

  let siteNumber = 1;
  let lastPropertyOnSite = 4;
  let sitesArraycounter = [1]
  
  const propertiesWithSites = propertiesWork.map((property, index) => {
    if(index+1 <= lastPropertyOnSite){
      return{
        ...property,
        page: siteNumber
      }
    }
    if(index+1 === lastPropertyOnSite+1){
        sitesArraycounter.push(1)
        siteNumber = siteNumber + 1,
        lastPropertyOnSite = lastPropertyOnSite + propertiesOnSite
          return{
          ...property,
          page: siteNumber,
        }
    } else return {...property}
    })

  let results = searchConditions.filter(obj => {
    if(obj.isSearching === true) return true;
  })
  //from filtered props leave olny ...
  let resultsFin = results.map(obj =>  {
      return (
        obj.name+'='+obj.value
      )
  })

  //handling type of property
  const [choosedTypes,setChoosedTypes] = useState([])

  //handling region of property
  const [choosedRegion, setChoosedRegion] = useState([])

  //actual site
  const [actualSite, setActualSite] = useState(1);

  let query = resultsFin.toString().replaceAll(',','&')
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
  const [showMainPage, setShowMainPage] = useState(true);
  const [apply, setApply] = useState(false);
  const [newSearch, setNewSearch] = useState(false);

  const properties = propertiesWithSites.filter(prop => prop.page === actualSite)

  // useEffect(()=> {

  //     setNewSearch(false)
  //     query = resultsFin.toString().replaceAll(',','&')
  //     router.push({
  //       pathname:'/',
  //       query
  //     })
  // },[newSearch===true, searchConditions[0].value, searchConditions[13].value])

  return (
    <div className='overflow-x-hidden'>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width, minimum-scale=1, maximum-scale=1" />
      </Head>
      <Header 
        searchShow={searchShow}
        setSearchShow={setSearchShow}
        apply={apply}
        setApply={setApply}
        showSearchComponentsOnMobile={showSearchComponentsOnMobile}
        setShowSearchComponentsOnMobile={setShowSearchComponentsOnMobile}
      />
      <Applychanges
          apply={apply}
          setApply={setApply}
          setNewSearch={setNewSearch}
          newSearch={newSearch} 
      />
      <HomeView 
        showMainPage={showMainPage}
        setShowMainPage={setShowMainPage}
        searchShow={searchShow}
        setSearchShow={setSearchShow}
        apply={apply}
        setApply={setApply}
        />
      <SearchButton
        searchShow={searchShow}
        setSearchShow={setSearchShow}
        choosedCountry={choosedCountry}
        setChoosedCountry={setChoosedCountry}
        actualSite={actualSite}
        setActualSite={setActualSite}
        searchConditions={searchConditions}
        setSearchConditions={setSearchConditions}
       />
      <MainTheme 
        searchShow={searchShow}
        setSearchShow={setSearchShow}/>
      <SearchEngine
        sitesArraycounter={sitesArraycounter}
        sitesArray={sitesArray}
        setSitesArray={setSitesArray}
        actualSite={actualSite}
        setActualSite={setActualSite}
        choosedCountry={choosedCountry}
        setChoosedCountry={setChoosedCountry}
        searchShow={searchShow}
        setSearchShow={setSearchShow}
        properties={properties}
        apply={apply}
        setApply={setApply}
        searchConditions={searchConditions}
        setSearchConditions={setSearchConditions}
        newSearch={newSearch}
        setNewSearch={setNewSearch}
        choosedTypes={choosedTypes}
        setChoosedTypes={setChoosedTypes}
        choosedRegion={choosedRegion}
        setChoosedRegion={setChoosedRegion}
        showSearchComponentsOnMobile={showSearchComponentsOnMobile}
        setShowSearchComponentsOnMobile={setShowSearchComponentsOnMobile}
      />
      {searchShow && <ContactFormMain />}
      {searchShow && <Footer />}
    </div>
  )
}

export async function getServerSideProps (contex) {

  console.log("im in get props")
  db.connect();
  console.log("connected with DB")

  //searching for regions
  let dataid = contex.query.id
  let idd;

  //searching for regions
  let dataregion = contex.query.region
  let regiond;

  //counting price
  let datapf = contex.query.pf
  let datapt = contex.query.pt
  let pf;
  let pt;

  //bathbrooms
  let databathf = contex.query.bathf
  let databatht = contex.query.batht
  let bathf;
  let batht;

  //bedrooms
  let databedf = contex.query.bedf
  let databedt = contex.query.bedt
  let bedf;
  let bedt;

  //searching for types
  let datatype = contex.query.type
  let typed;

  //searching for distance
  let datadistance = contex.query.distance
  let distanced;

  //searching for regions, types, distance
  let countRegions = () => {

    if(dataregion === undefined){
      regiond = ['Costa Blanca','Costa del Sol','Costa Brava','Costa Dorada','Lisboa','Porto'];
    } else regiond = contex.query.region

    if(datatype === undefined){
      typed = ['Bungalow','Dom','Apartament'];
    } else typed = contex.query.type

    if(datatype === undefined){
      typed = ['Bungalow','Dom','Apartament'];
    } else typed = contex.query.type

    if(datadistance === undefined){
      distanced = 100000;
    } else distanced = contex.query.distance

  }

  //countring 'from'
  let countFrom = () => {
    if(datapf === undefined){
      pf=1;
    } else pf = Number(contex.query.pf)

    if(databathf === undefined){
      bathf=1;
    } else bathf = Number(contex.query.bathf)

    if(databedf === undefined){
      bedf=1;
    } else bedf = Number(contex.query.bedf)
  }

  let countTo = () => {
    if(datapt === undefined){
      pt=50000000;
    } else pt = Number(contex.query.pt)

    if(databatht === undefined){
      batht=5;
    } else batht = Number(contex.query.batht)

    if(databedt === undefined){
      bedt=5;
    } else bedt = Number(contex.query.bedt)
  }
  let pool = contex.query.pool
  let garden = contex.query.garden
  let seaview = contex.query.seaview
  let parking = contex.query.parking
  let solarium = contex.query.solarium
  let balcony = contex.query.balcony

  let TrueOrFalse = () => {

    if(pool === undefined){
      pool = ['false', 'true']
    } else pool = ['true']

    if(garden === undefined){
      garden = ['false', 'true']
    } else garden = ['true']

    if(parking === undefined){
      parking = ['false', 'true']
    } else parking = ['true']

    if(seaview === undefined){
      seaview = ['false', 'true']
    } else seaview = ['true']

    if(balcony === undefined){
      balcony = ['false', 'true']
    } else balcony = ['true']

    if(solarium === undefined){
      solarium = ['false', 'true']
    } else solarium = ['true']
  }

  countRegions();
  countFrom();
  countTo();
  TrueOrFalse();


  const results = await Property.find({
      country: contex.query.country,
      region: regiond,
      distance: {$lte: distanced},
      type: typed,
      pool:{$in: pool},
      seaview:{$in: seaview},
      parking:{$in: parking},
      garden:{$in: garden},
      solarium:{$in: solarium},
      balcony:{$in: balcony},
      price: {$gte: pf, $lte: pt},
      bathrooms: {$gte: bathf, $lte: batht},
      bedrooms: {$gte: bedf, $lte: bedt},
  });

  const properties = JSON.parse(JSON.stringify(results))
  
  return {
    props:{
      propertiesWork: properties
    }
  }

// return {
//   props:{
//       propertiesWork:([
//       {title: 'lala', id: 1, price: 250000, value: '', isSearching:false, image:[{first:'lalal'}]},
//       {title: 'kolo', id: 3, price: 230000, value: '', isSearching:false, image:[{first:'lalal'}]},
//       {title: 'jolo', id: 4, price: 210000, value:'', isSearching:false, image:[{first:'lalal'}]},
//     ])
//   }
// }
}

  