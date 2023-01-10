import { useState, useEffect, 
  useContext, createContext
} from 'react'
import Head from 'next/head'
import {useRouter} from 'next/router'
import MiniHomeView from '../../components/SearchEngine/MiniHomeView'
import Header from '../../components/Header'
import SearchEngine from '../../components/SearchEngine/SearchEngine'
import Property from '../../model/propertymodel'
import db from '../../utils/db'
import Applychanges from '../../components/SearchEngine/Applychanges'
import Footer from '../../components/Footer'
import ContactFormMain from '../../components/ContactFormMain'
import { AppContext } from '../_app'

export const CountryIndexContext = createContext();

export default function Home(
  {
    propertiesWork, showSearchComponentsOnMobile, setShowSearchComponentsOnMobile
  }
  ) {
  const router = useRouter();

  const {pool, page, seaview, garden, parking, balcony, solarium, pf, pt, bedf, bedt, bathf, batht, distance, type} = router.query

  const {searchConditions, setSearchConditions} = useContext(AppContext)

  //set number of properties per the one site
  const [propertiesOnSite, setPropertiesOnSite] = useState(4);

  //state is set the number of property to show on new site after click
  const [startCountingFrom, setStartCountingFrom] = useState(0);

  //how many sites system have to generate based of numbers od filtered properties and properites per one site
  const [sitesArray, setSitesArray] = useState(['1','1','1']);

  //actual active site
  const [actualSite, setActualSite] = useState(1);

  //INDEX
  const [choosedCountry, setChoosedCountry] = useState(
    {
        id:'',
        country: '',
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


  let Region = []; 
  let Type = [];

  searchConditions.filter(obj => {
    let dataRegion = [];
    if(obj.name === 'region') {
      obj.value.map(v => {
        if(v.isSearching === true) {
          dataRegion = [...dataRegion,"region="+v.region]
        } if(dataRegion.length > 0){
          Region = dataRegion.toString().replaceAll(',',"&")+'&';
          } else {
            Region = [];
          }
        })
    }
  })

  searchConditions.filter(obj => {
    let dataType = [];
    if(obj.name === 'type') {
      obj.value.map(v => {
        if(v.isSearching === true) {
          dataType = [...dataType,"type="+v.type]
        } if(dataType.length > 0){
          Type = dataType.toString().replaceAll(',',"&")+'&';
          } else {
            Type = [];
          }
        })
    }
  })

  let Multiple = Region+Type


  // console.log(Multiple)
    

  let results = searchConditions.filter(obj => {
    if(obj.isSearching === true) return true;
  })

  //from filtered props leave olny ...
  const resultsFin = results.map(obj =>  {
      return (
        obj.name+'='+obj.value
      )
  })

  let query = Multiple+resultsFin.toString().replaceAll(',','&')
  // console.log(query)

  const properties = propertiesWithSites.filter(prop => prop.page === actualSite)
  let [ActualCountry, setActualCountry] = useState(router.query.country);

  const [counter, setCounter] = useState(0)

  const ChangeCounter = useCallback((data)=>{
    return counter + data
  },[counter])

  let LocalData = router.asPath.replaceAll('%20',' ').split("?")[1]
  console.log(LocalData)

  //use Effect for counring down counter with callBack
  useEffect(()=>{

  setTimeout(()=> {
  
      const StorageInsideData = window.localStorage.getItem(router.asPath.replaceAll('%20',' ').split("?")[1])
      let conditions = [];
      conditions = JSON.parse(StorageInsideData)
      // console.log(conditions)


     if(conditions === null){
        console.log("null")
     } else {
          setSearchConditions(conditions)
        }
  },0)

  },[router])

  // useEffect(()=> {

    //generate query from searchConditions
    // query = Multiple+resultsFin.toString().replaceAll(',','&')
    // console.log(query)
    // console.log(window.localStorage.key(0))
    // console.log(window.localStorage.key(1))

    // if(window.localStorage.key(0) === null){
    //   window.localStorage.setItem(query, JSON.stringify(searchConditions))
    // } 
    // if(window.localStorage.length >= 0 && query === "page=1"){
    //   // console.log('alredyExist')
    // }
    // else {
    //   window.localStorage.setItem(query, JSON.stringify(searchConditions))
    // }
    
    // router.push({
    //   pathname: ActualCountry+'/',
    //   query
    // }, undefined, { scroll: false });

    // setCounter(ChangeCounter(1))

// },[query, choosedCountry])


  return (
    <div className='overflow-x-hidden'>Kolo
      {/* <Head>
        <title>Onesta || Hiszpania</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width, minimum-scale=1, maximum-scale=1" />
      </Head>
      <div className='fixed w-full h-16 z-50 bg-white'>
        <Header
          showSearchComponentsOnMobile={showSearchComponentsOnMobile}
          setShowSearchComponentsOnMobile={setShowSearchComponentsOnMobile}
        />
        </div>
      <Applychanges
          showSearchComponentsOnMobile={showSearchComponentsOnMobile}
          setShowSearchComponentsOnMobile={setShowSearchComponentsOnMobile}
      />
      <MiniHomeView 
        ActualCountry={ActualCountry}
      />
      <SearchEngine
        ActualCountry={ActualCountry}
        setActualCountry={setActualCountry}
        sitesArraycounter={sitesArraycounter}
        sitesArray={sitesArray}
        setSitesArray={setSitesArray}
        actualSite={actualSite}
        setActualSite={setActualSite}
        choosedCountry={choosedCountry}
        setChoosedCountry={setChoosedCountry}
        properties={properties}
        showSearchComponentsOnMobile={showSearchComponentsOnMobile}
        setShowSearchComponentsOnMobile={setShowSearchComponentsOnMobile}
      />
      <ContactFormMain />
      <Footer /> */}
    </div>
  )
}

// export async function getServerSideProps (
//   // contex
//   ) {

//   console.log("im in get props")
//   await db.connect();
//   console.log("connected with DB")

  // //searching for regions
  // let dataid = contex.query.id
  // let idd;

  // //searching for regions
  // let dataregion = contex.query.region
  // let regiond;

  // //counting price
  // let datapf = contex.query.pf
  // let datapt = contex.query.pt
  // let pf;
  // let pt;

  // //bathbrooms
  // let databathf = contex.query.bathf
  // let databatht = contex.query.batht
  // let bathf;
  // let batht;

  // //bedrooms
  // let databedf = contex.query.bedf
  // let databedt = contex.query.bedt
  // let bedf;
  // let bedt;

  // //searching for types
  // let datatype = contex.query.type
  // let typed;

  // //searching for distance
  // let datadistance = contex.query.distance
  // let distanced;

  // //searching for regions, types, distance
  // let countRegions = () => {

  //   if(dataregion === undefined){
  //     regiond = ['Costa Blanca','Costa del Sol','Costa Brava','Costa Dorada','Lisboa','Porto','Istria', 'Kvarner', 'Dalmacja PŁ', 'Dalmacja PŁD', 'Dalmacja ŚR'];
  //   } else regiond = contex.query.region

  //   if(datatype === undefined){
  //     typed = ['Bungalow','Dom','Apartament'];
  //   } else typed = contex.query.type

  //   if(datatype === undefined){
  //     typed = ['Bungalow','Dom','Apartament'];
  //   } else typed = contex.query.type

  //   if(datadistance === undefined){
  //     distanced = 100000;
  //   } else distanced = contex.query.distance

  // }

  // //countring 'from'
  // let countFrom = () => {
  //   if(datapf === undefined){
  //     pf=1;
  //   } else pf = Number(contex.query.pf)

  //   if(databathf === undefined){
  //     bathf=1;
  //   } else bathf = Number(contex.query.bathf)

  //   if(databedf === undefined){
  //     bedf=1;
  //   } else bedf = Number(contex.query.bedf)
  // }

  // let countTo = () => {
  //   if(datapt === undefined){
  //     pt=50000000;
  //   } else pt = Number(contex.query.pt)

  //   if(databatht === undefined){
  //     batht=5;
  //   } else batht = Number(contex.query.batht)

  //   if(databedt === undefined){
  //     bedt=5;
  //   } else bedt = Number(contex.query.bedt)
  // }
  // let pool = contex.query.pool
  // let garden = contex.query.garden
  // let seaview = contex.query.seaview
  // let parking = contex.query.parking
  // let solarium = contex.query.solarium
  // let balcony = contex.query.balcony

  // let TrueOrFalse = () => {

  //   if(pool === undefined){
  //     pool = ['false', 'true']
  //   } else pool = ['true']

  //   if(garden === undefined){
  //     garden = ['false', 'true']
  //   } else garden = ['true']

  //   if(parking === undefined){
  //     parking = ['false', 'true']
  //   } else parking = ['true']

  //   if(seaview === undefined){
  //     seaview = ['false', 'true']
  //   } else seaview = ['true']

  //   if(balcony === undefined){
  //     balcony = ['false', 'true']
  //   } else balcony = ['true']

  //   if(solarium === undefined){
  //     solarium = ['false', 'true']
  //   } else solarium = ['true']
  // }

  // countRegions();
  // countFrom();
  // countTo();
  // TrueOrFalse();


//   const results = await Property.find({
//       // country: contex.query.country,
//       // region: regiond,
//       // distance: {$lte: distanced},
//       // type: typed,
//       // pool:{$in: pool},
//       // seaview:{$in: seaview},
//       // parking:{$in: parking},
//       // garden:{$in: garden},
//       // solarium:{$in: solarium},
//       // balcony:{$in: balcony},
//       // price: {$gte: pf, $lte: pt},
//       // bathrooms: {$gte: bathf, $lte: batht},
//       // bedrooms: {$gte: bedf, $lte: bedt},
//   });

//   const properties = JSON.parse(JSON.stringify(results))
  
//   return {
//     props:{
//       propertiesWork: properties,
//     }
//   }
// }

  