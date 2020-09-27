const hide = document.getElementById('create');
const display = document.getElementById('edit');
export const reverse = () => {
	 hide.style.display= "block";
	 display.style.display = "none";
	document.getElementById('orangeForm-title').value = "";
	document.getElementById('orangeForm-description').value = "";
	document.getElementById('orangeForm-date').value = "";
	document.getElementById('orangeForm-priority').value = "DEFAULT";
	document.getElementById('headd').innerHTML = `NEW TASK`;
  
}