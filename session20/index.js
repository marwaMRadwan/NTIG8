const mongoose = require('mongoose')
const app = require('./server')

mongoose.connect('mongodb://localhost:27017/appJestDb',{
    useCreateIndex:true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    app.listen(3000)
})
