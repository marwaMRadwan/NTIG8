const express = require('express')
const hbs = require('hbs')
const path = require('path')

const myRoutes = require('../routes/myroutes')
const app = express()
app.use(myRoutes)
module.exports = app