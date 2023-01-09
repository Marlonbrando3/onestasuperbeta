import React from 'react'
import { useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import MiniHomeView from '../components/SearchEngine/MiniHomeView';
import ContactFormMain from '../components/ContactFormMain';
import Footer from '../components/Footer';
//icons
import HandshakeIcon from '@mui/icons-material/Handshake';
import SavingsIcon from '@mui/icons-material/Savings';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import GavelIcon from '@mui/icons-material/Gavel';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';


export default function Aboutus() {

  const [searchShow, setSearchShow] = useState(true);
  return (
    <>
        <Head>
            <title>Onesta Group</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width, minimum-scale=1, maximum-scale=1" />
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
            <link href="https://fonts.googleapis.com/css2?family=Manjari:wght@100;400;700&family=Nunito+Sans&display=swap" rel="stylesheet"></link>
        </Head>
        <Header
            searchShow={searchShow}
        />
        <MiniHomeView />
        <div className='bg-gray-900/[0.0]'>
            <div className='flex flex-col w-10/12 mx-auto justify-evenly'>
                <p className='w-10/12 mx-auto text-center text-2xl font-semibold py-10'>Onesta Group - agencja inna niz wszystkie</p>
                <div className='w-8/12 mx-auto h-1 bg-red-900'></div>
                <p className='w-10/12 mx-auto text-lg leading-7 py-10'>Jesteśmy grupą ludzi, których pasją są dalekie i ciepłe kraje oraz rynek nieruchomości. Firma powstała z chęci uczynienia życia naszych klientów przyjemniejszym. <br></br><br></br>
                Na rynku nieruchomości działamy od 4 lat wraz ze sprawdzonymi partnerami w każdym z krajów posiadających również wieloletnie doświadczenie oraz wyspecjalizowanych w dziedzinach niezbędnych do odpowiedniego wyszukiwania, realizowana procesu zakupu oraz dalszego wynajmu (jeśli taka jest wola klienta).
                Naszym celem jest bycie prawdziwymi doradcami, znającymi rynek i ciągle doszkalającymi się. Chcemy i dzielimy się wiedzą na rzecz naszych przyszłych klientów, chcemy móc odradzić jeśli decyzja zakupowa może nie być korzystna.<br></br><br></br>
                Stawiamy na relacyjność w sprzedaży i chcemy aby to nas wyróżniało na rynku. Nie wywieramy presji, jesteśmy uczciwi, staramy się dobrze planować kolejne kroki aby żadna ze stron nie czuła się niekomfortowo.
                Zapraszamy do sprawdzenia jak nam to wychodzi. <br></br><br></br>Możemy zrealizować dla Ciebie procesy zakupowe oraz zarządzanie nieruchomością w krajach: Polska, Hiszpania, Portugalia, Chorwacja, Cypr, Dubaj
                </p>
            </div>
            <MiniHomeView />
            <div className='flex flex-col w-10/12 mx-auto'>
                <div className='flex w-full'>
                    <p className='w-full text-center text-3xl font-bold py-10'>Jak działamy?</p>
                </div>
                <div className='w-full flex flex-wrap justify-between items-center '>
                    <div className='element-how-we-work-container'>
                        <div className='element-how-we-work-container-in'>
                            <p className='element-how-we-work-container-in-p'>1. Rozmowa i poznanie intencji klienta</p>
                            <p className='element-how-we-work-container-in-desc'>Chcemy jak najdokładniej zrozumieć w jakim momecie jest nasz potencjalny, klient, jak proces zakupowy został (lub nie) zaplanowany </p>
                        </div>
                    </div>
                    <div className='element-how-we-work-container'>
                        <div className='element-how-we-work-container-in'>
                            <p className='element-how-we-work-container-in-p'>2. Propozycje nieruchomości</p>
                            <p className='element-how-we-work-container-in-desc'>Chcemy jak najdokładniej zrozumieć w jakim momecie jest nasz potencjalny, klient, jak proces zakupowy został (lub nie) zaplanowany </p>
                        </div>
                    </div>
                    <div className='element-how-we-work-container'>
                        <div className='element-how-we-work-container-in'>
                            <p className='element-how-we-work-container-in-p'>3. Prezentacje wybranych nieruchomości</p>
                            <p className='element-how-we-work-container-in-desc'>Na tym etapie praktycznie zawsze spotykamy się z naszym klientem w Hiszpanii. Planując wcześniej 1 lub 2 dni pokazujemy moliwe jak najbardziej dopasowane nieruchomości </p>
                        </div>
                    </div>
                    <div className='element-how-we-work-container'>
                        <div className='element-how-we-work-container-in'>
                            <p className='element-how-we-work-container-in-p'>4. Realizacja procesu sprzedaży</p>
                            <p className='element-how-we-work-container-in-desc'>Po decyzji zakupowej w pierwym kroku mamy rezerwację nieruchomości z płatnym depozytem w kwocie 3000 - 10000 euro w przypadku inwestycji deweloperskiej. Zaczynamy równiez (w rz) </p>
                        </div>
                    </div>
                    <div className='element-how-we-work-container'>
                        <div className='element-how-we-work-container-in'>
                            <p className='element-how-we-work-container-in-p'>5. Prezetnacje wybranych nieruchomości</p>
                            <p className='element-how-we-work-container-in-desc'>Chcemy jak najdokładniej zrozumieć w jakim momecie jest nasz potencjalny, klient, jak proces zakupowy został (lub nie) zaplanowany </p>
                        </div>
                    </div>
                    <div className='element-how-we-work-container'>
                        <div className='element-how-we-work-container-in'>
                            <p className='element-how-we-work-container-in-p'>6. Prezetnacje wybranych nieruchomości</p>
                            <p className='element-how-we-work-container-in-desc'>Chcemy jak najdokładniej zrozumieć w jakim momecie jest nasz potencjalny, klient, jak proces zakupowy został (lub nie) zaplanowany </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col w-10/12 mx-auto my-20 '>
                <div className='flex flex-col justify-evenly w-full h-full'>
                    <p className='text-center text-3xl text-gray-900 font-bold py-10'>Nasze kompetencje</p>
                </div>
                <div className='w-full h-full flex flex-wrap'>
                    <div className=' flex justify-start items-center xl:w-1/3 sm:w-1/2 w-full h-1/2 sm:py-2 py-5'>
                        <HandshakeIcon className='w-16 h-16 pr-2' />
                        <p className='text-xl'>Relacyjna/partnerska <br></br>obsługa klienta</p>
                    </div>
                    <div className=' flex justify-start items-center xl:w-1/3 sm:w-1/2 w-full h-1/2 sm:py-2 py-5'>
                        <SavingsIcon className='w-16 h-16 pr-2' />
                        <p className='text-xl'>Pomagamy uzyskać <br></br>kredyt w banku</p>
                    </div>
                    <div className=' flex justify-start items-center xl:w-1/3 sm:w-1/2 w-full h-1/2 sm:py-2 py-5'>
                        <GTranslateIcon className='w-16 h-16 pr-2' />
                        <p className='text-xl'>Tłumacz<br></br>przysięgły</p>
                    </div>
                    <div className=' flex justify-start items-center xl:w-1/3 sm:w-1/2 w-full h-1/2 sm:py-2 py-5'>
                        <GavelIcon className='w-16 h-16 pr-2' />
                        <p className='text-xl'>Wsparcie<br></br>prawne</p>
                    </div>
                    <div className=' flex justify-start items-center xl:w-1/3 sm:w-1/2 w-full h-1/2 sm:py-2 py-5'>
                        <MapsHomeWorkIcon className='w-16 h-16 pr-2' />
                        <p className='text-xl'>Współpraca z<br></br>deweloperami i</p>
                    </div>
                    <div className=' flex justify-start items-center xl:w-1/3 sm:w-1/2 w-full h-1/2 sm:py-2 py-5'>
                        <SupportAgentIcon className='w-16 h-16 pr-2' />
                        <p className='text-xl'>Agenci na<br></br>miejscu</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-10/12 mx-auto'>
            <ContactFormMain />
        </div>
        <Footer />
    </>
  )
}
