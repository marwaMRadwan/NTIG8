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
const searchBookByName = (allBooks, newBookName) =>{
    searchIndex = allBooks.findIndex(book=>{
        return book.name == newBookName
    })
    console.log(searchIndex)
    return searchIndex
}
const add = (data) =>{  
    try{
        let allBooks = readMyBooksFile()
        if(searchBookByName(allBooks, data.name) !=-1) 
            return console.log(chalk.red('book name used before'))
        if(data.authorEmail && !validetor.isEmail(data.authorEmail)) 
            return console.log(chalk.red('invalid email data'))
        allBooks.push(data)
        saveMyBooks(allBooks) 
        console.log(chalk.blue('added'));
    }
    catch(e){
        console.log(chalk.red(e))
    }
}
const showAll = ()=>{
    let allBooks = readMyBooksFile()
    if(allBooks.length==0) console.log(chalk.red('no data found'))
    allBooks.forEach(book=>{
        console.log(`book Name: ${book.name} - Category: ${book.category}`)
    })
}

const showBookByName = (bookName) =>{
    let allBooks = readMyBooksFile()
    let found =searchBookByName(allBooks, bookName)
    if(found ==-1) return console.log(chalk.red('not found'))
    console.log(chalk.blue(`${allBooks[found].name}`))
}
const edit = (name,book) => {
    let allBooks = readMyBooksFile()
    ind = searchBookByName(allBooks, name)
    if(ind ==-1) 
        return console.log(chalk.red('book not founde'))
    for(element in book){
        if(book[element]) allBooks[ind][element] = book[element]
        // console.log(element, book[element])
    }
    saveMyBooks(allBooks)
}
module.exports = {
    add,
    showAll,
    showBookByName,
    edit
}
