const fs = require('fs')
const validetor = require('validator')
const chalk = require('chalk')

const readMyBooksFile = () =>{
    let data
    try{    
        data = JSON.parse(fs.readFileSync('books.json').toString())
        if(!Array.isArray(data)) throw new Error()
    }
    catch(e){
        data = []
    }
return data
}
const saveMyBooks = (books) =>{
    fs.writeFileSync('books.json', JSON.stringify(books))
}
const add = (data) =>{  
    let allBooks = readMyBooksFile()
    allBooks.push(data)
    saveMyBooks(allBooks)
}
module.exports = {
    add
}
