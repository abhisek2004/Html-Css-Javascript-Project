const mongoose=require('mongoose');

const UserSchema=new mongoose.Schema({
    email:String,
    password:String
})

let model=mongoose.model('user',UserSchema)

module.exports=model;