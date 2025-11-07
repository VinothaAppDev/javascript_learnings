// print even numbers from 0 to 100
console.log("Printing even numbers from 0 to 100:");
for(let number=2; number<=100; number+=2){
    console.log(number);
}

//Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value.

let number = 25;
let userNumber;
do{
    userNumber = prompt("Enter a number: ");
}
while(userNumber!=number);
console.log("You guessed right !!!");