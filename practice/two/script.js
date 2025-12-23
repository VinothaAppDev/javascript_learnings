let btn = document.querySelector(".submit-btn");
let name = document.querySelector(".name");
let price = document.querySelector(".price");
let availability = document.querySelector(".availability");
let table = document.querySelector(".table tbody");

function addProduct(){
  let rowElement = document.createElement("tr");
  let NamedataElement = document.createElement("td");
  NamedataElement.innerText = name.value;
  rowElement.append(NamedataElement);
  let PricedataElement = document.createElement("td");
  PricedataElement.innerText = price.value;
  rowElement.append(PricedataElement);
  let AvailabilitydataElement = document.createElement("td");
  AvailabilitydataElement.innerText = availability.value;
  rowElement.append(AvailabilitydataElement);
  table.append(rowElement);
}

// btn.onclick = addProduct();
btn.addEventListener('click', addProduct);
