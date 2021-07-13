const express= require('express')
const cors = require('cors')
const multer = require('multer')
require('dotenv').config()
require('../database/connection')
const userRoutes = require('../routes/user.route')
const taskRoutes = require('../routes/task.route')
const app = express()
app.use(cors())

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(userRoutes)
app.use(taskRoutes)
// var upload = multer({ dest: 'uploads/' })
// fs = require('fs')
// app.post('/profile', upload.single('avatar'), async (req, res) =>{
//     // res.send(req.file)
//    data =  (req.file.originalname.split('.')).pop()
//    newName = req.file.destination+ req.file.filename+"."+data
//   // res.send(newName)
//     fs.rename(req.file.path, newName,  function(err){
//         if (err) {
//             console.log('err: ' + err);
//         } else {
//             console.log('rename - ok');
//         }})
//     res.send(data)
// })


module.exports = app