let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let result = document.querySelector(".result");
let playerO = true;
let clickCount = 0;
const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8]
]

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if(box.innerText !== "")  return;
    if(playerO){
      box.innerText = "O";
      box.style.color = "darkblue";
      playerO = false;
    }
    else{
      box.innerText ="X";
      playerO = true;
    }
    // box.disabled = true;
    checkWinner();
  });
});

const checkWinner = () => {
    clickCount++;
    if(clickCount == 9 && result.innerText == ""){
      result.innerText = `😔 Draw 😒`;
          result.style.display = "block";
          disableAllBoxes();
          return;
    }
    for(pattern of winPatterns){
      // console.log(pattern);
      let box1 = boxes[pattern[0]].innerText;
      let box2 = boxes[pattern[1]].innerText;
      let box3 = boxes[pattern[2]].innerText;
      if(box1 == "" || box2 == "" || box3 == ""){
        continue;
      }
      if(box1 == box2){
        if(box2 == box3){
          result.innerText = `🎊 🎉 ${box1} is the winner 🎉 🎊`;
          result.style.display = "block";
          disableAllBoxes();
          return;
        }
      }
    }
};

// const disableAllBoxes = () => {
//   boxes.forEach((box) => {
//     box.removeEventListener("click");
//   })
// };

resetBtn.addEventListener("click", () =>{
  boxes.forEach((box) => {
    box.innerText = "";
    playerO = true;
    result.style.display = "none";
  });
});

