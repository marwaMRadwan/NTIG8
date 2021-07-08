//npm init --y  npm i anyPackage
// const mongodb = require('mongodb')
// const mongoClient = mongodb.MongoClient

const {MongoClient, ObjectID} = require('mongodb')
// let d = new ObjectID("60e6b3b6e585ff110cf6774f")
// console.log(d);
const dbUrl = "mongodb://127.0.0.1:27017"
dbName = "G8DB"
MongoClient.connect(dbUrl, { }, (error, client)=>{
    if(error) return console.log('error in database')
    const myDb = client.db(dbName)
    // myDb.collection('test')
    // .insertOne({name:"ahmed", grades:[
    //     {sub:'a', degree:50},
    //     {sub:'b', degree: 'fail'}
    // ]})
    // .then(()=>console.log('inserted'))
    // .catch(e=> console.log(e))
    // myDb.collection('test').find({name:"marwa"}).toArray((err, data)=>{
    //     if(err) return console.log(e)
    //     console.log(data)
    // })
    myDb.collection('test').findOne({_id:new ObjectID("60e6b3b6e585ff110cf6774f")}, (err,data)=>{
        if(err) return console.log(e)
            console.log(data)
    })
})

