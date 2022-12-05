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
    <div className='w-full bg-white mx-1 px-2 rounded-xl mt-1'>
        <form className='contact-form-in-property-card'>
            <div className='py-4 font-bold text-xl'>Napisz do nas:</div>
            <p>Ogłoszenie o nr ref. <input type="text" value={propertyId} name="id"></input></p>
            <label id="name">Imię i naziwsko</label>
            <input className="cf-input-property-card" type="text" name="name"></input>
            <label id="phone">Numer telefonu</label>
            <input className="cf-input-property-card" type="number" name="phone"></input>
            <label id="mail">Adres e-mail</label>
            <input className="cf-input-property-card" type="text" name="mail"></input>
            <label id="massage">Wiadomość</label>
            <textarea className="cf-input-property-card" type="text" name='massage'></textarea>
            <div className='checkbox'>
                <input className='w-6 h-6' type="checkbox" name="mail required"></input>
                <p className='block ml-2'>Akceptuję regulamin i <a className="underline-offset-1" href="#">politykę prywatności (wymagane)</a></p>
            </div>
            <button 
                className='bg-red-600 w-24 text-white'>Wyślij</button>
    </form>
</div>
  )
}
