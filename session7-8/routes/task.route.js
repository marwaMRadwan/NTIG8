const express = require('express')
const router = new express.Router()
const taskController = require('../app/controllers/task.controller')
const auth = require('../app/middleware/auth')

router.post('/task/add', auth, taskController.add)

module.exports=router