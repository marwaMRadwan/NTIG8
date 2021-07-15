const express = require('express')
const  router  = new express.Router()
const Myroutes = require('../database/models/allRoutes.model')

router.post('/add', async(req,res)=>{
    try{
        let routes = new Myroutes(req.body)
        await routes.save()
        res.send(routes)
    }
    catch(e){
        res.status(500).send(e.message)
    }
})
router.get('/all', async(req,res)=>{
    try{
        let data = await Myroutes.find()
        res.send(data)
    }
    catch(e){
        res.send(e)
    }
})
module.exports = router