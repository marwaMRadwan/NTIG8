const express = require('express')
const router = new express.Router()
const myController = require('../controllers/myController.controller')

router.get('', myController.home)

router.get('/blog', (req,res)=>{
    let images = [
        {ind:true, src :"/images/1.jpg", alt :"image 1"}, 
        {ind:false, src :"/images/2.jpg", alt :"image 1"}, 
        {ind:false, src :"/images/3.jpg", alt :"image 1"}
    ]
    res.render('allPosts', {data: images, title:"posts page"})
})

router.get('/images', myController.renderApiData)
router.get('/images/:id', myController.getSingle)
module.exports = router