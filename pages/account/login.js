import React, { useRef } from 'react'

export default function Login() {

  const emailRef = useRef();
  const passRef = useRef();

  const handleLogin = (e) => {

    e.preventDefault()

    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: emailRef.current.value,
        pass: passRef.current.value
      })
    })
  }

  return (
    <form className='bg-gray-100 w-3/12 flex flex-col p-5 mx-auto mt-52' href={'/admin'}>
      <div className='text-center text-lg pb-5 font-bold'>Logowanie</div>
        <label id="login">Adres e-mail</label>
        <input ref={emailRef} name="emailRef" type="mail" className='border-2 rounded-md mb-3 h-10'></input>
        <label id="pass">Hasło</label>
        <input ref={passRef} name="passRef" className='border-2 rounded-md h-10'></input>
        <button type="submit" onClick={handleLogin} name="submit" className='mt-6 h-10 bg-green-600 text-white rounded-md font-bold'>Zaloguj się</button>
        <div className='text-center text-sm mt-3'>Nie masz konta? <a href='/account/signup' className='text-blue-500 font-semibold'>Zarejestruj się</a></div>
    </form>
  )
}
