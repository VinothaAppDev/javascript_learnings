let nums = [1,2,3,4,5,6,7,8,9,0];

// Creates a new array with the results of some operation. The value its callback returns are used to form new array

let sqNums = nums.map(
    (value) => (value * value)
);

console.log(sqNums);
// [ 1,  4,  9, 16, 25, 36, 49, 64, 81,  0 ]

nums.map(
    (value) => {
        console.log(value);
    }
);

//  1 2 3 4 5 6 7 8 9 0

