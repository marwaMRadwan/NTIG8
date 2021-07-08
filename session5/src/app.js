const express= require('express')
const app = express()
require('../db/connection')
const userRoutes= require('../routes/user.route')
app.use(express.json()) // urlencoded
app.use(userRoutes)
module.exports=app
