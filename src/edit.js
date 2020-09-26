import {task} from './index';
export const editTask = (index) => {
	document.getElementById('orangeForm-title').value = task[index].title;
	document.getElementById('orangeForm-description').value = task[index].descriptions;
	document.getElementById('orangeForm-date').value = task[index].dueDate;
	document.getElementById('orangeForm-priority').value = task[index].priority;
	document.getElementById('headd').innerHTML = `EDIT: ${task[index].title}`;
	document.getElementById('create').innerHTML = `MODIFY AND SAVE`;
  
}