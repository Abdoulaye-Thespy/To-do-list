!function(e){var t={};function n(o){if(t[o])return t[o].exports;var c=t[o]={i:o,l:!1,exports:{}};return e[o].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(o,c,function(t){return e[t]}.bind(null,c));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function o(e,t,n,o){this.title=e,this.descriptions=t,this.dueDate=n,this.priority=o}function c(e){this.name=e,this.task=[]}n.r(t);const a=document.getElementById("conten"),r=(e,t,n,o)=>{const c=document.createElement("div");c.className="col-3 task",a.appendChild(c);const r=document.createElement("div");r.className="card",c.appendChild(r);const d=document.createElement("a");d.className="btn bbd",d.appendChild(document.createTextNode("X")),r.appendChild(d);const l=document.createElement("div");l.className="card-body",r.appendChild(l);const i=document.createElement("h4");i.className="card-title",i.appendChild(document.createTextNode("TASK TITLE: "+e)),l.appendChild(i);const s=document.createElement("p");s.className="card-text des",s.appendChild(document.createTextNode("DESCRIPTION: "+t)),l.appendChild(s);const m=document.createElement("p");m.className="card-text",m.appendChild(document.createTextNode("DUE DATE: "+n)),l.appendChild(m);const u=document.createElement("h4");u.className="card-title",u.appendChild(document.createTextNode(" PRIORITY: "+o)),l.appendChild(u);const p=document.createElement("div");l.appendChild(p),p.className="editBtn",p.innerHTML='        <div class="text-center">\n          <a href="" class="btn btn-default btn-rounded btn-info mb-4" data-toggle="modal" data-target="#modalRegisterForm">\n        EDIT</a>\n        </div>'},d=document.getElementById("pcont");function l(e){const t=document.createElement("h4");t.className="proj",t.appendChild(document.createTextNode(e)),d.appendChild(t)}let i=[],s=[{name:"DEFAULT",task:i=[]}];function m(e){return[...e.parentElement.children].indexOf(e)-1}function u(){const e=JSON.stringify(s);localStorage.setItem("projects",e)}const p=null===localStorage.getItem("projects")?(localStorage.setItem("projects",JSON.stringify([])),JSON.parse(localStorage.projects)):JSON.parse(localStorage.projects);p.length>0&&(s=p);let f=s[0];i=f.task;const g=()=>{document.getElementById("displayedProject").innerHTML=f.name.toUpperCase()},h=document.getElementById("create"),y=document.getElementById("pcreate"),E=()=>{a.innerHTML="";for(let e=0;e<i.length;e++){const{title:t}=i[e],{description:n}=i[e],{dueDate:o}=i[e],{priority:c}=i[e];r(t,n,o,c)}};d.onclick=function(e){if("proj"===e.target.className){const t=m(e.target);i=s[t].task,f=s[t],E(),g()}},h.onclick=function(){const e=document.getElementById("orangeForm-title").value,t=document.getElementById("orangeForm-description").value,n=document.getElementById("orangeForm-date").value,c=document.getElementById("orangeForm-priority").value,a=new o(e,t,n,c);i.push(a),r(e,t,n,c),u()},y.onclick=function(){const e=document.getElementById("defaultForm-name").value,t=new c(e);s.push(t),l(e),u()};(()=>{for(let e=0;e<s.length;e++){const{name:t}=s[e];l(t)}})(),g(),E(),a.onclick=function(e){if("btn bbd"===e.target.className){const t=e.target.parentElement.parentElement;let n=m(t);n+=1,confirm("delete")&&(a.removeChild(t),i.splice(n,1),u())}}}]);