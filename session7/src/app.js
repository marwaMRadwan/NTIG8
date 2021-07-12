const express= require('express')
const cors = require('cors')

require('dotenv').config()
require('../database/connection')

const app = express()
app.use(cors())

app.use(express.urlencoded())
app.use(express.json())

module.exports = app