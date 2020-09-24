import {Task} from './task';
import {Project} from './project';
import {cont, addTask} from './addtask';
import {pcon, addProject} from './addproject';

export let task = [];
export let project = [{
    name: "DEFAULT",
    task: task=[]
}
];
 const createButton = document.getElementById('create');
 const pcreateButton = document.getElementById('pcreate');
 
 createButton.onclick = function create () {
  const title = document.getElementById('orangeForm-title').value;
  const description = document.getElementById('orangeForm-description').value;
  const dueDate = document.getElementById('orangeForm-date').value;
  const priority = document.getElementById('orangeForm-priority').value;
  const newTask = new Task(title, description, dueDate, priority);
  task.push(newTask);
  addTask(title, description, dueDate, priority);
 }
 
  pcreateButton.onclick = function Pcreate () {
  const name = document.getElementById('defaultForm-name').value;
  const newProject = new Project(name);
  project.push(newProject);
  addProject(name);
 
 }
const renderproject =() => {
    cont.innerHTML='';
  for (let i = 0; i <project.length; i++) {
  const { name } = project[i];
  addProject(name);
}
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
    
       renderproject();
// render(title, description, dueDate, priority);
// render(title, description, dueDate, priority);
// render(title, description, dueDate, priority);
// render(title, description, dueDate, priority);
// render(title, description, dueDate, priority);
// render(title, description, dueDate, priority);
// render(title, description, dueDate, priority);
// render(title, description, dueDate, priority);
// render(title, description, dueDate, priority);