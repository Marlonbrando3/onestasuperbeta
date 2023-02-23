import React from 'react'
// import multer from 'multer'

export default function AdminInputs() {
  return (
    <form action="/properties" method="POST" className='flex flex-col w-10/12 mx-auto' enctype="multipart/form-data">
        <label id="id">Numer oferty (nadany automatycznie)</label>
        <input className="inputs-add-property" name="id" value="id" readonly></input>

        <label id="country" className="inputs-add-property-label">Kraj</label>
        <select className="inputs-add-property" name="country">
            <option value="Hiszpania">Hiszpania</option>
            <option value="Portugalia">Portugalia</option>
            <option value="Chorwacja">Chorwacja</option>
        </select>

        <label id="region" className="inputs-add-property-label">Region</label>
        <input className="inputs-add-property" name="region"></input>

        <label id="city" className="inputs-add-property-label">Miasto</label>
        <input className="inputs-add-property" name="city"></input>

        <label id="favorites" className="inputs-add-property-label">Wyróżniona?</label>
        <select className="inputs-add-property" name="favorites">
            <option value="true">Tak</option>
            <option value="false">Nie</option>
        </select>

        <label id="country" className="inputs-add-property-label">Polecana na stronie gównej?</label>
        <select className="inputs-add-property" name="addtohomeview" >
            <option value="true">Tak</option>
            <option value="false">Nie</option>
        </select>

        <label id="title" className="inputs-add-property-label">Tytuł na portal</label>
        <input className="inputs-add-property" name="title"></input>

        <label id="market" className="inputs-add-property-label">Rynek</label>
        <select className="inputs-add-property" name="market" >
            <option value="First">Pierwotny</option>
            <option value="Second">Wtórny</option>
        </select>

        <label id="type" className="inputs-add-property-label">Typ</label>
        <select className="inputs-add-property" name="type">
            <option value="Dom">Dom</option>
            <option value="Apartament">Apartament</option>
            <option value="Bungalow">Bungalow</option>
        </select>

        <label id="seaview" className="inputs-add-property-label">Widok na morze</label>
        <select className="inputs-add-property" name="seaview">
            <option value="true">Tak</option>
            <option value="false">Nie</option>
        </select>

        <label id="firstline" className="inputs-add-property-label">Pierwsza linia brzegowa</label>
        <select className="inputs-add-property" name="firstline">
            <option value="true">Tak</option>
            <option value="false">Nie</option>
        </select>

        <p className="pt-5 font-bold text-2xl">O Nieruchomości:</p>

        <label id="bathrooms" className="inputs-add-property-label">Łazienki</label>
        <input className="inputs-add-property" name="bathrooms"></input>


        <label id="bedrooms" className="inputs-add-property-label">Sypilanie</label>
        <input className="inputs-add-property" name="bedrooms"></input>


        <label id="pool" className="inputs-add-property-label">Basen</label>
        <select className="inputs-add-property" name="pool">
            <option value="true">Tak</option>
            <option value="false">Nie</option>
        </select>

        <label id="garden" className="inputs-add-property-label">Ogród</label>
        <select className="inputs-add-property" name="garden">
            <option value="true">Tak</option>
            <option value="false">Nie</option>
        </select>

        <label id="parking" className="inputs-add-property-label">Parking</label>
        <select className="inputs-add-property" name="parking">
            <option value="true">Tak</option>
            <option value="false">Nie</option>
        </select>

        <label id="solarium" className="inputs-add-property-label">Solarium</label>
        <select className="inputs-add-property" name="solarium">
            <option value="true">Tak</option>
            <option value="false">Nie</option>
        </select>

        <label id="sauna" className="inputs-add-property-label">Sauna</label>
        <select className="inputs-add-property" name="sauna">
            <option value="true">Tak</option>
            <option value="false">Nie</option>
        </select>

        <label id="taras" className="inputs-add-property-label">Taras</label>
        <select className="inputs-add-property" name="taras">
            <option value="true">Tak</option>
            <option value="false">Nie</option>
        </select>

        <label id="balcony" className="inputs-add-property-label">Balkon</label>
        <select className="inputs-add-property" name="balcony">
            <option value="true">Tak</option>
            <option value="false">Nie</option>
        </select>

        <label id="price" className="inputs-add-property-label">Cena</label>
        <input className="inputs-add-property" name="price"></input>

        <label id="distance" className="inputs-add-property-label">Do plazy/morza</label>
        <input className="inputs-add-property" name="distance" type="text"></input>

        <label id="localization" className="inputs-add-property-label">Lokalizacja(link google)</label>
        <input className="inputs-add-property" name="localization"></input>

        <label id="meters" className="inputs-add-property-label">Powierznia obiektu</label>
        <input className="inputs-add-property" type="number" name="powierzchnia"></input>
        
        <label id="owner" className="inputs-add-property-label">Źródło</label>
        <input className="inputs-add-property" name="owner" type="text"></input>

        <label id="description" className="inputs-add-property-label">Opis nieruchomości</label>
        <textarea className="inputs-add-property-textarea h-40"name="description"></textarea>

        <label id="PropImages" className="inputs-add-property-label">Zdjęcia</label>
        <input type="file"  name="PropImages"></input>

        <button>Add property</button>
    </form>
  )
}
