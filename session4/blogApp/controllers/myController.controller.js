
const home = (req, res) => {
    let images = [
        {ind:true, src :"/images/1.jpg", alt :"image 1"}, 
        {ind:false, src :"/images/2.jpg", alt :"image 1"}, 
        {ind:false, src :"/images/3.jpg", alt :"image 1"}
    ]
    res.render('home', {data: images, title:"home page"})
}

const getApiData = ( url, cb ) =>{
    let https = require('https')
    const request = https.request(url, (response)=>{
    let result = ''
    response.on('data', (chunk)=>{
        console.log(chunk.toString())
        result +=chunk.toString()
    })
    response.on('end', ()=>{
        const all = JSON.parse(result)
        console.log(all)
        cb(all, false)
    })
    })
    request.on('error',(err)=>  {console.log(err); cb(false, 'error')})
    request.end()
}

const renderApiData = (req,response) =>{
    url= "https://jsonplaceholder.typicode.com/photos?_limit=20"
    getApiData(url, (res, err)=>{
        if(err) response.send(err)
        response.render('contact', {data:res, title:'all images'})
    })
}
const getSingle = (req,response)=>{
    url= `https://jsonplaceholder.typicode.com/photos/${req.params.id}`
    getApiData(url, (res, err)=>{
        if(err) response.send(err)
        response.render('single', {data:res, title:'all images'})
    })


}
module.exports = {
    home,
    renderApiData,
    getSingle
}