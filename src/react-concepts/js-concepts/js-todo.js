let container = document.createElement("div")
container.style.backgroundColor = "yellow"
container.style.height = "500px";
container.style.width = "500px"

let containerHeading = document.createElement("h2");
containerHeading.innerText = "Todo App";
container.appendChild(containerHeading)

let inputEle = document.createElement("input")
inputEle.type = "text";
inputEle.placeholder = "Input";
container.appendChild(inputEle);

let addButton = document.createElement("button")
addButton.innerText = "Add Todo"
container.appendChild(addButton)

let todoList = document.createElement("ul");
container.appendChild(todoList);


function addTask(taskText){
  let listItem = document.createElement("li");
  
  let taskLabel = document.createElement("span")
  taskLabel.innerText = taskText
  
  let deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete Task"
  
  let doneButton = document.createElement("button")
  doneButton.innerText = "Done Button";
  
  deleteButton.addEventListener('click',()=>{
    todoList.removeChild(listItem)
  })
  
   doneButton.addEventListener('click',()=>{
    taskLabel.style.backgroundColor = "grey"
     taskLabel.style.textDecoration = "line-through"
  })
  
  listItem.appendChild(taskLabel);
  listItem.appendChild(doneButton);
  listItem.appendChild(deleteButton);
  
  todoList.prepend(listItem)
  
}

addButton.addEventListener('click',()=>{
  const text = inputEle.value.trim();
  inputEle.value = ""
  if(text){
    addTask(text);
  }
  
})
document.body.appendChild(container)



