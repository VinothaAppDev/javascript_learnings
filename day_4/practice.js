//Array
//Qs. For a given array with marks of students -> [85, 97, 44, 37, 76, 60]
//Find the average marks of the entire class.

let students = [85, 97, 44, 37, 76, 60];
let average = 0;
for(let mark of students){
    average += mark;
}
average /= students.length;
console.log(average);                               // 66.5

//using template literal
console.log(`The average is: ${average}`);          // The average is: 66.5


// Qs. For a given array with prices of 5 items -> [250, 645, 300, 900, 50]
// All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.

let items = [250, 645, 300, 900, 50];

let discount = 0.1;

for(let price of items){
    price = 0;
}
/* The for...of loop creates a copy of each element in the array and assigns it to the loop variable (price). Modifying this variable does not change the elements in the array itself. */

console.log(items);     // [ 250, 645, 300, 900, 50 ]

for(let i=0; i<items.length; i++){
    items[i] = items[i] * 0.9;
}

console.log(items);         // [ 225, 580.5, 270, 810, 45 ]

// Create an array to store companies -> “Bloomberg”,“Microsoft”,“Uber”,“Google”,“IBM”,“Netflix”
/*
a. Remove the first company from the array

b. Remove Uber & Add Ola in its place

c. Add Amazon at the end
*/

let companies = ['Bloomberg', 'Microsoft', 'Uber', 'Google', 'IBM', 'Netflix'];
// Remove the first company from the array
companies.shift();
console.log(companies);             // [ 'Microsoft', 'Uber', 'Google', 'IBM', 'Netflix' ]
// Remove Uber & Add Ola in its place
companies.splice(1,1,'Ola');
console.log(companies);             // [ 'Microsoft', 'Ola', 'Google', 'IBM', 'Netflix' ]
// Add Amazon at the end
companies.push('Amazon');
console.log(companies);           // [ 'Microsoft', 'Ola', 'Google', 'IBM', 'Netflix', 'Amazon' ]