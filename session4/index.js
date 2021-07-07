// request http/https
// const request = require('request')
const url = "https://jsonplaceholder.typicode.com/users"
const https = require('https')
const request = https.request(url, (response)=>{
    let result = ''
    response.on('data', (chunk)=>{
        console.log(chunk.toString())
        result +=chunk.toString()
    })
    response.on('end', ()=>{
        const all = JSON.parse(result)
        console.log(all)
    })
})

request.on('error',(err)=>  console.log(err))
request.end()
// let x = []
// test =(cb)=>{
//      request( { url , json:true} , (err, {body})=>{
//         if(err) console.log('fe error')
        // if(res.body.err)
        // else {
            // console.log(res.body)
            // cb(body)
            // return body
//         }
//     } )
// }
// test((x)=>  console.log(x))
