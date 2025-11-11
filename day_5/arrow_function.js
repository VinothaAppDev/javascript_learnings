// function sum(a,b){
//     console.log(a+b);
// }

// arrow function
const sum = (a,b) => {
    console.log(`hello, a is ${a} and b is ${b}`);
}

/*
const is recommended for arrow functions because functions are not usually meant to be reassigned.

Arrow functions behave like any other value assigned to a variable, so the keyword follows normal JS variable declaration rules.

The syntax requires an assignment (const sum = ...), so just writing sum = (a,b) => ... without declaration keyword in strict mode will throw an error.
*/

sum(90,9);                        // hello, a is 90 and b is 9

// function print(){
//     console.log("hello");
// }

const print = () => console.log("hello");

print();                            // hello

const greet = () => "Hello!";       // No parameters, returns "Hello!"
const square = x => x * x;          // One parameter, returns square of x
const add = (a, b) => a + b;        // Multiple parameters, returns sum
const log = (a, b) => {              // Multiple statements with braces
  console.log(a);
  console.log(b);
};

// here the greet, square , ... are function variables. these are variables that stores a function definition in them...