// Question 1
// -------------------------------------------------
let newButton = document.createElement("button");
newButton.innerText = "click me";
newButton.style.backgroundColor = "red";
newButton.style.color = "white";
document.querySelector("body").prepend(newButton);


// Question 2
// -------------------------------------------------
let box = document.querySelector(".box");
box.getAttribute("class");
box.setAttribute("class", "newBox");

// try this and learn about class list
let content = document.querySelector(".one");
content.setAttribute("class", "two");

// instead of overwriting the class one -- dead and changed to two
// we can append so that we can get the properties of class one and two in the element
// we can do this with class list
content.classList.add("box");
// learn more about this in the notes (note.md)