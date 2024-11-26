const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!"

const para1 = document.createElement("p");
para1.textContent = "Hey I'm red!";
para1.style = "color:red";

const h3_2 = document.createElement("h3");
h3_2.textContent = "I'm a blue h3!";
h3_2.style = "color:blue";

const div_2 = document.createElement("div");
div_2.style.backgroundColor="pink";
div_2.style.borderColor="black";
div_2.style.borderStyle="solid";
div_2.style.borderWidth="2px";

const h3_3 = document.createElement("h1");
h3_3.textContent = "I'm in a div";

const para2 = document.createElement("p");
para2.textContent = "Me too!";

div_2.appendChild(h3_3);
div_2.appendChild(para2);

container.appendChild(content);
container.appendChild(para1);
container.appendChild(h3_2);
container.appendChild(div_2)