// const randomNum = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
// console.log(randomNum); // Output: a random integer between 1 and 10   

// const randomNum = Math.floor(Math.random() * (3 - 0 + 0)) + 0;
// console.log(randomNum);

let rock = document.querySelector("#stone");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");

let playerScore = document.querySelector("#playerScore");
let compScore = document.querySelector("#compScore");

let result_box = document.querySelector("#res-box");

let player = 0;
let computer = 0;

const resultGenerator = (playerChoice) => {
  let compChoice = Math.floor(Math.random() * (3 - 0 + 0)) + 0;
  if(playerChoice == compChoice){
    result_box.innerText = "Draw";
    result_box.style.backgroundColor = "rgba(104, 71, 71, 1)";
    console.log("Draw");
  }
  else if(playerChoice == 0 && compChoice == 1){
    computer++;
    compScore.innerText = computer;
    result_box.innerText = "you lost !! paper defeat rock";
    result_box.style.backgroundColor = "red";
    console.log("computer win !! paper defeat rock");
  }
  else if(playerChoice == 0 && compChoice == 2){
    player++;
    playerScore.innerText = player;
    result_box.innerText = "You win !! Stone defeat scissors";
    result_box.style.backgroundColor = "green";
    console.log("You win !! Stone defeat scissors");
  }
  else if(playerChoice == 1 && compChoice == 0){
    player++;
    playerScore.innerText = player;
    result_box.innerText = "You win !! paper defeat rock";
    result_box.style.backgroundColor = "green";
    console.log("You win !! paper defeat rock");
  }
  else if(playerChoice == 1 && compChoice == 2){
    computer++;
    compScore.innerText = computer;
    result_box.innerText = "you lost !! scissors defeat paper";
    result_box.style.backgroundColor = "red";
    console.log("computer win !! scissors defeat paper");
  }
  else if(playerChoice == 2 && compChoice == 1){
    player++;
    playerScore.innerText = player;
    result_box.innerText = "You win !! scissors defeat paper";
    result_box.style.backgroundColor = "green";
    console.log("You win !! scissors defeat paper");
  }
  else if(playerChoice == 2 && compChoice == 0){
    computer++;
    compScore.innerText = computer;
    result_box.innerText = "you lost !! Stone defeat scissors";
    result_box.style.backgroundColor = "red";
    console.log("computer win !! Stone defeat scissors");
  }
};

rock.addEventListener("click", () => resultGenerator(0));
paper.addEventListener("click", () => resultGenerator(1));
scissors.addEventListener("click", () => resultGenerator(2));