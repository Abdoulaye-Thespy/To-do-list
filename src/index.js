import {Task} from './task';
import {cont, addTask} from './addtask';

export let task = [];
export let project = [];
 const createButton = document.getElementById('create');
 const pcreateButton = document.getElementById('pcreate');
 
 createButton.onclick = function create () {
  const title = document.getElementById('orangeForm-title').value;
  const description = document.getElementById('orangeForm-description').value;
  const dueDate = document.getElementById('orangeForm-date').value;
  const priority = document.getElementById('orangeForm-priority').value;
  const newTask = new Task(title, description, dueDate, priority);
  console.log(newTask);
  console.log(task);
  task.push(newTask);
  addTask(title, description, dueDate, priority);
 }
 
  pcreateButton.onclick = function Pcreate () {
  const name = document.getElementById('orangeForm-title').value;
  console.log("project");
 
 }

const rendertask =() => {
    cont.innerHTML='';
  for (let i = 0; i <task.length; i++) {
  const { title } = task[i];
  const { description } = task[i];
  const { dueDate } = task[i];
  const { priority } = task[i];
  addTask(title, description, dueDate, priority);
}
}

if (task.length!=0){
    rendertask();
}
// render(title, description, dueDate, priority);
// render(title, description, dueDate, priority);
// render(title, description, dueDate, priority);
// render(title, description, dueDate, priority);
// render(title, description, dueDate, priority);
// render(title, description, dueDate, priority);
// render(title, description, dueDate, priority);
// render(title, description, dueDate, priority);
// render(title, description, dueDate, priority);