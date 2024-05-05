let fullName = "Mark Despain";
const h1 = document.querySelector("h1");
h1.innerHTML += "<em>" + fullName; + "</em>";

const section = document.createElement("section");
const h2 = document.createElement("h2");
h2.textContent = "DOM Basics";
const p = document.createElement("p");
p.textContent = "This was added through JavaScript";


section.appendChild(h2);
section.appendChild(p);
document.body.appendChild(section);

// document.querySelector("h1").innerHTML += "<em>" + fullName + "</em>";