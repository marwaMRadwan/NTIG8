const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const userSchema= new mongoose.Schema({
   userId: {
       type:Number
   },
   name:{
       type:String, required:true, trim:true
   },
   password:{
    type:String, required:true, trim:true
},
email:{type:String, required:true, trim:true, unique:true},
accountStatus:{ type:Boolean, default:false},
phone:{type:String, minLength:11, maxLength:11},
country:{
    type:String,
    enum: ['egypt', 'plastine', 'canda']
}
}, {timestamps:true})

userSchema.pre('save', async function(){
    lastUser = await User.findOne({}).sort({_id:-1})
    console.log(lastUser)
    const user = this
    if(!lastUser) user.userId = 1
    else user.userId= lastUser.userId+1
    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password,10)
    }
})

const User = mongoose.model('User', userSchema)
module.exports = User