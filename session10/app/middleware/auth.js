const User = require('../../database/models/user.model')
const Myroutes = require('../../database/models/allRoutes.model')
const jwt = require('jsonwebtoken')
const auth = async(req,res,next)=>{
    // res.send(req.originalUrl)
    try{
        const token = req.header('Authorization').replace('bearer ', '')
        const decodedToken = jwt.verify(token, 'test')
        const user = await User.findOne({
            _id:decodedToken._id,
            // accountStatus: true
            token: 'bearer '+token
        })
        if(!user) throw new Error()
        const r = await Myroutes.findOne({url_name: req.originalUrl})
        let x = r.roles.find(el=>{
           return el.toString() == user.role.toString()
        })
        if(!x) throw new Error()
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