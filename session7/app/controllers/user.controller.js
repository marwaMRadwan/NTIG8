const User = require('../../database/models/user.model')
class Userx{
    register = async (req,res)=>{
        try{
            const userData = new User(req.body)
            await userData.save()
            res.send('done')
        }
        catch(e){
    res.send(e)
        }
    }
    showAll =async(req,res)=>{
        try{
    const data =await User.find()
    res.send(data)
        }
        catch(e){
    res.send(e)
        }
    }
}

module.exports = Userx