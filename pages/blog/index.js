import React from 'react'
import HeaderBlog from '../../components/HeaderBlog'
import Head from 'next/head'
import Script from 'next/script'
import BlogItems from '../../components/BlogItems'


export default function blog() {
  return (
    <div>
      {/* <!-- Google tag (gtag.js) --> */}
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-P4VZ7P7VZ5"></Script>
      <Script id="google-analitycs">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-P4VZ7P7VZ5');
      `}
      </Script>
      <Head>
            <title>Baza wiedzy - Onesta Group</title>
            <link rel="shortcut icon" href="/logotype.png" />
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600&display=swap" rel="stylesheet"></link>
            <meta name="viewport" content="initial-scale=1.0, width=device-width, minimum-scale=1, maximum-scale=1" />
        </Head>
        <HeaderBlog />
        <BlogItems />
    </div>
  )
}
