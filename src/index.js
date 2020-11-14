import { Task } from './task';
/*eslint-disable */
import { reverse, display } from './revEdit';
import { editTask, hide } from './edit';
import { Project } from './project';
import { cont, addTask } from './addtask';
import { pcont, addProject } from './addproject';
export let task = [];
export let project = [{
  name: 'DEFAULT',
  task: task = [],
},
];
/* eslint-enable */
let indexe = null;
let projectDisplayed = project[0];

const econt = document.getElementById('content');
const createButton = document.getElementById('create');
const editButton = document.getElementById('edit');
const pcreateButton = document.getElementById('pcreate');
const openmodal = document.getElementById('opencreate');

const index = (el) => [...el.parentElement.children].indexOf(el) - 1;

const save = () => {
  const JSONReadymyproject = JSON.stringify(project);
  (localStorage.setItem('projects', JSONReadymyproject));
};

const fetch = () => {
  if (localStorage.getItem('projects') === null) {
    localStorage.setItem('projects', JSON.stringify([]));
    return JSON.parse(localStorage.projects);
  }

  return JSON.parse(localStorage.projects);
};

const projDisplayed = () => {
  document.getElementById('displayedProject').innerHTML = projectDisplayed.name.toUpperCase();
};


const validateFormTask = () => {
  const title = document.getElementById('orangeForm-title').value;
  const description = document.getElementById('orangeForm-description').value;
  const dueDate = document.getElementById('orangeForm-date').value;
  const priority = document.getElementById('orangeForm-priority').value;
  if (title === '' || description === '' || dueDate === '' || priority === '') {
    return false;
  }
  return true;
};


const validateProject = () => {
  const name = document.getElementById('defaultForm-name').value;
  if (name === '') {
    return false;
  }
  return true;
};


const rendertask = () => {
  cont.innerHTML = '';
  for (let i = 0; i < task.length; i += 1) {
    const { title } = task[i];
    const { description } = task[i];
    const { dueDate } = task[i];
    const { priority } = task[i];
    addTask(title, description, dueDate, priority);
  }
};

const openTask = (e) => {
  if (e.target.className === 'proj') {
    const element = e.target;
    const ind = index(element);
    task = project[ind].task;
    projectDisplayed = project[ind];
    rendertask();
    projDisplayed();
  }
};


const create = () => {
  const title = document.getElementById('orangeForm-title').value;
  const description = document.getElementById('orangeForm-description').value;
  const dueDate = document.getElementById('orangeForm-date').value;
  const priority = document.getElementById('orangeForm-priority').value;
  const newTask = new Task(title, description, dueDate, priority);
  if (validateFormTask()) {
    task.push(newTask);
    addTask(title, description, dueDate, priority);
    save();
  }
};

const modifyTask = () => {
  const title = document.getElementById('orangeForm-title').value;
  const description = document.getElementById('orangeForm-description').value;
  const dueDate = document.getElementById('orangeForm-date').value;
  const priority = document.getElementById('orangeForm-priority').value;
  task[indexe].title = title;
  task[indexe].description = description;
  task[indexe].dueDate = dueDate;
  task[indexe].priority = priority;
  save();
  rendertask();
};

const Pcreate = () => {
  const name = document.getElementById('defaultForm-name').value;
  const newProject = new Project(name);
  if (validateProject()) {
    project.push(newProject);
    addProject(name);
    save();
  }
};


const deleteTask = (e) => {
  if (e.target.className === 'btn bbd') {
    const element = e.target.parentElement.parentElement;
    let ind = index(element);
    ind += 1;
    /*eslint-disable */
    if (confirm('delete')) {
      cont.removeChild(element);
      task.splice(ind, 1);
      save();
    }
  }
  /* eslint-enable */
};

const EditTask = (e) => {
  if (e.target.className === 'btn btn-default btn-rounded btn-info mb-4') {
    const element = e.target.parentElement.parentElement.parentElement.parentElement.parentElement;
    let ind = index(element);
    ind += 1;
    indexe = ind;
    editTask(ind);
  }
};


const renderproject = () => {
  for (let i = 0; i < project.length; i += 1) {
    const { name } = project[i];
    addProject(name);
  }
};
const savedProject = fetch();

if (savedProject.length > 0) {
  project = savedProject;
}


renderproject();
projDisplayed();
rendertask();
task = projectDisplayed.task;


openmodal.addEventListener('click', reverse);
createButton.addEventListener('click', create);
editButton.addEventListener('click', modifyTask);
pcont.addEventListener('click', openTask);
pcreateButton.addEventListener('click', Pcreate);
cont.addEventListener('click', deleteTask);
econt.addEventListener('click', EditTask);
