import { useState, useEffect, useContext, createContext} from 'react'
import Head from 'next/head'
import Script from 'next/script'
import {useRouter} from 'next/router'
import MiniHomeView from '../../components/SearchEngine/MiniHomeView'
import Header from '../../components/Header'
import SearchEngine from '../../components/SearchEngine/SearchEngine'
import Property from '../../model/propertymodel'
import db from '../../utils/db'
import Applychanges from '../../components/SearchEngine/Applychanges'
import Footer from '../../components/Footer'
import ContactFormMain from '../../components/ContactFormMain'
import DataCountry from '../../data/DataCountry.json'
import { AppContext } from '../_app'

export const CountryIndexContext = createContext();

export default function Home(
  {propertiesWork}
  ) {
  const router = useRouter();

  const {pool, page, seaview, bungalow, apartament, house, garden, parking, balcony, solarium, pf, pt, bedf, bedt, bathf, batht, distance, type} = router.query

  const {searchConditions, setSearchConditions, searchShow, setSearchShow, showSearchComponentsOnMobile,setShowSearchComponentsOnMobile} = useContext(AppContext)
  // setSearchShow(true)

  //set number of properties per the one site
  const [propertiesOnSite, setPropertiesOnSite] = useState(4);

  //actual choosed country from router
  const [ActualCountry, setActualCountry] = useState(router.query.country);

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
  // setHeaderAfterFirstView(true)
  // setSearchShow(true)

  //change searchConditions country if ROUTER value i empty or is else that actuall

  let siteNumber = 1;
  let lastPropertyOnSite = 4;
  let sitesArraycounter = [1];
  
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

  // console.log(propertiesWork)
  console.log(propertiesWithSites)
  // console.log(router.query)

  let properties = propertiesWithSites
  // .filter(i => {
  //   let counter;

  //   searchConditions.map(e => {
  //     if(e.name === "page") {
  //       counter =  e.value
  //     }
  //   })

  //   if(i.page === counter){
  //     return i 
  //   }
  
  // })

  console.log(properties)

  return (
    <>
        {/* <!-- Google tag (gtag.js) --> */}
          <Script async src="https://www.googletagmanager.com/gtag/js?id=G-P4VZ7P7VZ5"></Script>
          <Script id="google-analitycs">{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-P4VZ7P7VZ5');
              `}
          </Script>
      <Head>
          <title>Nieruchomości w {router.query.country.charAt(0).toUpperCase() + router.query.country.slice(1)} - Onesta Group</title>
          <link rel="shortcut icon" href="/logotype.png" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width, minimum-scale=1, maximum-scale=1" />
        </Head>
    <div className={showSearchComponentsOnMobile===false ? 'overflow-x-hidden': 'h-0'}>
      <div className='fixed w-full h-16 z-30 bg-white'>
        <Header/>
        </div>
      <Applychanges />
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
      />
      <ContactFormMain />
      <Footer />
    </div>
    </>
  )
}

export async function getServerSideProps (contex) {

  console.log("im in get props")
  await db.connect();
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

  //searching for distance
  let datadistance = contex.query.distance
  let distanced;

  //searching for regions, types, distance
  let countRegions = () => {

    if(dataregion === undefined){
      regiond = ['Costa Blanca','Costa del Sol','Costa Brava','Costa Dorada','Lisboa','Porto','Istria', 'Kvarner', 'Dalmacja PŁ', 'Dalmacja PŁD', 'Dalmacja ŚR'];
    } else regiond = contex.query.region

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

  let bungalow = contex.query.bungalow
  let apartament = contex.query.apartament
  let house = contex.query.house
  let pool = contex.query.pool
  let garden = contex.query.garden
  let seaview = contex.query.seaview
  let parking = contex.query.parking
  let solarium = contex.query.solarium
  let balcony = contex.query.balcony

  let TrueOrFalse = () => {
    if(bungalow === undefined){
      bungalow = ['false', 'true']
    } else bungalow = ['true']

    if(apartament === undefined){
      apartament = ['false', 'true']
    } else apartament = ['true']

    if(house === undefined){
      house = ['false', 'true']
    } else house = ['true']

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
      country: contex.query.country.charAt(0).toUpperCase() + contex.query.country.slice(1),
      region: regiond,
      distance: {$lte: distanced},
      bungalow: {$in: bungalow},
      apartament: {$in: apartament},
      house: {$in: house},
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
      propertiesWork: properties,
    }
  }
}

  