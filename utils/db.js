import mongoose from "mongoose";
require('dotenv').config();
const connection = {}

async function connect () {
    // console.log('start to connect in db');
    // if(connection.isConnected){
    //     console.log('already connected');
    //     return;
    // }
    // if(mongoose.connections.leghth > 0) {
    //     connection.isConnected = mongoose.connections[0].readyState;
    //     if (connection.isConnected ===1) {
    //         connection.isConnected('use previous connection');
    //         return;
    //     }
    //     await mongoose.disconnect();
    // }

    const db = await mongoose.connect('mongodb+srv://onestauser:8XwxABJyEETxygc7@onesta-base.evtzc20.mongodb.net/onesta-base?retryWrites=true&w=majority');
    console.log('new connection');
    return;
    // connection.isConnected = db.connections[0].readyState;
    
}

async function disconnect() {
    // if(connection.isConnected) {
    //     if(process.env.NODE_ENV === "production"){
    //         await mongoose.disconnect();
    //         connection.isConnected = false;
    //     } else {
    //         console.log('not connected')
    //     }
    // }
}

const db = {connect, disconnect};
export default db;
