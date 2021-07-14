const passport = require("passport");
mongoose  = require("mongoose");
config = require('../config/database')
require('../config/passport')(passport)
jwt = require('jsonwebtoken')
express=require('express')
const router = new express.Router()
User = require('../models/user')
Data = require('../models/data')

router.post('/signup', async (req,res)=>{
    let userData = new User(req.body)
    try{
        await userData.save()
        res.send(userData)
    }
    catch(e){res.send(e.message)}
})

module.exports=router