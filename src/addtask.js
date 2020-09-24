export let cont =document.getElementById('conten');
export function addTask(title, description, dueDate, priority) {
  const box = document.createElement('div');
  box.className = 'col-3 task';
  cont.appendChild(box);
  const card = document.createElement('div');
  card.className = 'card';
  box.appendChild(card);
  const del = document.createElement('a');
  del.className = 'btn bbd';
  del.appendChild(document.createTextNode('X'));
  card.appendChild(del);
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
}