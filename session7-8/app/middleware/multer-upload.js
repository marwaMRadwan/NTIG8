const multer = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        console.log(req.user._id)
        cb(null, file.fieldname + '-' + Date.now()+'.'+(file.originalname.split('.')).pop())
    }
})
const upload = multer({ 
    storage: storage ,
    limits: { 
        fileSize: 150000 
    }
})

module.exports = upload



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
