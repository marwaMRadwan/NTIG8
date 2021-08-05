const mongoose = require('mongoose')
const app = require('./server')

mongoose.connect('mongodb://localhost:27017/appJestDb',{})
.then(()=>{
    app.listen(3000)
})