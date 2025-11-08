let names = ['vinotha', 'Ramadass'];

// push function
names.push(33);
console.log(names);                 // [ 'vinotha', 'Ramadass', 33 ]

names.push('Bharathi', 90, 'Gowtham');

console.log(names);                 // [ 'vinotha', 'Ramadass', 33, 'Bharathi', 90, 'Gowtham' ]

//pop 

names.pop();
console.log(names);                 // [ 'vinotha', 'Ramadass', 33, 'Bharathi', 90 ]

// this pop function delete from end and returns the deleted value.. lets see

let deleteVal = names.pop();
console.log(deleteVal, 'is deleted');             // 90 is deleted

//toString

let details = names.toString();
console.log(details);               // vinotha,Ramadass,33,Bharathi,90 --> it is a single string
console.log(names)                  // [ 'vinotha', 'Ramadass', 33, 'Bharathi' ]

// concat

let a = ['hello', 'hai', 'welcome'];
let b = ['vanakkam', 'varuga'];

let c = a.concat(b);
console.log(c);                     // [ 'hello', 'hai', 'welcome', 'vanakkam', 'varuga' ]
console.log(a);                     // [ 'hello', 'hai', 'welcome' ]
console.log(b);                     // [ 'vanakkam', 'varuga' ]

c = a.concat(b, names);
console.log(c);                     // ['hello', 'hai', 'welcome', 'vanakkam', 'varuga', 'vinotha', 'Ramadass', 33, 'Bharathi']

//unshift -- add to start
let books = ['harryPotter', 'ant', 'hero', 'dream'];
books.unshift('domain');
console.log(books);                 // [ 'domain', 'harryPotter', 'ant', 'hero', 'dream' ]


//shift --- delete first and return
let deletedBook = books.shift();
console.log(`${deletedBook} is deleted`);   // domain is deleted

//slice -- start to end before (the end index element is not included)
books.push("marvel", 'home', 'time travel', 'tamil stories', 'comedies');
console.log(books);

/*
[  'harryPotter', 'ant', 'hero', 'dream', 'marvel', 'home', 'time travel', 'tamil stories', 'comedies' ]
*/

let pieceOfBooks = books.slice(2,6);
console.log(pieceOfBooks);              // [ 'hero', 'dream', 'marvel', 'home' ]
console.log(books);
/*
[  'harryPotter', 'ant', 'hero', 'dream', 'marvel', 'home', 'time travel', 'tamil stories', 'comedies' ]
*/

console.log(pieceOfBooks.slice())       // [ 'hero', 'dream', 'marvel', 'home' ]
console.log(pieceOfBooks.slice(1,));    // [ 'dream', 'marvel', 'home' ]
// console.log(pieceOfBooks.slice(,3));    // error

//splice method  -- updates the original string

console.log(books);
/*
[  'harryPotter', 'ant', 'hero', 'dream', 'marvel', 'home', 'time travel', 'tamil stories', 'comedies' ]
*/

books.splice(2, 2, 'vinotha heree...');
console.log(books);
/*
[
  'harryPotter',
  'ant',
  'vinotha heree...',
  'marvel',
  'home',
  'time travel',
  'tamil stories',
  'comedies'
]
  */

books.splice(4,10);
console.log(books);
// [ 'harryPotter', 'ant', 'vinotha heree...', 'marvel' ]