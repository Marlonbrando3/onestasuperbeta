import {useState, useContext, createContext} from "react";
import { AppContext } from "../../pages/_app";
import {useRouter} from 'next/router';
import SearchComponentsList from "./SearchComponentsList";
import SearchResults from "./SearchResults";

export const SearchEngineContext = createContext();

export default function SearchEngine({
    ActualCountry,
    setActualCountry,
    actualSite,
    setActualSite,
    properties,
    choosedCountry, 
    setChoosedCountry,
    choosedTypes,
    setChoosedTypes,
    sitesArray,
    sitesArraycounter,
}) {
        const router = useRouter();

        const {searchShow,setSearchShow,showSearchComponentsOnMobile,setShowSearchComponentsOnMobile} = useContext(AppContext)

        //a./ll countries, regions, Cities
        const[countries, setCountries] = useState([
        //Poland
        { id:1, nameCountry: "Poland", name: "Mazury", added: false, OnList: true, region: "Mazury 1 (PL)", regionList: false},
        { id:1, nameCountry: "Poland", name: "Mazury", OnList: "deactive", region: "Mazury 2 (PL)", regionList: false},
        { id:1, nameCountry: "Poland", name: "Góry", OnList: "deactive", region: "Góry (PL)", regionList:false},
        { id:1, nameCountry: "Poland", name: "Góry", OnList: "deactive", region: "Góry (PL)", regionList:false},
        { id:1, nameCountry: "Poland", name: "Morze", OnList: "deactive", region: "Morze (PL)", regionList:false},
        { id:1, nameCountry: "Poland", name: "Morze", OnList: "deactive", region: "Morze (PL)", regionList:false},
        //Portugal
        { id:2, nameCountry: "Portugalia", name: "Leiria", added:false, OnList: true, region: "Lagos 1 (PT)", regionList: false},
        { id:2, nameCountry: "Portugalia", name: "Lisboa", OnList: "deactive", region: "Lagos 2 (PT)", regionList: false},
        { id:2, nameCountry: "Portugalia", name: "Setubal", OnList: "deactive", region: "Porto 1 (PT)", regionList: false},
        { id:2, nameCountry: "Portugalia", name: "Beja", OnList: "deactive", region: "Porto 2 (PT)", regionList: false},
        { id:2, nameCountry: "Portugalia", name: "Faro", OnList: "deactive", region: "Lizbona 1 (PT)", regionList: false},
        //Chorwacja
        { id:3, nameCountry: "Chorwacja", name: "Istria", added:false, OnList: true, region: "Dalmacja (CRO)", regionList: false},
        { id:3, nameCountry: "Chorwacja", name: "Kvarner", OnList: "deactive", region: "Hvar (CRO)", regionList: false},
        { id:3, nameCountry: "Chorwacja", name: "Dalmacja PŁ", OnList: "deactive", region: "Brać (CRO)", regionList: false},
        { id:3, nameCountry: "Chorwacja", name: "Dalmacja PŁD", OnList: "deactive", region: "Hvar (CRO)", regionList: false},
        { id:3, nameCountry: "Chorwacja", name: "Dalmacja ŚR", OnList: "deactive", region: "Brać (CRO)", regionList: false},
        //Hiszpania
        { id:4, nameCountry: "Hiszpania", name: "Costa Blanca", added:false, OnList: true,  regionList: true},
        { id:4, nameCountry: "Hiszpania", name: "Costa del Sol", OnList: "deactive",  regionList: true},
        { id:4, nameCountry: "Hiszpania", name: "Costa Dorada", OnList: "deactive",  regionList: true},
        { id:4, nameCountry: "Hiszpania", name: "Costa Brava", OnList: "deactive",  regionList: true},


        ])

        //handling type of property
        const [activeTypeList, setActiveTypeList] = useState(false)

        //handling region of property
        const [activeRegionList, setActiveRegionList] = useState(false)

        //handling prices
        const[applyPrice, setApplyPrice] = useState('');


        //handling bedrooms
        const[applyBed, setApplyBed] = useState(false);

        //handling bathrooms
        const[applyBath, setApplyBath] = useState('');

        //distance to the sea
        const[applySea, setApplySea] = useState('');

        //property details
        const [propDetails, setPropDetails] = useState();

        const [showProp, setShowProp] = useState(false);
    return (
        <>
            <div className={showSearchComponentsOnMobile===false ? "z-10 flex flex-col items-start justify-start transition w-full bg-white" : "h-full -top-full overflow-hidden"}>
                <div className="flex items-center w-full justify-center md:py-4 py-2 bg-white">
                    <p className="text-xs w-11/12 ml-8 font-normal">{router.query.country.charAt(0).toUpperCase() + router.query.country.slice(1)} -  Przeglądasz pośród {properties.length} ogłoszeń.</p>
                </div>
                <div className="flex items-start justify-center w-full pt-4 bg-gray-400/[0.1]">
                    <SearchEngineContext.Provider value={{applyBed, setApplyBed, applyBath, setApplyBath, activeTypeList, applyPrice, setApplyPrice, setActiveTypeList, applySea, setApplySea}}>
                <SearchComponentsList
                    ActualCountry={ActualCountry}
                    setActualCountry={setActualCountry}
                    actualSite={actualSite}
                    setActualSite={setActualSite}
                    choosedCountry={choosedCountry}
                    setChoosedCountry={setChoosedCountry}
                    countries={countries}
                    setCountries={setCountries}
                    activeRegionList={activeRegionList}
                    setActiveRegionList={setActiveRegionList}
                    setChoosedTypes={setChoosedTypes}
                    setActiveTypeList={setActiveTypeList}
                    showSearchComponentsOnMobile={showSearchComponentsOnMobile}
                    setShowSearchComponentsOnMobile={setShowSearchComponentsOnMobile}
                />
                <SearchResults
                    actualSite={actualSite}
                    setActualSite={setActualSite}
                    choosedCountry={choosedCountry}
                    setChoosedCountry={setChoosedCountry}
                    choosedTypes={choosedTypes}
                    properties={properties}
                    propDetails={propDetails}
                    setPropDetails={setPropDetails}
                    showProp={showProp}
                    setShowProp={setShowProp}
                    sitesArray={sitesArray}
                    sitesArraycounter={sitesArraycounter}
                />
                </SearchEngineContext.Provider>
            </div>
        </div>
    </>
    )
}
