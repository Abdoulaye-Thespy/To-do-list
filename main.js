!function(e){var t={};function n(o){if(t[o])return t[o].exports;var c=t[o]={i:o,l:!1,exports:{}};return e[o].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(o,c,function(t){return e[t]}.bind(null,c));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function o(e,t,n,o){this.title=e,this.descriptions=t,this.dueDate=n,this.priority=o}n.r(t),n.d(t,"task",(function(){return p})),n.d(t,"project",(function(){return g}));const c=document.getElementById("create"),d=document.getElementById("edit"),a=document.getElementById("create"),l=document.getElementById("edit");function r(e){this.name=e,this.task=[]}const i=document.getElementById("conten"),m=(e,t,n,o)=>{const c=document.createElement("div");c.className="col-3 task",i.appendChild(c);const d=document.createElement("div");d.className="card",c.appendChild(d);const a=document.createElement("a");a.className="btn bbd",a.appendChild(document.createTextNode("X")),d.appendChild(a);const l=document.createElement("div");l.className="card-body",d.appendChild(l);const r=document.createElement("h4");r.className="card-title",r.appendChild(document.createTextNode("TASK TITLE: "+e)),l.appendChild(r);const m=document.createElement("p");m.className="card-text des",m.appendChild(document.createTextNode("DESCRIPTION: "+t)),l.appendChild(m);const u=document.createElement("p");u.className="card-text",u.appendChild(document.createTextNode("DUE DATE: "+n)),l.appendChild(u);const s=document.createElement("h4");s.className="card-title",s.appendChild(document.createTextNode(" PRIORITY: "+o)),l.appendChild(s);const p=document.createElement("div");l.appendChild(p),p.className="editBtn",p.innerHTML='        <div class="text-center">\n          <a href="" class="btn btn-default btn-rounded btn-info mb-4" data-toggle="modal" data-target="#modalRegisterForm">\n        EDIT</a>\n        </div>'},u=document.getElementById("pcont");function s(e){const t=document.createElement("h4");t.className="proj",t.appendChild(document.createTextNode(e)),u.appendChild(t)}let p=[],g=[{name:"DEFAULT",task:p=[]}],y=null;const E=document.getElementById("content"),f=document.getElementById("create"),I=document.getElementById("edit"),h=document.getElementById("pcreate");function b(e){return[...e.parentElement.children].indexOf(e)-1}function v(){const e=JSON.stringify(g);localStorage.setItem("projects",e)}document.getElementById("opencreate").addEventListener("click",()=>{c.style.display="block",d.style.display="none",document.getElementById("orangeForm-title").value="",document.getElementById("orangeForm-description").value="",document.getElementById("orangeForm-date").value="",document.getElementById("orangeForm-priority").value="DEFAULT",document.getElementById("headd").innerHTML="NEW TASK"});const B=()=>{document.getElementById("displayedProject").innerHTML=C.name.toUpperCase()},N=()=>{i.innerHTML="";for(let e=0;e<p.length;e++){const{title:t}=p[e],{description:n}=p[e],{dueDate:o}=p[e],{priority:c}=p[e];m(t,n,o,c)}};u.onclick=function(e){if("proj"===e.target.className){const t=b(e.target);p=g[t].task,C=g[t],N(),B()}},f.onclick=function(e){const t=document.getElementById("orangeForm-title").value,n=document.getElementById("orangeForm-description").value,c=document.getElementById("orangeForm-date").value,d=document.getElementById("orangeForm-priority").value,a=new o(t,n,c,d);console.log(e.target),console.log("razak"),p.push(a),m(t,n,c,d),v()},I.onclick=function(){console.log("1111")},h.onclick=function(){const e=document.getElementById("defaultForm-name").value,t=new r(e);g.push(t),s(e),v()},i.onclick=function(e){if("btn bbd"===e.target.className){const t=e.target.parentElement.parentElement;let n=b(t);n+=1,confirm("delete")&&(i.removeChild(t),p.splice(n,1),v())}},E.onclick=function(e){if("btn btn-default btn-rounded btn-info mb-4"===e.target.className){const n=e.target.parentElement.parentElement.parentElement.parentElement.parentElement;let o=b(n);console.log(n),o+=1,y=o,t=o,a.style.display="none",l.style.display="block",document.getElementById("orangeForm-title").value=p[t].title,document.getElementById("orangeForm-description").value=p[t].descriptions,document.getElementById("orangeForm-date").value=p[t].dueDate,document.getElementById("orangeForm-priority").value=p[t].priority,document.getElementById("headd").innerHTML="EDIT: "+p[t].title,console.log(o)}var t};const T=null===localStorage.getItem("projects")?(localStorage.setItem("projects",JSON.stringify([])),JSON.parse(localStorage.projects)):JSON.parse(localStorage.projects);T.length>0&&(g=T);let C=g[0];p=C.task,(()=>{for(let e=0;e<g.length;e++){const{name:t}=g[e];s(t)}})(),B(),N()}]);