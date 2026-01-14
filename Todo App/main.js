const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");



// doomka meesha aan ka wacday

document.addEventListener("DOMContentLoaded", loadTasks)
 function loadTasks(){
    const tasks = getTasksFromLocalStorage()
    tasks.forEach(task => {
        addTaskTodom(task);  
    });

 }

 
todoForm.addEventListener("submit", addTask);

function addTask(e) {
  e.preventDefault();
  const taskText = todoInput.value.trim();

  if (taskText !== "") {
    const task = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };

    addTaskToDom(task);
    todoInput.value = "";
    savetaskToLocalStorage(task)
  }
}


//  doom ka ayaan  halkaan   bilaabanaya 
function addTaskToDom(task) {
  const li = document.createElement("li");
  li.className = `todo-item`;
  li.dataset.id = task.id;

  // li.innerHTML =

  li.innerHTML = `
    <input type="checkbox" class="complete-checkbox">
    <span class="task">${task.text}</span>
    <button class="edit-btn"> Edit</button>
    <button class="delete-btn"> Delete</button>
    
    `;

  todoList.appendChild(li);
}


//  Locle Storage  aya ka bilaabanaya 

function savetaskToLocalStorage(task){
     const oldTask = getTasksFromLocalStorage()
     oldTask.push(task)

   localStorage.setItem("tasks",JSON.stringify(oldTask))

}


function getTasksFromLocalStorage(){
  const oldTask = JSON.parse(localStorage.getItem("tasks")) || []
  return oldTask
}