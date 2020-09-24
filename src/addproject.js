export let pcont =document.getElementById('pcont');
export function addProject(name) {
  const box = document.createElement('h4');
  box.className = 'proj';
  box.appendChild(document.createTextNode(name));
  pcont.appendChild(box);
}