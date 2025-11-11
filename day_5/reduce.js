let nums = [1,2,3,4,5,6,7,8,9,0];

const sumOfNums = nums.reduce(
    (result, current) => {
        return result + current;
    }
);

console.log(sumOfNums);                 // 45

const maxValue = nums.reduce(
    (prev, current) => {
        return prev > current ? prev : current;
    }
);

console.log(maxValue);                  // 9