import React from 'react'

export default function ContactFormMain() {
  return (
    <div className='relative flex flex-col w-full h-1/2 bg-center bg-cover bg-[url("../components/images/bg-contact.jpeg")]'>
        <div className='absolute w-full h-full bg-white/[0.6]'></div>
        <div className='h-10/12 w-full flex flex-col-reverse lg:flex-row lg:flex py-10'>
            <div className='flex lg:flex-col items-center z-10 lg:w-5/12 w-full justify-center lg:pt-0 pt-24'>
                <div className='text-xs lg:text-xl flex flex-col justify-center items-center h-1/2 w-5/12'>
                    <p className='font-bold'>Siedziba firmy:</p>
                    <p>Onesta Group sp. z o.o.</p>
                    <p>53-148 Wrocław</p>
                    <p>ul. Wolbromska 18b/1</p>
                    <p>NIP: 899 292 23 78</p>
                </div>
                <div className='text-xs lg:text-xl flex flex-col justify-center items-center  h-1/2 w-5/12'>
                    <p className='font-bold'>Biuro dla klientów:</p>
                    <p>45-706 Opole</p>
                    <p>pl. Piłsudskiego 14/3</p>
                    <div className='w-32 h-4'></div>
                    <p>mail: biuro@onesta.com.pl</p>
                    <p>tel.: + 48 669 75 25 25</p>
                </div>
            </div>
            <div className='w-full lg:w-7/12'>
                <form className='relative z-10 lg:flex w-10/12 flex flex-col mx-auto'>
                    <div className='py-4 font-bold text-xl'>Napisz do nas:</div>
                    <input className="h-8 my-2 rounded-md pl-2" type="text" name="name" placeholder='imię i nazwisko' required></input>
                    <input className="h-8 my-2 rounded-md pl-2" type="number" name="phone" placeholder='numer telefonu' required></input>
                    <input className="h-8 my-2 rounded-md pl-2" type="text" name="mail" placeholder='adres email' required></input>
                    <textarea className="h-28 my-2 rounded-md pl-2" type="text" name='massage' placeholder='opisz nam czego szukasz i jak mozemy pomóc'></textarea>
                    <div className='flex items-center h-10 w-full'>
                        <input className='w-6 h-6' type="checkbox" name="mail" required></input>
                        <p className='text-xs block ml-2'>Akceptuję regulamin i <a className="underline-offset-1" href="#">politykę prywatności (wymagane)</a></p>
                    </div>
                    <button className='bg-red-600 w-56 py-2 mx-auto rounded-md text-white text-xl font-bold'>Wyślij</button>
                </form>
            </div>
        </div>
    </div>
  )
}
