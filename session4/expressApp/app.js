const express= require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT
let test =5
const myPublicDir = path.join(__dirname, 'public')
app.use(express.static(myPublicDir))

const myViewsDir = path.join(__dirname, 'template/views')
app.set('view engine', 'hbs')
app.set('views', myViewsDir)
// console.log(path.join(__dirname,'x.html'))
//res.send(any data)
// app.get('', (req, res)=>{
//     data = {a:4}
//     res.sendFile(path.join(__dirname,'x.html'))
// })

app.get('', (req, res)=>{
    res.render('home')
})

app.get('/x/y', (req, res)=>{
    res.render('home')
})

app.listen(PORT, ()=> console.log(`hello on localhost:${PORT}`))