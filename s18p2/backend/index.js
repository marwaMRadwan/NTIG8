const express = require('express')
const cors = require('cors')
const app= express()

const server = require('http').createServer(app)
const io = require('socket.io')(server, {
  cors:{
    origin:'*',
    methods:'*'
  }
})

io.on('connection', (socket)=>{
  console.log('connected');

  socket.on('disconnect', ()=>{console.log('disconnect');})

  socket.on('myMsg', (msg)=>{
    console.log(msg)
    socket.broadcast.emit('message-broadcast', msg)
  })
})

server.listen(3000)



