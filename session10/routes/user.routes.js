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
router.get('/me',auth, async(req,res)=>{
    res.send(req.user)
})
router.post('/logout', auth, async(req,res)=>{
    try{ 
        req.user.token =""
        await req.user.save()
        res.send('logged out')
    }
    catch(e){ res.send(e) }
})
router.delete('/deleteAccount', auth, async(req,res)=>{
    try{
        await req.user.remove()
        res.send('deleted')
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
router.patch('/me', auth, async(req,res)=>{
    try{
        for( x in req.body){
            req.user[x] = req.body[x]
            // console.log(x, req.body[x])
        }
        req.user.save()
        res.send('done')
    }
    catch(e){
        res.send(e)
    }
})
router.get('/all', async(req,res)=>{
    try{
        let s = {}
        //sortBy=name:desc
        if(req.query.sortBy){
            sortData = req.query.sortBy.split(':')
            s[sortData[0]] = sortData[1]=='desc'?-1:1
        }
        // res.send(s)
        limit = Number(req.query.limit)
        page = Number(req.query.pagenum)*limit
        data = await User.find().limit(limit).skip(page).sort(s)
        res.send(data)
    }
    catch(e){
        res.send(e)
    }
})
router.get('/test',auth, async(req,res)=>{
    res.send(req.user)
})
module.exports = router

/*
req.user.populate({
    path:'rel',
    options:{
        limit:5,
        skip:page*5
    }
})

*/