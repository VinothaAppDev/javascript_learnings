console.log("i am vinotha and this is around day 5");
console.log("its my first day");
// //1
// {
//     let a = 10;
//     console.log("First block:",a);
// }
// let a = 11;
// console.log("global block:",a);

// {
//     let a = 100;
//     console.log("second block:",a);
//     //how can i print 11 in a here...
// }
// console.log(a);

// //2
// {
//     var a = 10;
//     console.log("First block:",a);
// }
// var a = 11;
// console.log("global block:",a);

// {
//     var a = 100;
//     console.log("second block:",a);
//     //how can i print 11 in a here...
// }
// console.log(a);


let name = "vinotha";
let initial = 'ramadass';
let multiLine = `
i
am
vinotha
from
tiruppur`;

console.log(name);
console.log(initial);
console.log(multiLine);

const student = {
    fullName : "vinotha ramadass",
    age : 22,
    cgpa : 8.3,
    isPass : true
};

student.age = 60;
student["fullName"] = 'aravind';

console.log(student.age);
console.log(student["age"]);
console.log(student['age']);
console.log(student.fullName);


//practice
const flipKartProduct = {
    name : "Parker Jotter Standard CT Ball Pen (Black)",
    rating: 4,
    price: 270,
    offerPercentage: 5,
};

console.log(flipKartProduct);
console.log(typeof flipKartProduct);

const instaProfile = {
    userName: 'VinothaRamadass',
    isFollow: true,
    followers: 569000,
    following: 234
};

console.log(instaProfile);
console.log(typeof instaProfile);
console.log(typeof instaProfile.followers);
console.log(typeof instaProfile.isFollow);
console.log(typeof instaProfile.userName);