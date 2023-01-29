import '../styles/globals.css'
import { useState, useContext, createContext} from 'react'
import Script from 'next/script';

export const AppContext = createContext(); 

function MyApp({ Component, pageProps }) {

    const [searchShow,setSearchShow] = useState(false)
    const [aprove, setAprove] = useState(false);
    const [headerAfterFirstView, setHeaderAfterFirstView] = useState(false)
    const [searchConditions, setSearchConditions] = useState([
        {id: 1, name: 'region', value:[]},
        {id: 2, name: 'page', value:'1', isSearching:true},
        {id: 3, name: 'type', value: [
            {isSearching: false, type: "Bungalow"},
            {isSearching: false, type: "Apartament"},
            {isSearching: false, type: "Dom"}
        ]},
        {id: 4, name: 'firstmarket', value:'', isSearching:false},
        {id: 5, name: 'secondarymarket', value: '', isSearching:false},
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
    ])
    const [showSearchComponentsOnMobile,setShowSearchComponentsOnMobile] = useState(false)

    return(
        
        <AppContext.Provider value={{aprove, setAprove, searchShow, setSearchShow, searchConditions, setSearchConditions, headerAfterFirstView, setHeaderAfterFirstView, showSearchComponentsOnMobile,setShowSearchComponentsOnMobile}}>
            <!-- Google tag (gtag.js) -->
                <Script async src="https://www.googletagmanager.com/gtag/js?id=G-P4VZ7P7VZ5"></Script>
                <Script>
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-P4VZ7P7VZ5');
                </Script>
            <Component
                {...pageProps}
            />
            </AppContext.Provider>

    )
}

export default MyApp;
