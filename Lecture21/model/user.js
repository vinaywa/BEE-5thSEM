const mongoose = require("mongoose");

const Schema=mongoose.Schema;

const user=new Schema({
    email:String,
    password:String
})

const myModel=mongoose.model('UserModel',user)

module.exports=myModel