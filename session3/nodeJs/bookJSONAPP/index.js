//npm init --y
//build-in withoud install
//fs => inside functions
//installed npm => npm i validator yargs chalk ==> chalk, validators inside functions
const yargs = require('yargs')
//call my own module
const myFunctions = require('./allFunctions')
yargs.command({
    command:"addBook",
    describe: "add new Book",
    builder:{
        name:{
            require:true,
            type:'string'
        },
        category:{
            require:true,
            type:'string'
        }
    },
    handler: function(argv) {
        let book = { name: argv.name, category: argv.category}
        myFunctions.add(book)
    }
})

//run yargs
yargs.argv


/*
bookname : a - category: b
bookname: b ....
*/