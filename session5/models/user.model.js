const mongoose = require('mongoose')
const validator = require('validator')

const User = mongoose.model('User', {
    name:{
        type:String,
        trim:true,
        lowercase:true,
        unique:true,
        required:[true, 'must have a name']
    },
    email:{
        type:String,
        trim:true,
        lowercase:true,
        unique:true,
        required:true,
        minLength:10,
        maxLength:50,
        validate(value){
            if(!validator.isEmail(value)) throw new Error ('invalid email')
        }      
    },
    password:{
        type:String,
        trim:true,
        required:true
    },
    gender:{
        type: String,
        trim:true,
        lowercase:true,
        enum:['male', 'female']
    }
    // ,
    // c:[
    //     {
    //         name:{},
    //         age:{}
    //     }
    // ]
})
module.exports=User