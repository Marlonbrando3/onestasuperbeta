import React from 'react'

export default function login() {
  return (
    <div className='bg-gray-100 border w-3/12 flex flex-col p-5 mx-auto mt-52'>
      <div className='text-center text-lg pb-5 font-bold'>Logowanie</div>
        <label id="login">Login</label>
        <input name="login" className='border-2 rounded-md mb-3'></input>
        <label id="pass">Hasło</label>
        <input name="pass" className='border-2 rounded-md'></input>
        <button type="submit" name="submit" className='mt-6 h-10 bg-green-600 text-white rounded-md font-bold'>Zaloguj się</button>
    </div>
  )
}
