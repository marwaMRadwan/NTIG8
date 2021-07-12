const express = require('express')
const router = new express.Router()
const userController = require('../app/controllers/user.controller')
userControllerObj = new userController()
router.post('/user/register', userControllerObj.register)

router.get('/user/all', userControllerObj.showAll)
module.exports=router