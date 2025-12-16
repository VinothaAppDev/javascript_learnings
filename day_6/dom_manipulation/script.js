let header = document.getElementsByClassName("header");
console.dir(header);
// this return a collection which is similar to an array of all the elements information with this class name

let books = document.getElementById("books");
console.dir(books);

let books_er = document.getElementById("boo");
console.dir(books_er);
// if no id exits it return null

let header_er = document.getElementsByClassName("head");
console.dir(header_er);
// if no class exits it return a empty collection
 
// selecting with tag name (p, h1, ....)
// ---------------------------------------------
let paras = document.getElementsByTagName("P");
console.log(paras);
//this also returns a collection....


// Query Selector
// --------------------------------------------------
let firstElementTag = document.querySelector("p");
console.log(firstElementTag);
// select the first element in the document that matches a specified CSS selector(class or id or tag). It returns the matched element or null if no element is found
let firstElementID = document.querySelector("#books");
console.log(firstElementID);
let firstElementClass = document.querySelector(".header");
console.log(firstElementClass);

// to select all the elements matches the given selector
// use querySelectorAll function --> which returns a NodeList
let allElements = document.querySelectorAll("P");
console.log(allElements);

// important properties
// ---------------------------------------------------

let content = document.querySelector("#books");
// 1. tagName 
console.log(content.tagName);   // DIV
// 2. children
console.log(content.children);   // collection(4)
// 3. firstChild
console.log(content.firstChild);  // go and read
// 4. lastChild
console.log(content.lastChild);  // go and read
// 5. innertext
console.log(content.innerText);  
// // List of Books
// Travel

// Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis neque nulla sapiente, incidunt, harum porro nihil laudantium explicabo aut ad tempora accusantium adipisci. Sapiente labore quidem iusto quae sunt. Voluptates.

// Travel

// Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis neque nulla sapiente, incidunt, harum porro nihil laudantium explicabo aut ad tempora accusantium adipisci. Sapiente labore quidem iusto quae sunt. Voluptates.

// Travel

// Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis neque nulla sapiente, incidunt, harum porro nihil laudantium explicabo aut ad tempora accusantium adipisci. Sapiente labore quidem iusto quae sunt. Voluptates.


// 6. innerhtml
console.log(content.innerHTML);  

// <h2>List of Books</h2>
//     <section class="book-item">
//       <h3>Travel</h3>
//       <p>
//         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis neque nulla sapiente, incidunt, harum porro nihil laudantium explicabo aut ad tempora accusantium adipisci. Sapiente labore quidem iusto quae sunt. Voluptates.
//       </p>
//     </section>
//     <section class="book-item">
//       <h3>Travel</h3>
//       <p>
//         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis neque nulla sapiente, incidunt, harum porro nihil laudantium explicabo aut ad tempora accusantium adipisci. Sapiente labore quidem iusto quae sunt. Voluptates.
//       </p>
//     </section>
//     <section class="book-item">
//       <h3>Travel</h3>
//       <p>
//         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis neque nulla sapiente, incidunt, harum porro nihil laudantium explicabo aut ad tempora accusantium adipisci. Sapiente labore quidem iusto quae sunt. Voluptates.
//       </p>
//     </section>

// small activity
// ============================================================
let activity = document.querySelector(".activity");

// activity.innerHTML = "<i>changed !!!</i>";
// activity.innerText = "hello";

// textContent
// ------------------------------------------------------------
let box = document.querySelector(".propertyBox");
console.log(box.innerText);       // output: ''
console.log(box.textContent);
// hidden text content
// Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, praesentium quisquam omnis fugiat blanditiis nemo eos impedit a quaerat vitae eaque nulla eum cumque sequi eius voluptas quas doloribus quam.


console.log(box.innerHTML);
// <h3>hidden text content</h3>
// <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, praesentium quisquam omnis fugiat blanditiis nemo eos impedit a quaerat vitae eaque nulla eum cumque sequi eius voluptas quas doloribus quam.</p>

