import { Task } from './task';
import { Project } from './project';
import { cont, addTask } from './addtask';
import { pcont, addProject } from './addproject';

let task = [];
let project = [{
  name: 'DEFAULT',
  task: task = [],
},
];

function index(el) {
  return [...el.parentElement.children].indexOf(el) - 1;
}

function save() {
  const JSONReadymyproject = JSON.stringify(project);
  (localStorage.setItem('projects', JSONReadymyproject));
}

function fetch() {
  if (localStorage.getItem('projects') === null) {
    localStorage.setItem('projects', JSON.stringify([]));
    return JSON.parse(localStorage.projects);
  }

  return JSON.parse(localStorage.projects);
}

 const savedProject = fetch();

 if (savedProject.length > 0)
 {
  project = savedProject;
 }
let projectDisplayed = project[0];
task = projectDisplayed;


const projDisplayed = () => {
  document.getElementById('displayedProject').innerHTML = projectDisplayed.name.toUpperCase();
};

const createButton = document.getElementById('create');
const pcreateButton = document.getElementById('pcreate');

const rendertask = () => {
  cont.innerHTML = '';
  for (let i = 0; i < task.length; i++) {
    const { title } = task[i];
    const { description } = task[i];
    const { dueDate } = task[i];
    const { priority } = task[i];
    addTask(title, description, dueDate, priority);
  }
};

pcont.onclick = function openTask(e) {
  if (e.target.className === 'proj') {
    const element = e.target;
    const ind = index(element);
    task = project[ind].task;
    projectDisplayed = project[ind];
    rendertask();
    projDisplayed();
  }
};


createButton.onclick = function create() {
  const title = document.getElementById('orangeForm-title').value;
  const description = document.getElementById('orangeForm-description').value;
  const dueDate = document.getElementById('orangeForm-date').value;
  const priority = document.getElementById('orangeForm-priority').value;
  const newTask = new Task(title, description, dueDate, priority);
  task.push(newTask);
  addTask(title, description, dueDate, priority);
  save();
};

pcreateButton.onclick = function Pcreate() {
  const name = document.getElementById('defaultForm-name').value;
  const newProject = new Project(name);
  project.push(newProject);
  addProject(name);
  save();
};

const renderproject = () => {
  for (let i = 0; i < project.length; i++) {
    const { name } = project[i];
    addProject(name);
  }
};

renderproject();
projDisplayed();

cont.onclick = function deleteTask(e) {
  if (e.target.className === 'btn bbd') {
  const element = e.target.parentElement.parentElement;
  let ind = index(element);
  ind = ind + 1
    if (confirm('delete')) {
      cont.removeChild(element);
      task.splice(ind, 1);
     save();
    }
  }
};

cont.onclick = function viewEdit(e) {
  // if (e.target.className === 'btn bbd') {
  // const element = e.target.parentElement.parentElement;
  // let ind = index(element);
  // ind = ind + 1
  //   if (confirm('delete')) {
  //     cont.removeChild(element);
  //     task.splice(ind, 1);
  //    save();
  //   }
  // }
  console.log('oaoaoao');
};
