if(NaN === NaN){
    console.log("correct");
}
else{
    console.log("Incorrect");           // incorrect
}




if(undefined === undefined){
    console.log("correct");             // correct
}
else{
    console.log("Incorrect");           
}



/*
In JavaScript, the comparison NaN === NaN is false. This is because NaN (Not-a-Number) is defined as a special numeric value that is never equal to anything, including itself. This is an intentional behavior to indicate an indeterminate or invalid number.

On the other hand, undefined === undefined evaluates to true because undefined is a primitive value and strictly equal to itself.

Summary:

NaN === NaN → false (NaN is never equal to itself)

undefined === undefined → true (undefined is equal to itself)

To check if a value is NaN, use Number.isNaN(value) or the fact that NaN is the only JavaScript value which is not equal to itself (value !== value is true only for NaN).

Example:

js
console.log(NaN === NaN);          // false
console.log(undefined === undefined);  // true
console.log(Number.isNaN(NaN));    // true
console.log(NaN !== NaN);          // true
This behavior helps distinguish NaN from other values in JavaScript.
*/