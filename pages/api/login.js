import React from 'react'
import User from "../../model/users"
import db from '../../utils/db';

export default function signup(req,res) {
       console.log(req.body.email)

       async function handleAddUser(){ 
         await db.connect();
       //   console.log("jestem w mongo")
     
         const validationEmail = User.find({
              email:req.body.name,
         })

       console.log("to"+validationEmail)  
       console.log("to2"+req.body.email)  

       if(validationEmail === req.body.email) console.log("zalogowno")
       else console.log("użytkownika nie ma w bazie")
       }

       handleAddUser();
     }
