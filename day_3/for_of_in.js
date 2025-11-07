let name = 'vinotha';
// for(let letter of name){
//     console.log(letter);
// }

for(let letter in name){
    console.log(letter);
}

const student = {
    name: "vinotha",
    grade: 'A',
    marks: 99,
    isPlaced: true,
    isStartedCompany: true,
    cgpa: 8.4
};

// for(let key in student){
//     console.log("Key =", key, "Value =", student.key);
// }

for(let key in student){
    console.log("Key =", key, "Value =", student[key]);
}