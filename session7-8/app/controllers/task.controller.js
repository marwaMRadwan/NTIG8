const Task = require('../../database/models/task.model')
class TaskClass{
    static add = async(req,res)=>{
        try{
            const taskToAdd = new Task({
                userId: req.user._id,
                ...req.body
            }) 
            await taskToAdd.save()
            res.send({
                apiStatus:true,
                data:taskToAdd,
            })
        }
        catch(e){
            res.status(500).send({
                apiStatus:false,
                date:e.message
            })
        }
    }
}
module.exports = TaskClass