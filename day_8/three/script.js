let btn = document.querySelector("button");
let body = document.querySelector("body");
btn.onmouseover = () => {
  btn.style.cursor = "pointer";
};
btn.onclick = () => {
  if(btn.innerText == "change to dark"){
    btn.style.backgroundColor = "white";
    btn.style.color = "black";
    btn.innerText = "change to Light";
    body.style.backgroundColor = "black";
  }
  else{
    btn.style.backgroundColor = "black";
    btn.style.color = "white";
    btn.innerText = "change to dark";
    body.style.backgroundColor = "white";
  }
}