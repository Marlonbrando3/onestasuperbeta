import React from 'react'

export default function ContactForm({propertyId}) {

// const nodemailer = require('nodemailer');

// const transporter = nodemailer.createTransport({
//   service: 'lh.pl',
//   auth: {
//     user: 'www@onesta.com.pl',
//     pass: 'Onesta_www_asks_123!'
//   }
// });

// const mailOptions = {
//   from: 'www@onesta.com.pl',
//   to: 'www@onesta.com.pl',
//   subject: 'Sending Email using Node.js',
//   text: 'That was easy!'
// };

// const handleSendbutton = () => {

//     transporter.sendMail(mailOptions, function(error, info){
//         if (error) {
//           console.log(error);
//         } else {
//           console.log('Email sent: ' + info.response);
//         }
//       });
// }


  return (
    <div className=' lg:flex w-full bg-slate-900/[0.9] mx-1 px-2 lg:px-10 rounded-md mt-1 lg:w-full lg:mx-auto'>
        <form className='flex flex-col lg:w-full lg:p-7 p-7'>
            <div className='py-4 font-bold text-2xl text-white'>Zadaj nam pytanie:</div>
              <p className='py-2 font-bold text-white'>Ogłoszenie o nr ref. <input className='bg-gray-900/[0.0]' type="text" value={propertyId} name="id"></input></p>
              {/* <label id="name">Imię i naziwsko</label> */}
              <input className="cf-input-property-card pl-2 py-1" type="text" name="name" placeholder='Imię i nazwisko'></input>
              {/* <label id="phone">Numer telefonu</label> */}
              <input className="cf-input-property-card pl-2 py-1" type="number" name="phone" placeholder='Numer telefonu'></input>
              {/* <label id="mail">Adres e-mail</label> */}
              <input className="cf-input-property-card pl-2 py-1" type="text" name="mail" placeholder='Email'></input>
              {/* <label id="massage">Wiadomość</label> */}
              <textarea className="cf-input-property-card pl-2 pt-1" type="text" name='massage' placeholder='Wiadomość'></textarea>
              <div className='checkbox flex my-2'>
                  <input className='w-6 h-6' type="checkbox" name="mail required"></input>
                  <p className='block ml-2 text-white'>Akceptuję regulamin i <a className="underline-offset-1" href="#">politykę prywatności (wymagane)</a></p>
              </div>
            <button className='bg-red-600 w-full rounded-md py-2 text-white'>Wyślij</button>
        </form>
</div>
  )
}
