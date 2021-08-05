const app = require('../server')
const Post = require('../models/Post')
const mongoose = require('mongoose')
const supertest = require("supertest")

beforeEach((done)=>{
    mongoose.connect('mongodb://localhost:27017/appJestDb',{
        useCreateIndex:true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
    , ()=>done())
})

afterEach((done)=>{
    mongoose.connection.db.dropDatabase(()=>{
        mongoose.connection.close(()=>done())
    })
})


test("GET /api/posts", async()=>{
    const post = await Post.create({title:"p 1", content:'c 1'})
    await supertest(app).get("/api/posts")
    .expect(200)
    .then((response)=>{
        expect(Array.isArray(response.body)).toBeTruthy()
        expect(response.body.length).toEqual(1)

        expect(response.body[0]._id).toBe(post.id)
        expect(response.body[0].title).toBe(post.title)
        expect(response.body[0].content).toBe(post.content)
        
    })
})

test("POST /api/posts", async()=>{
    const data = {title:"t1", content:"c1"}
    await supertest(app).post("/api/posts")
    .send(data)
    .expect(200)
    .then(async(response)=>{
        expect(response.body._id).toBeTruthy()
        expect(response.body.title).toBe(data.title)
        expect(response.body.content).toBe(data.content)

        const post = await Post.findOne({_id: response.body._id})
        expect(post).toBeTruthy()
        expect(post.title).toBe(data.title)
        expect(post.content).toBe(data.content)
    })
})

test("GET /api/posts/:id", async()=>{
    const post = await Post.create({title:"p 1", content:'c 1'})
    await supertest(app).get("/api/posts/"+post.id)
    .expect(200)
    .then((response)=>{
        expect(response.body._id).toBe(post.id)
        expect(response.body.title).toBe(post.title)
        expect(response.body.content).toBe(post.content)
    })
})

test("PATCH /api/posts/:id", async()=>{
    let post = await Post.create({title:"t1", content:"c1"})
    let data = { title:"t2", content:"c2"}
    await supertest(app).patch("/api/posts/"+post.id)
    .send(data)
    .expect(200)
    .then(async(response)=>{
        expect(response.body._id).toBe(post.id)
        expect(response.body.title).toBe(data.title)
        expect(response.body.content).toBe(data.content)

        let newPost = await Post.findOne({_id: response.body._id})
        expect(newPost).toBeTruthy()
        expect(newPost.title).toBe(data.title)

        expect(newPost.content).toBe(data.content)

    })
})
test("DELETE /api/posts/:id", async()=>{
    const post = await Post.create({title:"t1", content:"c1"})
    await supertest(app).delete("/api/posts/"+post._id)
    .expect(200)
    .then(async()=>{
        expect(await Post.findOne({_id:post.id})).toBeFalsy()
    })
})

