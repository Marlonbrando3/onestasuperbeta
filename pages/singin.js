import React, { useRef } from 'react'

export default function singin() {

    
  const name = useRef();
  const login = useRef();
  const pass = useRef();

  return (
    <form className='bg-gray-100 w-3/12 flex flex-col p-5 mx-auto mt-52'>
      <div className='text-center text-lg pb-5 font-bold'>Załóż konto</div>
        <label id="login">Imię i nazwisko</label>
        <input ref={name} name="login" type="text" className='border-2 rounded-md mb-3'></input>
        <label id="login">Adres e-mail</label>
        <input ref={login} name="login" type="mail" className='border-2 rounded-md mb-3'></input>
        <label id="login">Telefon kontaktowy</label>
        <input ref={login} name="login" type="number" className='border-2 rounded-md mb-3'></input>
        <label id="pass">Hasło</label>
        <input ref={pass} name="pass" className='border-2 rounded-md'></input>
        <button type="submit" name="submit" className='mt-6 h-10 bg-green-600 text-white rounded-md font-bold'>Zaloguj się</button>
        <div className='text-center text-sm mt-3'>Masz już konto? <a href='#' className='text-blue-500 font-semibold'>Zaloguj się</a></div>
    </form>
  )
}