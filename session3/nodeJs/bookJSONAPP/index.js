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
        },
        authorEmail:{
            type:'string'
        }
    },
    handler: function(argv) {
        let book = { name: argv.name, category: argv.category, authorEmail: argv.authorEmail}
        myFunctions.add(book)
    }
})

yargs.command({
    command:"readAllBooks",
    handler:function(){
        myFunctions.showAll()
    }
})
yargs.command({
    command:"showSingle",
    describe: "add new Book",
    builder:{
        name:{
            require:true,
            type:'string'
        }
    },
    handler: function(argv) {
        myFunctions.showBookByName(argv.name)
    }
})
yargs.command({
    command:"editBook",
    describe: "add new Book",
    builder:{
        name:{
            type:'string',
            demandOption:true
        },
        newName:{
            type:'string'
        },
        newCategory:{
            type:'string'
        },
        newAuthorEmail:{
            type:'string'
        }
    },
    handler: function(argv) {
        let book = { name: argv.newName, category: argv.newCategory, authorEmail: argv.newAuthorEmail}
        myFunctions.edit(argv.name,book)
    }
})

//run yargs
yargs.argv