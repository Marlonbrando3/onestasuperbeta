import {useState, useEffect} from 'react'

export default function MainTheme({searchShow}) {

    const [search, setSearch] = useState(["Hiszpanii", "Portugalii", "Chorwacji", "Polsce", "USA", "Tajlandii", "Grecji"])
    const [ActualCountry, setActualCountry] = useState(search[0]);
    const [visible, setVisible] = useState(true);
    let index = 0;

    useEffect(() => {
        setInterval(() => {
            if(index <= 6) {
                setVisible(true)
                setActualCountry(search[index])
                index = index +1
            } else if(index>6) {
                setVisible(true)
                setActualCountry(search[0])
                index = 1
            }
            setTimeout(() => {
                setVisible(false)}, 1600)
        }, 2000);

    },[index])

  return (
    <div className={searchShow ? 'hidden transition duration-500': undefined}>
        <div className='hidden md:block flex flex-col transition absolute text-white lg:top-64 md:top-64 top-44 left-10 h-66 lg:w-1/2 w-full border-yellow-500 lg:border-l-8 border-l-4 z-96 lg:pl-10 pl-1'>
            <p className='lg:text-3xl text-xl'>Znajdź swój wymarzony dom, <br></br>zamieszkaj lub inwestuj w: </p>
            <span className={visible ? "main-country-crousel visible" : " main-country-crousel novisible"}>{ActualCountry}</span>
            <p className='drop-shadow-xl text-md mt-1 w-10/12 lg:w-full'>Jesteśmy agencją nieruchomości specjalizującą się w sprzedazy i dalszym wynajmie nieruchomości. Posiadamy 7 letnie doświadczenie w branzy</p>
        </div>
    </div>
  )
}
