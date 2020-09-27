import { task } from './index';

export const hide = document.getElementById('create');
const display = document.getElementById('edit');
export const editTask = (index) => {
  hide.style.display = 'none';
  display.style.display = 'block';
  document.getElementById('orangeForm-title').value = task[index].title;
  document.getElementById('orangeForm-description').value = task[index].descriptions;
  document.getElementById('orangeForm-date').value = task[index].dueDate;
  document.getElementById('orangeForm-priority').value = task[index].priority;
  document.getElementById('headd').innerHTML = `EDIT: ${task[index].title}`;
};