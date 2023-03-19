const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    organization:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    siteloc:{
        type:String,
        required:true
    }
})

const model = mongoose.model("Queries",schema);

module.exports = model;