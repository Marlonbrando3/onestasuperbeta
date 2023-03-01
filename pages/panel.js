import React, { useState } from 'react'
import { verify } from 'jsonwebtoken'
import { useRouter } from 'next/router'
import { secret } from "./api/secret"
import AdminInputs from '/components/AdminInputs'

export default function Panel() {

    const [permission, setPermission] = useState(false)

    adminapi();

    const router = useRouter();
    async function adminapi(){

    let ref = await fetch('/api/panel', {
        method: 'POST',
        model:"no-cors",
        headers: new Headers({
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Methods':'GET, POST',
          'Access-Control-Allow-Origin':'*'
        }),
      })

      if(ref.status === 200){
          router.push("/panel")
          setPermission(true)
      } if(ref.status === 300){
        setPermission(true)
      }
      else {
        router.push("/login")
      }
    }
    console.log(permission)

    return (
        permission && <AdminInputs/>
        )
}

