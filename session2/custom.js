let showHide = document.querySelector('#showHide')
let formHeads = [
    'taskTitle',
     "taskType",
      "taskContent", 
      "startDate", 
      "dueDate"]
showHide.addEventListener('click', function(e){
    document.querySelector('#form-div').classList.toggle('d-none')
    this.textContent == "Show" ? this.textContent='Hide': this.textContent='Show'
})

document.querySelector('#form-div form').addEventListener('submit', function(e){
    e.preventDefault()
    task = { status:false }
    formHeads.forEach(h => {
            task[h]= this.elements[h].value
    })
    console.log(task)
})
test()
