const express= require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT
const myPublicDir = path.join(__dirname, 'public')
app.use(express.static(myPublicDir))

const myViewsDir = path.join(__dirname, 'template/views')
app.set('view engine', 'hbs')
app.set('views', myViewsDir)

const hbs= require('hbs')
const partialDir = path.join(__dirname, 'template/layouts')
hbs.registerPartials(partialDir)
// console.log(path.join(__dirname,'x.html'))
//res.send(any data)
// app.get('', (req, res)=>{
//     data = {a:4}
//     res.sendFile(path.join(__dirname,'x.html'))
// })

app.get('', (req, res)=>{
    res.render('home')
})

app.get('', (req, res)=>{
    res.render('home')
})

app.get('*', (req,res)=> res.send('error 404'))
app.listen(PORT, ()=> console.log(`hello on localhost:${PORT}`))