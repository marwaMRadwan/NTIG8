const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true,
        minlength:2,
        maxlength:20
    },
    birthDate:{
        type:Date
    },
    password:{
        type:String,
        trim:true,
        required:true,
        //match:
    },
    email:{
        type:String,
        trim:true,
        required:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)) throw new Error('invalid email')
        }
    },
    image:{
        type:String,
        trim:true,
    },
    phone:{
        type:String,
        trim:true
    },
    addresses:[
        {
            address:{
                addrType:{type:String},
                addrDetails:{type:String}
            }
        }
    ],
    // role:{},
    tokens:[{
        token:{type:String}
    }]
})
// hide some data
userSchema.methods.toJSON = function(){
    const user = this.toObject()
    deletedElements = ["password", "tokens"]
    deletedElements.forEach(element => {
        delete user[element]
    });
    return user
}
// bcrypt password
//login
//generate token
//relation
const User = mongoose.model('User', userSchema)
module.exports = User