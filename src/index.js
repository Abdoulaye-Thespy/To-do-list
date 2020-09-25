import {Task} from './task';
import {Project} from './project';
import {cont, addTask} from './addtask';
import {pcont, addProject} from './addproject';
export let task = []
export let project = [{
    name: "DEFAULT",
    task: task=[]
}
];

let savedProject = fetch();
console.log(project);
project = savedProject;

console.log(savedProject);
console.log(project);

let projectDisplayed = project[0].name;
task = projectDisplayed;


const projDisplayed = () => {
 document.getElementById('displayedProject').innerHTML = projectDisplayed.toUpperCase();
}

 const createButton = document.getElementById('create');
 const pcreateButton = document.getElementById('pcreate');
 
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
 
 pcont.onclick  = function openTask(e) {
     if (e.target.className === 'proj'){
         const element = e.target;
         const ind=index(element);
         task = project[ind].task;
         projectDisplayed = project[ind].name;
         rendertask();
         projDisplayed();
     }
     
 };
 
function index(el) {
  return [...el.parentElement.children].indexOf(el)-1;
}
 
 createButton.onclick = function create () {
  const title = document.getElementById('orangeForm-title').value;
  const description = document.getElementById('orangeForm-description').value;
  const dueDate = document.getElementById('orangeForm-date').value;
  const priority = document.getElementById('orangeForm-priority').value;
  const newTask = new Task(title, description, dueDate, priority);
  task.push(newTask);
  addTask(title, description, dueDate, priority);
  save();
 }
 
  pcreateButton.onclick = function Pcreate () {
  const name = document.getElementById('defaultForm-name').value;
  const newProject = new Project(name);
  project.push(newProject);
  addProject(name);
  save();
 
 }
const renderproject =() => {
  for (let i = 0; i <project.length; i++) {
  const { name } = project[i];
  addProject(name);
}
}
renderproject();
projDisplayed();

cont.onclick = function deleteTask (e) {
 if (e.target.className ==='btn bbd')
 {
  if (confirm('delete'))
  {
  const element = e.target.parentElement.parentElement;
  cont.removeChild(element);
 console.log(element);
  }
 }
}

function save() {
  const JSONReadymyproject = JSON.stringify(project);
  (localStorage.setItem('projects', JSONReadymyproject));
}

function fetch() {
  if (localStorage.getItem('projects') == null) {
    localStorage.setItem('projects', JSON.stringify([]));
    return JSON.parse(localStorage.projects);
  }

  return JSON.parse(localStorage.projects);
}