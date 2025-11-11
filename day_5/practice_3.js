// We are given array of marks of students. Filter our of the marks of students that scored 90+.

let marks = [23,39,20,94,90,92];
let marksAbove90 = marks.filter(
    (value) => {
        return value>90;
    }
);
console.log(marksAbove90);              // [ 94, 92 ]

/*
Take a number n as input from user. Create an array of numbers from 1 to n.
Use the reduce method to calculate sum of all numbers in the array.
Use the reduce method to calculate product of all numbers in the array.
*/

let n = prompt("Enter a value n: ");
let numbers = [];
for(let i=1; i<=n; i++){
    numbers.push(i);
}
console.log(n);

let sum = numbers.reduce(
    (res, value) => {
        return res+value;
    }
);

console.log(`the sum is ${sum}`);

let product = numbers.reduce(
    (res, value) => {
        return res*value;
    }
);

console.log(`the product is ${product}`)  // actually it is the factorial of n