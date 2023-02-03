import React from 'react'
import db from '../../utils/db'
import UserSchema from '../../model/users'

export default function signup(req,res) {

  async function handleAddUser(){ 
    await db.connect();
    console.log("jestem w mongo")

    const newUser = new UserSchema({
      firstname:req.body.firstname,
      lastname:req.body.lastname,
      mail:req.body.email,
      phone:req.body.phone,
      pass:req.body.pass,
    })
    await newUser.save();
  }
  
  handleAddUser();
}
