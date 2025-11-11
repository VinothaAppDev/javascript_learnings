let nums = [1,2,3,4,5,6,7,8,9,0];

let evenNums = nums.filter(
    (value) => {
        return value % 2 === 0;
    }
);

console.log(evenNums);          // [ 2, 4, 6, 8, 0 ]


let numsDivisibleBYThree = nums.filter(
    (value) => {
        return value % 3 === 0;
    }
);

console.log(numsDivisibleBYThree);          // [ 3, 6, 9, 0 ]

// original array is unaffected

console.log(nums);                          // [1,2,3,4,5,6,7,8,9,0]
