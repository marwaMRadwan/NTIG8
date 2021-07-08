const mongoose = require('mongoose')
const validator = require('validator')
mongoose.connect('mongodb://localhost:27017/G8G8', {
    useCreateIndex:true,
    useFindAndModify:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
})

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
})

let userData = new User({
    name:"marwa1",
    email:'marwa1@techsexperts.com',
    password:'123456',
    gender:'FEMALE'
})

userData.save()
.then(()=> console.log('done'))
.catch((err)=> console.log(err))
