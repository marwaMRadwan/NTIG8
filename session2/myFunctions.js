tasks = null
myAddForm = document.querySelector('#form-div form')
let showHide = document.querySelector('#showHide')
form_div = document.querySelector('#form-div')
p = document.querySelector('#content-wrapper')

const getAllTasks = ( ) =>{
    try { 
        tasks = JSON.parse(localStorage.getItem('tasks')) || []
        if(!Array.isArray(tasks)) throw new Error()
     }
    catch(e) { tasks = [] }
}
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
changeStatus = (index) =>{
    let allDivs = document.querySelectorAll('.x')
    allDivs[index].classList.toggle('bg-warning')
    allDivs[index].classList.toggle('bg-primary')
    tasks[index].status = !tasks[index].status

    saveAllTasks(tasks)
} 
showSingleTask = (element, i)=>{
    const mainDiv = createCustomElements(p, 'div', 'col-4 p-3', '', []) 
    const mainDiv2 = createCustomElements(mainDiv, 'div', 'border border-3 border-primary m-3 p-3 x', '', []) 
    element.status? mainDiv2.classList.add('bg-warning'):mainDiv2.classList.add('bg-primary');
    createCustomElements(mainDiv2,'h3','',element.taskTitle, [])
    createCustomElements(mainDiv2,'span','',element.taskType, [])
    createCustomElements(mainDiv2,'p','',element.taskContent, [])
    btn1 = createCustomElements(mainDiv2,'button','btn btn-danger mx-2','delete', [])
    btn1.addEventListener('click', function(e){ alert (i)})
    btn2 = createCustomElements(mainDiv2,'button','btn btn-warning mx-2','edit', [])
    btn2.addEventListener('click', function(e){ alert (i)})
    btn3 = createCustomElements(mainDiv2,'button','btn btn-primary mx-2','change status', [])
    btn3.addEventListener('click', function(e){ changeStatus(i) })
}
showAllTasks = () =>{
tasks.forEach((element, i) => {
showSingleTask(element, i)
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
    myAddForm.reset()
    form_div.classList.add('d-none')
    showHide.textContent="Show"
    showSingleTask(task, tasks.length-1)
}