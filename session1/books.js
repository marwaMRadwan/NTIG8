// books = [] // data from local or []

// book = {
//     title:"",
//     numOfPages:"",
//     author:"",
//     status:false
// }
// localStorage

const readAll= () => {
    let data
    try{
        data = JSON.parse(localStorage.getItem('books'))
        if(!Array.isArray(data)) throw new Error()
    }
    catch(e){
        data = []
    }
    return data
}

const writeDataInLocalStorage = ( data ) =>{
    localStorage.setItem('books', JSON.stringify(data))
}

generateNewDataId = () =>{
    return (parseInt(Math.random()*d))
}

checkUniqueBookTitle = (title) =>{
    data = readAll()
    let flag = data.some(element=> element.title == title)
    return flag
}

getUserInputs = () =>{
    book = {
        title: "1",
        status:false,
        Author:"2",
        numOfPage:100
    }
    data = readAll()
    data.push(book)
    writeDataInLocalStorage(data)
}

//{ key: id, value:5} searchobj.key
searchBook= (searchObj)=>{
    const data = readAll()
    res =data.findIndex(single =>{
        return single[searchObj.key] == searchObj.val
    })
    // console.log(res)
    // x = undefined
    // console.log(!x)
    if(res!=-1) return false
    return res
}
showSingleBook = ( searchObj) =>{
    let data = readAll()
    let book = searchBook(searchObj)
    if(!book) return console.log('not found')
    console.log(`Book Title: ${data[book].title} and Author: ${data[book].Author}`)
    // console.log(book)
}
showAllBooks=()=>{
    let data = readAll()
    data.forEach(book=> console.log(`Book Title: ${book.title} and Author: ${book.Author}`)
    )
}
show = (searchObj = null) =>{
    if(searchObj)  return showSingleBook(searchObj)
    showAllBooks()
}

delBook = (searchObj)=>{
    let book = searchBook(searchObj)
    console.log(book)
    if(!book) return console.log('not found')
    data = readAll()
    data.splice(book,1)
    writeDataInLocalStorage(data)
}

editBook = (searchObj, newData)=>{
    let book = searchBook(searchObj)
    if(!book) return console.log('not found')
   
}

// delBook({key:"title", value:"1"})

getUserInputs()

