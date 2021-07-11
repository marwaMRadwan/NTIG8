const express = require('express')
const router = new express.Router()
const User = require('../models/users.model')
const authMe = require('../middleware/auth')
router.post('/add', async (req,res)=>{
    try{
        const userData = new User(req.body)
        await userData.save()
        res.send({
            apiStatus: true,
            data: userData,
            message: "data inserted"
        })
    
    }
    catch(e){
        res.send({
            apiStatus:false,
            data: e,
            message: "error adding user"
        })
    }
})

router.post('/login', async (req,res)=>{
    try{
        console.log('test')
        user = await User.loginUser(req.body.email, req.body.password)
        //generate token
        token =await user.generateToken()

        res.send({
            data:{user, token},
            msg:"logged in"
        })
    }
    catch(e){
        res.send({
            data:e.message,
            msg:"error"
        })
    }
})

router.get('/me',authMe, (req,res)=>{
    
    res.send(req.user)
})
module.exports = router
