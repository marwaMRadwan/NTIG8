//clousers
// const counter = () =>{
//     c=10
//     return {
//         c,
//         inc(){ c++},
//         dec(){c--},
//         read(){return c}
//     }
// }
// const x  = counter()
// x.inc()
// x.dec()
// console.log(x.read())

// const myClouser = (a,b)=>{
//     result = 0
//     return{
//         add() { result += a+b},
//         sub() { result += a-b},
//         show() { return result},
//         result
//     }
// }
// let x = myClouser(5,3)
// x.add()
// x.sub()
// console.log(x.show())
// z = 0
// console.log('a')
// setTimeout((z=5, x, y, w)=>{ console.log('b')}, 2000)
// console.log('c')
// console.log(z)

//callback
// const test = (x, cb) => {
//     setTimeout(()=>{
//         if(typeof x=="number") cb(true, false)
//         else cb(false, true)
//     }, 2000)
// }

// test(5, (err, res)=>{
//     if(err) return console.log('error')
//     console.log('done')
// })

//promises
// const myPromise = (val) => new Promise( (resolve, reject)=>{
//     setTimeout(()=>{
//         typeof val == "number"? resolve(val**3) : reject('da msh rkm')
//     }, 2000)   
// })

// console.log(myPromise(4))

// then catch
// myPromise('hello').then((data)=> console.log(data), (err)=>console.log(err))//.catch(err=> console.log(err))
//async await
// const myFun = async()=>{
//     try{
//         x= await myPromise('hello')
//         await myPromise(9)
//         await myPromise(14)
//         console.log(x)
//     }
//     catch(e){
//         console.log(e)
//     }
// }
// myFun()

//api read (fetch) https://jsonplaceholder.typicode.com/users
const myApiCall = async(cb) =>{
    let data = await(await fetch('https://jsonplaceholder.typicode.com/users')).json()
    //let x = await data.json()
    // return(x)
    //console.log(x)
    cb(data)
    ////////////////////
}
myApiCall(data=> console.log(data))

