export const pcont = document.getElementById('pcont');
export const addProject =(name) => {
  const box = document.createElement('h4');
  box.className = 'proj';
  box.appendChild(document.createTextNode(name));
  pcont.appendChild(box);
}