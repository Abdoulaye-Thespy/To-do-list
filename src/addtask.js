export const cont = document.getElementById('conten');
export const addTask = (title, description, dueDate, priority) => {
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
  const cardTitle = document.createElement('h4');
  cardTitle.className = 'card-title';
  cardTitle.appendChild(document.createTextNode(`TASK TITLE: ${title}`));
  cardBody.appendChild(cardTitle);

  const taskDescription = document.createElement('p');
  taskDescription.className = 'card-text des';
  taskDescription.appendChild(document.createTextNode(`DESCRIPTION: ${description}`));
  cardBody.appendChild(taskDescription);


  const taskDue = document.createElement('p');
  taskDue.className = 'card-text';
  taskDue.appendChild(document.createTextNode(`DUE DATE: ${dueDate}`));
  cardBody.appendChild(taskDue);


  const numPage = document.createElement('h4');
  numPage.className = 'card-title';
  numPage.appendChild(document.createTextNode(` PRIORITY: ${priority}`));
  cardBody.appendChild(numPage);
  const editBtn = document.createElement('div');
  cardBody.appendChild(editBtn);
  editBtn.className = 'editBtn';
  editBtn.innerHTML = `        <div class="text-center">
          <a href="" class="btn btn-default btn-rounded btn-info mb-4" data-toggle="modal" data-target="#modalRegisterForm">
        EDIT</a>
        </div>`;
};