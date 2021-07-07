const express = require('express')
const router = new express.Router()
const myController = require('../controllers/myController')

router.get('', myController.test)

module.exports = router