tasks = null

const getAllTasks = ( ) =>{
    try { 
        tasks = JSON.parse(localStorage.getItem('tasks')) || []
        if(!Array.isArray(tasks)) throw new Error()
     }
    catch(e) { tasks = [] }
}

showAllTasks = () =>{
tasks.forEach(element => {
    console.log(element)
});
}
getAllTasks()
showAllTasks()
saveAllTasks = ( ) =>{
    console.log('from save')
    console.log(tasks)
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

addTask = (task) =>{
    tasks.push(task)
    saveAllTasks()
}

/*
attr = [ {attrName:'0', attrValue:2}]
*/
const createCustomElements = function(parent, elementTag, classes, textContent, attributes){
    myNewElement = document.createElement(elementTag)
    myNewElement.classList = classes
    myNewElement.textContent = textContent
    attributes.forEach(attr=>{
        myNewElement.setAttribute(attr.attrName, attr.attrValue)
    })
    parent.appendChild(myNewElement)
    return myNewElement

}
p = document.querySelector("#content-wrapper")
createCustomElements(p, 'div', '', '', [])