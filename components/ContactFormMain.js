import React from 'react'
import { useState, useRef } from 'react'
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';

export default function ContactFormMain() {


    const [dataForm, setDataForm] = useState({
        Id: "Strona Główna",
        Name:'',
        Phone:'',
        Email:'',
        Message:'',
    })

    const confirmation = useRef();

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
          }
          else {
            console.log('Response failed!')
          }
        })

        confirmation.current.style.display = "block"

        setTimeout(() => {
          confirmation.current.style.display = "none"
        },7000)

      }


      const closeConfirmation = () => {
        confirmation.current.style.display = "none"
      }


  return (
    <div className='relative flex flex-col w-full h-1/2 bg-center bg-cover bg-[url("../components/images/bg-contact.jpeg")]'>
        <div className='absolute w-full h-full bg-red-700/[0.6]'></div>
        <div className='h-10/12 lg:w-[1200px] w-full flex flex-col-reverse lg:flex-row lg:flex py-10 lg:mx-auto'>
              <div className='flex lg:flex-col items-center z-10 lg:w-6/12 w-full justify-center lg:pt-0 pt-24 visible md:hidden'>
                <div className='text-xs lg:text-xs flex flex-col justify-center items-center h-1/2 w-5/12 text-white'>
                    <p className='font-bold'>Siedziba firmy:</p>
                    <p>Onesta Group sp. z o.o.</p>
                    <p>53-148 Wrocław</p>
                    <p>ul. Wolbromska 18/1b</p>
                    <p>NIP: 899 292 23 78</p>
                </div>
                <div className='text-xs lg:text-xl flex flex-col justify-center items-center  h-1/2 w-5/12 text-white'>
                    <p className='font-bold'>Biuro dla klientów:</p>
                    <p>45-706 Opole</p>
                    <p>pl. Piłsudskiego 14/3</p>
                    <div className='w-32 h-4'></div>
                    <p>mail: biuro@onesta.com.pl</p>
                    <p>tel.: + 48 669 75 25 25</p>
                </div>
            </div>
            <div className='w-full lg:w-6/12'>
              
                <form className='relative z-10 lg:flex w-10/12 flex flex-col mx-auto' onSubmit={handleSubmit} method="post">
                <div className=' hidden absolute w-full h-full' ref={confirmation}>
                  <div id="confirmation" className='w-full h-full bg-gray-300 flex flex-col items-center'>
                    <p className='text-black text-5xl text-center mt-20 font-bold'>Wiadomość<br></br>wysłana</p>
                    <MarkEmailReadIcon className='text-green-900 w-3/12 h-3/6'/>
                    <div onClick={closeConfirmation} className='border px-5 py-2 bg-green-900 text-white font-bold rounded-md hover:bg-white hover:text-black hover:border-gray-900 cursor-pointer'>Wróć do strony</div>
                  </div>
                </div>
                    <div className='py-4 font-bold text-2xl text-white'>Napisz do nas:</div>
                    <input className="h-10 my-2 rounded-sm pl-2 placeholder:pl-3" onChange={(e) =>{setDataForm({...dataForm, Name:(e.target.value)})}} type="text" name="name" placeholder='Imię i nazwisko' required></input>
                    <input className="h-12 my-2 rounded-sm pl-2 placeholder:pl-3" onChange={(e) =>{setDataForm({...dataForm, Phone:(e.target.value)})}} type="number" name="phone" placeholder='Numer telefonu' required></input>
                    <input className="h-12 my-2 rounded-sm pl-2 placeholder:pl-3" onChange={(e) =>{setDataForm({...dataForm, Email:(e.target.value)})}} type="text" name="mail" placeholder='Adres email' required></input>
                    <textarea className="h-40 my-2 rounded-sm pl-2 placeholder:p-3" onChange={(e) =>{setDataForm({...dataForm, Message:(e.target.value)})}}  type="text" name='massage' placeholder='Opisz nam czego szukasz i jak mozemy pomóc'></textarea>
                    <div className='flex items-center h-10 w-full'>
                        <input className='w-4 h-4' type="checkbox" name="mail" required></input>
                        <p className='text-xs text-white block ml-2'>Akceptuję regulamin i <a className="underline-offset-1" href="#">politykę prywatności (wymagane)</a></p>
                    </div>
                    <button type="submit" className='bg-white w-56 py-2 mx-auto rounded-md text-gray-900 text-xl duration-300 border-2 border-white font-normal hover:bg-red-700 hover:text-white hover:border-2'>Wyślij</button>
                </form>
            </div>
            <div className='md:flex lg:flex-col items-center z-10 lg:w-6/12 w-full justify-center lg:pt-0 pt-24 hidden md:visible'>
                <div className='text-xs lg:text-lg flex flex-col justify-center items-center h-1/2  text-white'>
                    <p className='font-bold'>Siedziba firmy:</p>
                    <p>Onesta Group sp. z o.o.</p>
                    <p>53-148 Wrocław</p>
                    <p>ul. Wolbromska 18/1b</p>
                    <p>NIP: 899 292 23 78</p>
                </div>
                <div className='text-xs lg:text-lg flex flex-col justify-center items-center h-1/2  text-white'>
                    <p className='font-bold'>Biuro dla klientów:</p>
                    <p>45-706 Opole</p>
                    <p>pl. Piłsudskiego 14/3</p>
                    <div className='w-32 h-4'></div>
                    <p>mail: biuro@onesta.com.pl</p>
                    <p>tel.: + 48 669 75 25 25</p>
                </div>
            </div>
        </div>
    </div>
  )
}
