import {useState} from "react";
import {useRouter} from 'next/router';
import SearchComponentsList from "./SearchComponentsList";
import SearchResults from "./SearchResults";
import OfferWindow from './OfferWindow';

export default function SearchEngine({
    actualSite,
    setActualSite,
    properties,
    searchShow, 
    setSearchShow, 
    choosedCountry, 
    setChoosedCountry,
    choosedRegion,
    setChoosedRegion,
    choosedTypes,
    setChoosedTypes,
    query,
    setQuery,
    searchConditions,
    setSearchConditions,
    apply,
    setApply,
    newSearch,
    setNewSearch,
    sitesArray,
    sitesArraycounter,
    showSearchComponentsOnMobile,
    setShowSearchComponentsOnMobile
}) {
        const router = useRouter();

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
        const [TypeList, setTypeList] = useState([
            {id:1, type: "Bungalow", onList:true},
            {id:2, type: "Dom", onList:true},
            {id:3, type: "Apartament", onList:true},
        ])

        //handling region of property
        const [activeRegionList, setActiveRegionList] = useState(false)

        //handling prices
        const[priceMin, setPriceMin] = useState('');
        const[priceMax, setPriceMax] = useState('');

        //handling bedrooms
        const[bedMin, setBedMin] = useState('');
        const[bedMax, setBedMax] = useState('');

        //handling bathrooms
        const[bathMin, setBathMin] = useState();
        const[bathMax, setBathMax] = useState();

        //distance to the sea
        const[seaMax, setSeaMax] = useState(6000);

        //property details
        const [propDetails, setPropDetails] = useState();

        const [showProp, setShowProp] = useState(false);

        const handleCloseSearch = () =>{
            setSearchShow(false)
        }

    return (
        <>
            <div className={(searchShow && showSearchComponentsOnMobile===false)? "z-50 flex flex-col items-start justify-start w-full bg-white" : "h-0 overflow-hidden"}>
                <div className="flex items-center justify-center px-20 py-4 bg-white">
                    <h1 className="text-center text-md font-normal">Wyszukiwanie pośród {properties.length} ogłoszeń w kraju {choosedCountry.country}</h1>
                </div>
                <div className="flex items-start justify-center w-full pt-4 bg-gray-900/[0.1]">
                <SearchComponentsList
                    actualSite={actualSite}
                    setActualSite={setActualSite}
                    choosedRegion={choosedRegion}
                    setChoosedRegion={setChoosedRegion}
                    choosedCountry={choosedCountry}
                    setChoosedCountry={setChoosedCountry}
                    searchShow={searchShow}
                    setSearchShow={setSearchShow}
                    countries={countries}
                    setCountries={setCountries}
                    activeRegionList={activeRegionList}
                    setActiveRegionList={setActiveRegionList}
                    TypeList={TypeList}
                    setTypeList={setTypeList}
                    choosedTypes={choosedTypes}
                    setChoosedTypes={setChoosedTypes}
                    activeTypeList={activeTypeList}
                    setActiveTypeList={setActiveTypeList}
                    priceMin={priceMin}
                    setPriceMin={setPriceMin}
                    priceMax={priceMax}
                    setPriceMax={setPriceMax}
                    setBathMax={setBathMax}
                    setBathMin={setBathMin}
                    bedMin={bedMin}
                    bedMax={bedMax}
                    setBedMax={setBedMax}
                    setBedMin={setBedMin}
                    seaMax={seaMax}
                    setSeaMax={setSeaMax}
                    query={query}
                    setQuery={setQuery}
                    searchConditions={searchConditions}
                    setSearchConditions={setSearchConditions}
                    apply={apply}
                    setApply={setApply}
                    newSearch={newSearch}
                    setNewSearch={setNewSearch}
                    showSearchComponentsOnMobile={showSearchComponentsOnMobile}
                    setShowSearchComponentsOnMobile={setShowSearchComponentsOnMobile}
                />
                <SearchResults
                    actualSite={actualSite}
                    setActualSite={setActualSite}
                    choosedCountry={choosedCountry}
                    setChoosedCountry={setChoosedCountry}
                    choosedRegion={choosedRegion}
                    setChoosedRegion={setChoosedRegion}
                    choosedTypes={choosedTypes}
                    properties={properties}
                    priceMin={priceMin}
                    priceMax={priceMax}
                    bedMin={setBedMin}
                    setBedMin={setBedMin}
                    bathMax={bathMax}
                    setBedMax={setBedMax}
                    setBathMax={setBathMax}
                    setBathMin={setBathMin}
                    bedMax={bedMax}
                    seaMax={seaMax}
                    setSeaMax={setSeaMax}
                    propDetails={propDetails}
                    setPropDetails={setPropDetails}
                    showProp={showProp}
                    setShowProp={setShowProp}
                    newSearch={newSearch}
                    setNewSearch={setNewSearch}
                    searchConditions={searchConditions}
                    setSearchConditions={setSearchConditions}
                    sitesArray={sitesArray}
                    sitesArraycounter={sitesArraycounter}
                />
            </div>
        </div>
    </>
    )
}
