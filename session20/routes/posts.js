const express = require('express')
const Post = require('../models/Post')
const router = express.Router()

router.get('/posts', async(req,res)=>{
    const posts = await Post.find()
    res.send(posts)
})

// router.post('/posts', async(req,res)=>{
//     const post = new Post(req.body)
//     await post.save()
//     res.send(post)
// })

// router.get('/posts/:id', async(req,res)=>{
//     try{
//     const posts = await Post.findOne({_id:req.params.id})
//     res.send(posts)
//     }
//     catch(e){
//         res.send({err:"not found"})
//     }
// })

// router.patch('/posts/:id', async(req,res)=>{
//     try{
//     const post = await Post.findOne({_id:req.params.id})
//     if(req.body.title) post.title = req.body.title
//     if(req.body.content) post.title = req.body.content
//     await post.save()
//     res.send(post)
//     }
//     catch(e){
//         res.send({err:"not found"})
//     }
// })

// router.delete('/posts/:id', async(req,res)=>{
//     try{
//     await Post.deleteOne({_id:req.params.id})
//     res.send({})
//     }
//     catch(e){
//         res.send({err:"not found"})
//     }
// })
module.exports= router