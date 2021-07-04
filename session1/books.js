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

getUserInputs()