import '../styles/globals.css'
import { useState } from 'react'

function MyApp({ Component, pageProps }) {

    const [searchShow,setSearchShow] = useState(false)
    const [showSearchComponentsOnMobile,setShowSearchComponentsOnMobile] = useState(false)

    return(

            <Component 
                {...pageProps}
                setSearchShow={setSearchShow}
                searchShow={searchShow}
                showSearchComponentsOnMobile={showSearchComponentsOnMobile}
                setShowSearchComponentsOnMobile={setShowSearchComponentsOnMobile}
            />

    )
}

export default MyApp
