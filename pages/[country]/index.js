import { useState, useEffect, useContext, createContext} from 'react'
import Head from 'next/head'
import Script from 'next/script'
import {useRouter} from 'next/router'
import MiniHomeView from '../../components/SearchEngine/MiniHomeView'
import Header from '../../components/Header'
import SearchEngine from '../../components/SearchEngine/SearchEngine'
// import Property from '../../model/propertymodel'
// import db from '../../utils/db'
import Applychanges from '../../components/SearchEngine/Applychanges'
import Footer from '../../components/Footer'
import ContactFormMain from '../../components/ContactFormMain'
import DataCountry from '../../data/DataCountry.json'
import { AppContext } from '../_app'

export const CountryIndexContext = createContext();

export default function Home(
  {propertiesFromBase, rawResales, rawdata}
  ) {
  const router = useRouter();

  const [country, setCountry] = useState();

  // console.log(propertiesFromBase)
  // console.log(rawResales.Property)

  // let properties = []
  let propertiesNumber = 0

  // const addinfo = async() => {
  //   const data = await propertiesWork
  //   const propertiesWithSites = await data.map((property, index) => {
  //       if(index+1 <= lastPropertyOnSite){
  //         return{
  //           ...property,
  //           page: siteNumber
  //         }
  //       }
  //       if(index+1 === lastPropertyOnSite+1){
  //           sitesArraycounter.push(1)
  //           siteNumber = siteNumber + 1,
  //           lastPropertyOnSite = lastPropertyOnSite + propertiesOnSite
  //             return{
  //             ...property,
  //             page: siteNumber,
  //           }
  //       } else return {...property}
  //       }
  //       )
  //           properties = propertiesWithSites.filter(p => p.page === parseInt(router.query.page)),
  //           propertiesNumber = propertiesWithSites.length
  
  //   }

      // let properties = propertiesWithSites
    const [sitesArray, setSitesArray] = useState(['1','1','1']);

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

  //actual active site
  const [actualSite, setActualSite] = useState(1)

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
  let lastPropertyOnSite = 10;
  let sitesArraycounter = [1];

  const properties = rawResales
  // console.log(properties)

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
          <meta property="Nieruchomości w Hiszpanii, Chorwacji, Portugalii" content="image" />
          <meta property="og:image" content="https://onesta.com.pl/onesta_og_img.png" />
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
        propertiesNumber={propertiesNumber}
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

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: false, // can also be true or 'blocking'
  }
}

export async function getStaticProps (contex) {

    const actualcountry = contex.params.country

    let propsAPIresales  = []
    let rawdata = []

    // const type = await fetch('https://webapi.resales-online.com/V6/SearchPropertyTypes?p_agency_filterid=4&p1=1029100&p2=de5106e6bb273174de88dc458849c9a06a7b9749&P_sandbox=true&')
    // rawdata = await type.json()

    if(actualcountry === "hiszpania"){
      const DatafromResales = await fetch('https://webapi.resales-online.com/V6/SearchProperties?p_agency_filterid=4&p1=1029100&p2=de5106e6bb273174de88dc458849c9a06a7b9749&P_sandbox=true&P_Beds=1&P_Beds=2&P_PropertyTypes=1-1,2-1&P_PageSize=20')

      const data = await DatafromResales.json()
      rawdata = data
      propsAPIresales = await data.Property.map((p, key) => {
        return {
          id:p. Reference,
          title:`Apartament w Hiszpanii`,
          country: "Hiszpania",
          region: p.Area,
          type: p.PropertyType.Type,
          bedrooms:parseInt(p.Bedrooms),
          bathrooms:parseInt(p.Bathrooms),
          parking:true,
          market:"second",
          solarium:true,
          garden: true,
          pool:true,
          sauna:false,
          taras:false,
          balcony:true,
          price: parseInt(p.Price),
          description:p.Description,
          image:p.Pictures.Picture.map(p => {
            return p.PictureURL
          })
        }
      })} else propsAPIresales = []

      // const databeta = await props
      
      // const Resales = await databeta.map((property, index) => {
      //   if(index+1 <= lastPropertyOnSite){
      //     return{
      //       ...property,
      //       page: siteNumber
      //     }
      //   }
      //   if(index+1 === lastPropertyOnSite+1){
      //       sitesArraycounter.push(1)
      //       siteNumber = siteNumber + 1,
      //       lastPropertyOnSite = lastPropertyOnSite + propertiesOnSite
      //         return{
      //         ...property,
      //         page: siteNumber,
      //       }
      //   } else return {...property}
      //   }
      //   )

        // const MainDB = await propertiesMainDB.map((property, index) => {
        //   console.log(propertiesMainDB)
        //   if(index+1 <= lastPropertyOnSite){
        //     return{
        //       ...property,
        //       page: siteNumber
        //     }
        //   }
        //   if(index+1 === lastPropertyOnSite+1){
        //       sitesArraycounter.push(1)
        //       siteNumber = siteNumber + 1,
        //       lastPropertyOnSite = lastPropertyOnSite + propertiesOnSite
        //         return{
        //         ...property,
        //         page: siteNumber,
        //       }
        //   } else return {...property}
        //   }
        //   )

      //     console.log(router.query.country)

      //     // return MainDB
      //     if(router.query.country == "hiszpania"){
      //       return MainDB.concat(Resales)
      //     }
      //       return MainDB
      //       // properties = propertiesWithSites.filter(p => p.page === parseInt(router.query.page)),
      //       // propertiesNumber = propertiesWithSites.length
      // }

  // if(actualcountry !== "hiszpania" && actualcountry !== "portugalia" && actualcountry !== "chorwacja"){
  //   return {
  //     notFound:true
  //   }
  // }

  // // console.log("im in get props")
  // // await db.connect();
  // // console.log("connected with DB")

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

  // //searching for distance
  // let datadistance = contex.query.distance
  // let distanced;

  // //searching for regions, types, distance
  // let countRegions = () => {

  //   if(dataregion === undefined){
  //     regiond = ['Costa Blanca','Costa del Sol','Costa Brava','Costa Dorada',"PT Północna", "PT Centralna", "Alentejo", "Algavre", "Lisbona",'Istria', 'Kvarner', 'Dalmacja PŁ', 'Dalmacja PŁD', 'Dalmacja ŚR'];
  //   } else regiond = contex.query.region

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

  // let bungalow = contex.query.bungalow
  // let apartament = contex.query.apartament
  // let house = contex.query.house
  // let pool = contex.query.pool
  // let garden = contex.query.garden
  // let seaview = contex.query.seaview
  // let parking = contex.query.parking
  // let solarium = contex.query.solarium
  // let balcony = contex.query.balcony

  // let TrueOrFalse = () => {
  //   if(bungalow === undefined && apartament === undefined && house === undefined) {
  //     apartament = 'apartment'
  //     house = 'house'
  //   } else {

  //   if(apartament === undefined){
  //     apartament = ''
  //   } else apartament = 'apartment'

  //   if(house === undefined){
  //     house = ''
  //   } else house = 'house'
  //   }

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


  // const results = await Property.find({
  //     country: contex.query.country.charAt(0).toUpperCase() + contex.query.country.slice(1),
  // });

  // const properties = JSON.parse(JSON.stringify(results))
  console.log(propsAPIresales)

  // const database = properties.concat(propsAPIresales)
  
  return {
    props:{
      rawData:rawdata,
      rawResales: propsAPIresales,
      // propertiesFromBase: database,
    }
  }
}