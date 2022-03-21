/*Add the following elements to the container using ONLY JavaScript and the DOM methods shown above.

a <p> with red text that says “Hey I’m red!”
an <h3> with blue text that says “I’m a blue h3!”
a <div> with a black border and pink background color with the following elements inside of it:
another <h1> that says “I’m in a div”
a <p> that says “ME TOO!”
Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.*/

const container = document.getElementById("container");
const newPara = document.createElement("p");
newPara.textContent = "Hey, I'm red!";
container.appendChild(newPara);
newPara.style.color = "red";

const h3 = document.createElement("h3");
h3.textContent = "I'm a blue h3";
h3.style.color = "blue";
container.appendChild(h3);

const newDiv = document.createElement("div");
newDiv.style.border = "black";
newDiv.style.backgroundColor = "pink";
const h1 = document.createElement("h1");
newDiv.appendChild(h1);
h1.textContent = "I'm a div";
const newPara2 = document.createElement("p");
newPara2.textContent = "ME TOO!";
newDiv.appendChild(newPara2);
container.appendChild(newDiv);
