const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({

    firstname:{
        type:String,
    },
    lastname:{
        type:String,
    },
    phone:{
        type:Number,
    },
    mail:{
        type:String,
    },
    pass:{
        type:String,
    },
})

const User = mongoose.models.User || mongoose.model('User', UserSchema);
export default User;