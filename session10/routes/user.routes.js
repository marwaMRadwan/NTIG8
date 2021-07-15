const express = require('express')
const  router  = new express.Router()
const User = require('../database/models/user.model')
const jwt = require('jsonwebtoken')
const auth = require('../app/middleware/auth')
router.post('/add', async(req,res)=>{
    try{
        let user = new User(req.body)
        await user.save()
        res.send(user)
    }
    catch(e){
        res.status(500).send(e.message)
    }
})
router.post('/login', async(req,res)=>{
    try{
        let user = await User.findOne({name:req.body.name})
        if(!user) throw new Error('user not found')
        isMatchPass = user.password==req.body.password
        if(!isMatchPass) throw new Error('invalid pass')
        let token = jwt.sign({_id: user._id.toString()}, 'test')
        user.token = 'bearer '+ token
        user.save()
        res.send(user)
    }
    catch(e){
        res.send(e)
    }
})
router.post('/assignRole',auth, async(req,res)=>{
    try{
        // user = req.user
        // role = req.user.body
        req.user.role = req.body.role
        await req.user.save()
        res.send(req.user)
    }
    catch(e){
        res.send(e)
    }
})
module.exports = router