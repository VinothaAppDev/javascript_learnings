// Question 1
// ----------------------------------------------------------

let content = document.querySelector("h2");
console.log(content);
// content.innerText = content.innerText.concat(" from Apna College students"); 
// (or)
content.innerText = content.innerText + " from Apna College students";



// Question 2
// ----------------------------------------------------------

let boxes = document.querySelectorAll(".box");
// boxes[0].innerText = "First Box";
// boxes[1].innerText = "Second Box";
// boxes[2].innerText = "Third Box";

// (or)

let number = 1;
for(let box of boxes){
  let value = prompt(`Enter the value for Box ${number}`);
  number = number + 1;
  box.innerText = value;
}
