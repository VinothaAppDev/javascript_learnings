let number = prompt("Enter a number: ");
if(number%5 == 0){
    console.log("It is divisible by 5");
}
else{
    console.log("It is not divisible by 5");
}

let score = prompt("Enter your score: ");
let grade;
if(score>=90 && score<=100) grade = 'A';
else if(score<90 && score>=70)  grade = 'B';
else if(score<70 && score>=60)  grade = 'C';
else if(score<60 && score>=50)  grade = 'D';
else    grade = 'E';
console.log("Your grade is",grade);
