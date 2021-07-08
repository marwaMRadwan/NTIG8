const express= require('express')
const app = express()
require('./db/connection')
const userModel = require('./models/user.model')

app.post('/add', (req,res)=>{
let userData = new userModel({
    name:"marwa11",
    email:'marwa11@techsexperts.com',
    password:'123456',
    gender:'FEMALE'
})

userData.save()
.then(()=> res.send('done'))
.catch((err)=> res.send(err))

})
app.listen(3000)