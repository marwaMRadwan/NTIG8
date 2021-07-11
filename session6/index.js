const app = require('./src/app')
// const jwt = require('jsonwebtoken')
// _id='123456'
// x = jwt.sign({_id:_id.toString()}, 'test')
// console.log(x)
// console.log( jwt.verify(x, 'test') )
app.listen(process.env.PORT)


// const bcrypt = require('bcryptjs')
// // hash compare
// const pass = '123456'
// x = async() =>{
//     hashedpass = await bcrypt.hash(pass, 12)
//     console.log(hashedpass); 
//     isvalid = await bcrypt.compare(pass, hashedpass)
//     console.log(isvalid)
// }

// x()
