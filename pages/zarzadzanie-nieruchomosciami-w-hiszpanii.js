import React from 'react'
import { useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Link from 'next/link';
import Footer from '../components/Footer';
//icons
import HandshakeIcon from '@mui/icons-material/Handshake';
import SavingsIcon from '@mui/icons-material/Savings';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import GavelIcon from '@mui/icons-material/Gavel';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ContactFormBlogPost from '../components/ContactFormBlogPost';


export default function Aboutus() {

  const [searchShow, setSearchShow] = useState(true);
  return (
    <>
        <Head>
            <title>Onesta Group</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width, minimum-scale=1, maximum-scale=1" />
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
            <link href="https://fonts.googleapis.com/css2?family=Manjari:wght@100;400;700&family=Nunito+Sans&display=swap" rel="stylesheet"></link>
        </Head>
        <Header
            searchShow={searchShow}
        />
        {/* <MiniHomeView /> */}
        <div className='w-10/12 mx-auto my-20'>

<h1 className='text-2xl font-bold'>Zarządzanie nieruchomościami w Hiszpanii.</h1><br></br>

Artykuł przygotowany dla osób poszukujących apartamentu na sprzedaż w Hiszpanii gdzie zazwyczaj główną intencją jest jego dalszy wynajem w celach zarobkowych. <br></br>

<div className='border my-10 px-2 lg:w-2/3 w-full'>
    <p className='py-2 font-bold text-xl'>Spis treści:</p>
<p className='py-'>1. Czym jest zarządzanie nieruchomości w Hiszpanii?</p>
<p className='py-1'>2. Najlepsze regiony pod kątem zarządzania nieruchomościami w Hiszpanii.</p>
<p className='py-1'>3. Jak działa zarządzanie nieruchomościami w Hiszpanii?</p>
<p className='py-1'>4. Jak rozliczane jest zarządzanie nieruchomościami w Hiszpanii?</p>
<p className='py-1'>5. Rozliczenie i zyski</p>
<p className='py-1'>6. Zależności sezonowe</p>
</div>

<b className='text-xl'>1. Czym jest zarządzanie nieruchomościami w Hiszpanii?</b><br></br><br></br>

Dla osób, które pierwszy raz spotykają się z terminem zarządzanie nieruchomościami w Hiszpanii lub innych krajach wyjaśniamy po krótce model, który jest bardzo prosty i polega na krótko terminowym (średnio 7 dni)  wynajmie zakupionej nieruchomości turystom. Z racji faktu, że wynajem jest dość kosztowny, korzystają z tej formy bardziej zamożni klienci co jest też swoistą gwarancją, że słowni poważni ludzi zawitają w naszej nieruchomości nie zniszczą jej wyposażenia.
Kryteria do spełnienia aby zarządzanie nieruchomością było efektywne.<br></br><br></br>
 
Wcześniejszy krok, polega na mądrym wyborze nieruchomości w Hiszpanii do późniejszego wynajmu pod (więcej o tym jak wybierać w znajdziesz w artykule  <Link href="/jak-kupic-nieruchomosc-w-hiszpanii" className='font-bold text-blue-600 underline'>Jak kupić nieruchomość w Hiszpanii (cz.1 Określ swoje cele) </Link>).  
Przy wyborze opieramy się o kryteria jakie ma spełniać nieruchomość tj. odległość od morza, atuty, liczba danych pomieszczeń itd. Owe kryteria są podyktowane potrzebami rynku i tego czego szukają co cenią i do czego wracają nasi turyści z wiarą iż staną się Oni stałymi lub polecającymi innym naszą nieruchomość klientami.<br></br><br></br>

Rzecz jasna aby ten model zarządzania nieruchomościami w Hiszpanii (od której zaczęliśmy) lub innych krajach z naszego portfolio dział trzeba spełni szereg wymogów i standardów jakościowych, ponieważ promowanie i dbanie nieruchomości oraz jej popularność jest zdecydowanie maratonem niż sprintem. <br></br><br></br>

<b className='text-xl'>2. Najlepsze regiony pod kątem zarządzania nieruchomościami w Hiszpanii</b><br></br><br></br>

Współpracujemy wiele lat z partnerami, którzy otrzymują wyróżnienia na poziomie jakości oraz sprawności zarządzania nieruchomościami w Hiszpanii, zaczynami również procesy zarządzania nieruchomościami w Chorwacji oraz Portugalii. Nasi Hiszpańscy partnerzy bazują  na swoim wieloletnim doświadczeniu dowodząc, że skuteczność potrafi być bardzo wysoka i można zdobyć rynek wysoką jakością nie tylko napompowaną reklamą.<br></br><br></br>

Działamy głównie na wybrzeżu Costa Blanca, rozwijając również bezpiecznie Costa del Sol. Oba regiony są wysoce atrakcyjne jeśli chodzi o inwestowanie, niemniej poszukując apartamentów na sprzedaż w Hiszpanii warto skupić swoją uwagę na tym pierwszym wybrzeżu, czyli nieruchomościach na sprzedaż na Costa Blanca z kilku wyraźnych powodów:<br></br><br></br>
    • stabilniejsza i mniej deszczowa pogoda, która rzadko zawodzi turystów, jest dla Nich bezpieczniejsza dlatego klienci cześciej wracają na Costa Blanca,<br></br>
    • niże ceny apartamentów o średnio ok 30% w porównaniu do Costa del Sol,<br></br>
    • ceny życia na Costa del Sol są wyższe średnio 19% w porównaniu do Costa Blanca,<br></br>
    • region jest stabilny i „doświadczony” przez wiele lat zarządzania.<br></br><br></br>

To są główne atuty i jeśli myślimy inwestowaniu w sposób bezpieczny i oparty o wiele przećwiczonych sytuacji Costa Blanca jest idealna. Wielu naszych klientów szuka jednak czegoś w klimatach bardziej zielonych, kolorowych i wtedy Marbella, Estepona (Costa del Sol) są często spełnieniem ich marzeń w te regiony także zapraszamy. Popularność jednego i drugiego jest ogromna, a różnice głównie w osobistych zamiłowaniach oraz w zamożności klientów, Costa del Sol jest tą droższą opcją.<br></br><br></br>

<b className='text-xl'>3. Jak działa zarządzanie nieruchomościami w Hiszpanii?</b><br></br><br></br>

Firma, która podejmuje się zarządzania naszą nieruchomością jest odpowiedzialna ogólnie rzecz biorąc za przygotowanie nieruchomości oraz „wymianę gości” zatem:<br></br><br></br>

    • umeblowanie nieruchomości po jej zakupie,<br></br>
    • każdorazowe przygotowanie lokalu na przyjęcia gości,<br></br>
    • sprzątanie lokalu tj. serwis, pranie, wszelkie mycie oraz przygotowanie pakietów startowych dla kolejnych gości,<br></br>
    • przyjęcie i rejestracja gości,<br></br>
    • krótki ale ważny instruktaż i omówienie dobrych i skutecznych praktyk w ew. sytuacjach awaryjnych,<br></br>
    • wymeldowanie gości.<br></br><br></br>

Cały proces ma gwarantować sprawne i rzeczowe reagowanie, gwarantować komfort, a cały system ma być dla gości bezproblemowy zakończony pozytywną opinią o nieruchomości, dalszymi poleceniami oraz rekomendacjami. To właśnie z rekomendacji pochodzi aż 70% klientów wynajmujących, a jest to efektem skrupulatnych i długoterminowych działań Naszych Partnerów.<br></br><br></br>

<b className='text-xl'>4. Jak rozliczane jest zarządzanie nieruchomościami w Hiszpanii?</b><br></br><br></br>

Najlepiej wyjaśnić to na przykładzie pochodzącym od naszych partnerów z naszym delikatnym komentarzem jak przystało na wpisy blogowe.<br></br><br></br>

4.1 <b>Koszty właściciela:</b><br></br><br></br>
&nbsp; 4.1.1 <b>Usługa zarządzania nieruchomością 16% plus VAT</b> - (podatek w Hiszpanii wynosi 21%, czyli brutto 19,36%) od kwoty wynajmu w skład tego wchodzą:<br></br>
     &nbsp;&nbsp;  • szeroko pojęta promocja nieruchomości,<br></br>
     &nbsp;&nbsp;  • obsługa portalów - własnego dedykowanego oraz typu Booking, Airbnb, <br></br>
     &nbsp;&nbsp;  • dodatkowe, płatne działania marketingowe i promujące,<br></br>
     &nbsp;&nbsp;  • pakiety startowe dla gości,<br></br>
     &nbsp;&nbsp;  • obsługa rezydenta w godzinach 10-18 oraz alarmowa bezpłatna pomoc w pozostałej części doby.<br></br><br></br>
     &nbsp;&nbsp;  4.1.2 <b>Serwis rezydenta</b> – dojazd do obiektu zakwaterowanie oraz wykwaterowanie gości średnio 85 euro,<br></br>
     &nbsp;&nbsp;  4.1.3 <b>Prowizja za system płatności 3,5%,</b><br></br>
     &nbsp;&nbsp;  4.1.4 <b>Dodatkowa opłata za sprzątanie w przypadku wizyty 8 osób.</b><br></br><br></br>

4.2 <b>Koszty Gościa, kwota, jest doliczona do ceny wynajmu:</b><br></br><br></br>
&nbsp;&nbsp;  4.2.1 <b>Sprzątanie</b>  – ok.138 euro za pobyt(kwota doliczona do ceny całkowitej najmu).<br></br>
&nbsp;&nbsp;  4.2.2 <b>Opłata serwisowa</b> – 78 euro koszty sprzątania, mycie, prania w skrócie przygotowanie nieruchomości dla następnych gości.<br></br><br></br>

4.3 <b>Przykładowe rozliczenie:</b><br></br><br></br>

	<b>Kwota całkowita wynajmu za okres 10 dni:</b> 1900 euro,<br></br>
	<b>System płatniczy (3,5%):</b> 1700 euro  * 0,035 = 59,5 euro,<br></br>
	<b>Podstawa do rozliczenia prowizji:</b> 1700 – 59,5 euro =  1640,50 euro,<br></br>
	<b>Prowizja (16%):</b> 1640,50 euro * 0,16 = 272 euro * 1,21 (podatek) = 329, 12 euro.<br></br><br></br>
    <b>Koszty sprzątania oraz serwisu:</b> 217 euro (są  doliczone do kwoty najmu na portalach) – są one refakturowane na firmę zarządzająca przez właściciela, pomniejszą przychód przez co podatek dochodowy,<br></br>
    <b>Koszty rezydenta: </b>85 euro  (są kosztem właściciela).<br></br><br></br>

    <b className='text-xl'>5. Rozliczenie i zyski</b><br></br><br></br>

    <b>Przychód:</b> 1900 euro,<br></br>
    <b>Koszty łącznie:</b> 685 euro,<br></br>
    <b>Dochód:</b> 1215 euro,<br></br>
    <b>Zysk (po odliczeniu podatku): </b>984,15 euro za 10 dni wynajmu, czyli ok 4500 zł.<br></br><br></br>

    Zysk roczny biorąc pod uwagę owe zmienne to 7% netto (po wszystkich stałych opłatach i prowizjach) liczony kwoty nieruchomości również netto.<br></br><br></br>

<b>Przykład 200 000 euro netto (kwota nieruchomości) * 0,07 = 14 000 euro netto (na rękę) zysku.<br></br>
Co daje ok 64 500 zł zarobku rocznie.</b><br></br><br></br>

<b className='text-xl'>6. Zależności sezonowe</b><br></br><br></br>

Ceny wynajmu uzależnione są od okresu roku. W sezonie wysokim (lipiec, sierpień) te kwoty są najwyższe. W miarę zbliżania się do owego sezonu ceny rosną, w miarę oddalania się od owego – ceny maleją. W okresach poza sezonem nieruchomości wynajmowane są lokalnym nieco bardziej zamożnym Hiszpanom (65 % klientów to Hiszpanie), którzy chcą spędzić zimę bliżej morza. W sezonie ceny wynajmu są ok 2,5 - krotnie wyższe niż w okresie zimy.<br></br><br></br>

W sezonie niskim (czerwiec i wrzesień) oraz wysokim (lipiec  i sierpień) obłożenie jest bliskie 100% - zależy to od regionu i znów gdy oddalamy się od tego okresu zaczyna ono wyraźnie spadać. Trudno oszacować dokładnie jak będzie ono wyglądało uśrednione w skali roku ponieważ  zmiennych wpływających jest bardzo dużo. Niektóre obiekty – choć sporadycznie – cieszą się obłożeniem nawet 100% w roku, raczej powinniśmy przyjąć średnio 60% rocznie, jak będzie więcej to będzie to dobrym powodem do radości.<br></br><br></br>


W trakcie użytkowania lokalu mogą i prędzej czy później pojawią się dodatkowe koszty występujące dość naturalnie  - napraw, wymian zużytych np. pościeli lub odświeżenia lokalu itp. które stanowią koszt dodatkowy/alternatywny w owej inwestycji.<br></br><br></br>
        </div>
        <ContactFormBlogPost temat="Zakładka - Zarządanie nieruchomościamu"/>
        <br></br><br></br>
        <Footer />
    </>
  )
}