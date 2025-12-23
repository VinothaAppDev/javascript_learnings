let kittenAnimalFact = "All kittens are born with blue eyes. Their permanent eye color typically begins to develop around seven weeks of age as melanin production starts.";
let puppyAnimalFact = "Puppies need a massive amount of rest to develop their brains and bodies, often sleeping between 15 and 20 hours a day.";
let kittenImage = "kitten.jpg";
let puppyImage = "puppy.jpeg";

let container = document.querySelector(".container");
let puppyBtn = document.querySelector(".puppy-btn");
let kittenBtn = document.querySelector(".kitten-btn");

puppyBtn.addEventListener("click", () => {
  container.firstElementChild.setAttribute("src", puppyImage);
  container.children[1].innerText = puppyAnimalFact;
});

kittenBtn.addEventListener("click", () => {
  container.firstElementChild.setAttribute("src", kittenImage);
  container.children[1].innerText = kittenAnimalFact;
});