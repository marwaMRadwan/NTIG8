const User = require('../../database/models/user.model')
const jwt = require('jsonwebtoken')
const auth = async(req,res,next)=>{
    try{
        const token = req.header('Authorization').replace('bearer ', '')
        const decodedToken = jwt.verify(token, 'test')
        const user = await User.findOne({
            _id:decodedToken._id,
            // accountStatus: true
            token: 'bearer '+token
        })
        // res.send({user, token, decodedToken})
        if(!user) throw new Error()
        req.user = user
        req.token = token
        next()
    }
    catch(e){
        res.status(500).send({
            apiStatus: false,
            data: e.message,
            message: 'unauthorized user'
        })
    }
}

module.exports = auth