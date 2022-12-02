import '../styles/globals.css'
import { useContext } from 'react'
import { useState } from 'react'
import { CCountry } from '../context/CCountry'

function MyApp({ Component, pageProps }) {

    const [value, setValue] = useState("kolo")

    return(
        <CCountry.Provider value={{value, setValue}}>
            <Component {...pageProps} />
        </CCountry.Provider>
    )
}

export default MyApp
