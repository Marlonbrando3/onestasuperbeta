import React from 'react'
import { useState } from 'react'

export default function ContactForm({propertyId}) {

const [dataForm, setDataForm] = useState({
    Id: propertyId,
    Name:'',
    Phone:'',
    Email:'',
    Message:'',
})

const handleSubmit = (e) => {
  e.preventDefault()
  console.log('Sending')

  fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dataForm)
  }).then((res) => {
    console.log('Response received')
    if (res.status === 200) {
      console.log('Response succeeded!')

      setDataForm({
        Name:e.target.value,
        Phone:e.target.value,
        Email:e.target.value,
        Message:e.target.value,
      }
      )
    }
  })
}

  return (
    <div className=' lg:flex w-full bg-slate-900/[0.9] mx-1 px-2 lg:px-10 rounded-md mt-1 lg:w-full lg:mx-auto'>
        <form className='flex flex-col lg:w-full lg:p-7 p-7' onSubmit={handleSubmit}>
            <div className='py-4 font-bold text-2xl text-white'>Zadaj nam pytanie:</div>
              <p className='py-2 font-bold text-white'>Ogłoszenie o nr ref. <input className='bg-gray-900/[0.0]' type="text" value={propertyId} name="id"></input></p>
              {/* <label id="name">Imię i naziwsko</label> */}
              <input className="cf-input-property-card pl-2 py-1" onChange={(e) =>{setDataForm({...dataForm, Name:(e.target.value)})}}  type="text" name="name" placeholder='Imię i nazwisko' required></input>
              {/* <label id="phone">Numer telefonu</label> */}
              <input className="cf-input-property-card pl-2 py-1" onChange={(e) =>{setDataForm({...dataForm, Phone:(e.target.value)})}} type="number" name="phone" placeholder='Numer telefonu'></input>
              {/* <label id="mail">Adres e-mail</label> */}
              <input className="cf-input-property-card pl-2 py-1" onChange={(e) =>{setDataForm({...dataForm, Email:(e.target.value)})}} type="email" name="mail" placeholder='Email' required></input>
              {/* <label id="massage">Wiadomość</label> */}
              <textarea className="cf-input-property-card pl-2 pt-1" onChange={(e) =>{setDataForm({...dataForm, Message:(e.target.value)})}} type="text" name='massage' placeholder='Wiadomość'></textarea>
              <div className='checkbox flex my-2'>
                  <input className='w-6 h-6' type="checkbox" name="mail" required></input>
                  <p className='block ml-2 text-white'>Akceptuję regulamin i <a className="underline-offset-1" href="#">politykę prywatności (wymagane)</a></p>
              </div>
            <button type="submit" className='bg-red-600 w-full rounded-md py-2 text-white'>Wyślij</button>
        </form>
</div>
  )
}