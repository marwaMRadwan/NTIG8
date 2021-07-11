const express = require('express')
const router = new express.Router()
const userModel = require('../models/users.model')

router.post('/add', async (req,res)=>{
    try{
        const x = new userModel(req.body)
        await x.save()
        res.send()
    
    }
    catch(e){
        res.send(e)
    }
})
module.exports = router
