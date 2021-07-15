const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{type:String, unique:true, required:true, trim:true},
    password:{type:String, required:true, trim:true},
    role:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Myroles'
    }
})

const User = mongoose.model('User', userSchema)
module.exports=User