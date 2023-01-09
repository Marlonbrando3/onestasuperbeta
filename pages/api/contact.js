export default function (req, res) {
      console.log('jestem w API')
    require('dotenv').config()
    let nodemailer = require('nodemailer')

    const endEmail = 'biuro@onesta.com.pl';
    const fromEmail = "www@onesta.com.pl";
    const pass = 'Onesta_www_asks_123!'
    
    const transporter = nodemailer.createTransport({
      port: 465,
      host: "mail-serwer141299.lh.pl",
      secure: true,
      // requireTLS: true,
      tls: {
        ciphers: "SSLv3",
      },
      auth: {
        type: "OAuth2",
        user: fromEmail,
        pass: pass,
      },   
      // dkim: {
      //   domainName: 'onesta.com.pl',
      //   keySelector: 'www@onesta.com.pl',
      // }
    })

    const mailData = {
      from: fromEmail,
      to: endEmail,
      subject: `Wiadomość ze strony od: ${req.body.Name}`,
      text: "Hello. This email is for your email verification.",
      html: 
      `Dotyczy ogłoszenia o nr. ref.${req.body.Id}`+`<br>`+
      `Email kontaktowy: ${req.body.Email}`+`<br>`+
      `Telefon kontaktowy: ${req.body.Phone}`+`<br><br>`+
      `Wiadomość ${req.body.Message}`+`<br>`
    }

    transporter.sendMail(mailData, function (err, info) {
      console.log("wysłane")
      if(err)
        console.log(err)
      else
        console.log(info)
    })
    res.status(200)
  }

  