import React from 'react'
import { verify } from 'jsonwebtoken'
import { NextResponse } from 'next/server'
import { getCookie, setCookie, deleteCookie } from 'cookies-next';
import { secret } from './secret'

export default function admin(req, res) {

    const coockie = getCookie('auth', { req, res })

    verify(getCookie('auth', { req, res }), secret, function(err, decoded) {

        console.log("jestem w API " + res.statusCode)
        if(decoded && !err){
            if(coockie === undefined) {
            console.log("działa")
            res.status(200).json({msg:"uprawnienia przyznane"})
            }
        } if(coockie !== undefined) {
            console.log("Twoje coockie istnieje")
            res.status(300).json({msg:"coockie istnieje"})
        } else {
            console.log("Odmowa")
            res.status(403).json({msg:"coockie istnieje"})

        }
})

}
