// comment and uncomment each part to grab the concepts easily ...

// Attribute
// -----------------------------------------------

let p = document.querySelectorAll("p");
console.log(p);
let attValue = p[0].getAttribute("class");
console.log(attValue);
p[1].setAttribute("class", attValue);

// Style
// -------------------------------------------------

let box = document.querySelector("p");
console.log(box.style);           // shows the inline css styles

box.style.backgroundColor = "red";    // remember the double quotes

box.innerText = "vinotha";
box.style.color = "white";
box.style.fontSize = "23px";
box.style.fontWeight = "bold";
// box.style.visibility = "hidden";

// comment and uncomment each line and have fun !!!

// insert elements 
// -------------------------------------------------
// 2 step process
// step 1: node creation
// step 2: insertion
// -------------------------------------------------
let button = document.createElement("button");
button.innerText = "submit";

let node = document.querySelector("p");
// p[1].append(button);
// p[1].prepend(button);
// p[1].after(button);
// p[1].before(button);

// you can also do .....
document.querySelector("body").append(button);

let title = document.createElement("h1");
title.innerHTML = "<i>Final Page</i>"
document.querySelector("body").prepend(title);

// remove elements 
// -------------------------------------------------
button.remove();
let para = document.querySelector("p");
para.remove();