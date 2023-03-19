const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({path:'./config.env'})
const ur = process.env.urlss

mongoose.connect(ur).then((res)=>{
    console.log("Connected Successfully")
}).catch((err)=>{
    console.log(err)
})