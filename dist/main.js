!function(e){var t={};function n(o){if(t[o])return t[o].exports;var c=t[o]={i:o,l:!1,exports:{}};return e[o].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(o,c,function(t){return e[t]}.bind(null,c));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function o(e,t,n,o){this.title=e,this.descriptions=t,this.dueDate=n,this.priority=o}function c(e){this.name=e,this.task=[]}n.r(t);const r=document.getElementById("conten");function a(e,t,n,o){const c=document.createElement("div");c.className="col-3 task",r.appendChild(c);const a=document.createElement("div");a.className="card",c.appendChild(a);const l=document.createElement("a");l.className="btn bbd",l.appendChild(document.createTextNode("X")),a.appendChild(l);const d=document.createElement("div");d.className="card-body",a.appendChild(d);const i=document.createElement("h3");i.className="card-title",i.appendChild(document.createTextNode(e)),d.appendChild(i);const s=document.createElement("p");s.className="card-text",s.appendChild(document.createTextNode("DUE DATE: "+n)),d.appendChild(s);const u=document.createElement("h4");u.className="card-title",u.appendChild(document.createTextNode(" PRIORITY: "+o)),d.appendChild(u)}const l=document.getElementById("pcont");function d(e){const t=document.createElement("h4");t.className="proj",t.appendChild(document.createTextNode(e)),l.appendChild(t)}let i=[],s=[{name:"DEFAULT",task:i=[]}];function u(){const e=JSON.stringify(s);localStorage.setItem("projects",e)}const m=null===localStorage.getItem("projects")?(localStorage.setItem("projects",JSON.stringify([])),JSON.parse(localStorage.projects)):JSON.parse(localStorage.projects);m.length>0&&(s=m);let p=s[0].name;i=p;const f=()=>{document.getElementById("displayedProject").innerHTML=p.toUpperCase()},g=document.getElementById("create"),h=document.getElementById("pcreate");l.onclick=function(e){if("proj"===e.target.className){const n=e.target,o=[...(t=n).parentElement.children].indexOf(t)-1;i=s[o].task,p=s[o].name,(()=>{r.innerHTML="";for(let e=0;e<i.length;e++){const{title:t}=i[e],{description:n}=i[e],{dueDate:o}=i[e],{priority:c}=i[e];a(t,0,o,c)}})(),f()}var t},g.onclick=function(){const e=document.getElementById("orangeForm-title").value,t=document.getElementById("orangeForm-description").value,n=document.getElementById("orangeForm-date").value,c=document.getElementById("orangeForm-priority").value,r=new o(e,t,n,c);i.push(r),a(e,0,n,c),u()},h.onclick=function(){const e=document.getElementById("defaultForm-name").value,t=new c(e);s.push(t),d(e),u()};(()=>{for(let e=0;e<s.length;e++){const{name:t}=s[e];d(t)}})(),f(),r.onclick=function(e){if("btn bbd"===e.target.className&&confirm("delete")){const t=e.target.parentElement.parentElement;r.removeChild(t)}}}]);