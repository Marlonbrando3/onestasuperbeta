import React, { useRef } from 'react'

export default function Signup() {

  const firstnameReg = useRef();
  const lastnameReg = useRef();
  const phoneReg = useRef();
  const emailReg = useRef();
  const passReg = useRef();

  const handleSignUp = (e) => {
    
    const firstname = firstnameReg.current.value
    const lastname = lastnameReg.current.value
    const email = emailReg.current.value
    const phone = phoneReg.current.value
    const pass = passReg.current.value

    e.preventDefault()

    fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstname: firstname,
        lastname: lastname,
        email:email,
        phone:phone,
        pass: pass
      })
    })
  }

  return (
    <form className='bg-gray-100 w-3/12 flex flex-col p-5 mx-auto mt-36'>
      <div className='text-center text-lg pb-5 font-bold'>Uzupełnij dane</div>
        <label id="firstname">Imię *</label>
        <input ref={firstnameReg} name="firstnameReg" type="text" className='border-2 rounded-md mb-3' required></input>
        <label id="lastname">Nazwisko *</label>
        <input ref={lastnameReg} name="lastnameReg" type="text" className='border-2 rounded-md mb-3' required></input>
        <label id="email">Adres e-mail *</label>
        <input ref={emailReg} name="emailReg" type="mail" className='border-2 rounded-md mb-3' required></input>
        <label id="login">Telefon kontaktowy</label>
        <input ref={phoneReg} name="phoneReg" type="number" className='border-2 rounded-md mb-3'></input>
        <label id="pass">Hasło *</label>
        <input ref={passReg} name="pass" className='border-2 rounded-md'></input>
        <button type="submit" onClick={handleSignUp} name="submit" className='mt-6 h-10 bg-green-600 text-white rounded-md font-bold'>Zarejestruj się</button>
        <div className='text-center text-sm mt-3'>Masz już konto? <a href='/account/login' className='text-blue-500 font-semibold'>Zaloguj się</a></div>
    </form>
  )
}