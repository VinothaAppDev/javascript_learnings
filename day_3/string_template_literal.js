let name = 'vinotha';
let fam = 'ram';
console.log("Length of name:", name.length);
console.log("first element in fam is", fam[0]);
fam[0] = 'R';               // it will not change String are IMMUTABLE !!!!
console.log(fam);

//template literal
let aStatement = `This is a statement`;
const student = {
    name: "vinotha",
    grade: 'A',
    marks: 99,
    isPlaced: true,
    isStartedCompany: true,
    cgpa: 8.4
}
for(let key in student){
    console.log(`Key = ${key} Value = ${student[key]}`);
}
//we can bing var in this string literal

let age = 90;
let user = 'oldman';
let statement = `this is ${user} and the age is ${age}`;
console.log(statement);

let a=90, b=90;
console.log(`The addition is ${a + b}`);
//we can have variable or expressions in placeholders


//escape sequences
let Name = "vinotha\tR";
console.log(Name);
console.log(Name.length);
let name_in_literal = `vinotha\nR`;
console.log(name_in_literal);