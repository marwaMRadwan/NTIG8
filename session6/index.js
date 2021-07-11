const app = require('./src/app')
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
