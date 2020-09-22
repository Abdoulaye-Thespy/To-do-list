import {Task} from './task';

export let task = [{
    title : "Razak",
    description: "newttask",
    dueDate: "12/12/12",
    priority: "medium"
},
{
    title : "Razak",
    description: "newttask",
    dueDate: "12/12/12",
    priority: "medium"
},
{
    title : "Razak",
    description: "newttask",
    dueDate: "12/12/12",
    priority: "medium"
},
{
    title : "Razak",
    description: "newttask",
    dueDate: "12/12/12",
    priority: "medium"
},
{
    title : "Razak",
    description: "newttask",
    dueDate: "12/12/12",
    priority: "medium"
},

]
 let cont=document.getElementById('conten');
 const createButton = document.getElementById('create');
 
 
 createButton.onclick = function create () {
  const title = document.getElementById('orangeForm-title').value;
  const description = document.getElementById('orangeForm-description').value;
  const dueDate = document.getElementById('orangeForm-date').value;
  const priority = document.getElementById('orangeForm-priority').value;
  const newTask = new Task(title, description, dueDate, priority);
  console.log(newTask);
  task.push(newTask);
  renderPage();
 }

function addTask(title, description, dueDate, priority) {
  const box = document.createElement('div');
  box.className = 'col-md-3 task';
  cont.appendChild(box);
  const card = document.createElement('div');
  card.className = 'card';
  box.appendChild(card);
  const cardBody = document.createElement('div');
  cardBody.className = 'card-body';
  card.appendChild(cardBody);
  const cardTitle = document.createElement('h3');
  cardTitle.className = 'card-title';
  cardTitle.appendChild(document.createTextNode(title));
  cardBody.appendChild(cardTitle);
  const bookDescription = document.createElement('p');
  bookDescription.className = 'card-text';
  bookDescription.appendChild(document.createTextNode(`DUE DATE: ${dueDate}`));
  cardBody.appendChild(bookDescription);
  const numPage = document.createElement('h4');
  numPage.className = 'card-title';
  numPage.appendChild(document.createTextNode(` PRIORITY: ${priority}`));
  cardBody.appendChild(numPage);
  const del = document.createElement('a');
  del.className = 'btn btn-danger bbd';
  del.appendChild(document.createTextNode('DELETE'));
  cardBody.appendChild(del);
  const readOrNot = document.createElement('a');
  readOrNot.className = 'btn btn-info';
  readOrNot.appendChild(document.createTextNode('VIEW/EDIT'));
  cardBody.appendChild(readOrNot);
}

const rendertask =() => {
  for (let i = 0; i <task.length; i++) {
  const { title } = task[i];
  const { description } = task[i];
  const { dueDate } = task[i];
  const { priority } = task[i];
  addTask(title, description, dueDate, priority);
}
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