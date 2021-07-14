const express = require('express')
const router = new express.Router()
const taskController = require('../app/controllers/task.controller')
const auth = require('../app/middleware/auth')

router.post('/add', auth, taskController.add)
router.get('/me', auth, taskController.getMyTasks)
module.exports=router