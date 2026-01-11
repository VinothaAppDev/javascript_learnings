const student = {
  name: "vinotha",
  initial: "R",
  age: 22,
  yearOfPassOut: 2025,
  printName(){
    console.log(`Name is ${this.name}`);
  },
  printAge: function (){
    console.log(`Age is ${this.age}`);
  },
  dummyPrint(){
    console.log(`Student class`);
  }
};

const arthy = {
  name: "Arthy"
}

const mouli = {
  name: "moulika",
  dummyPrint(){
    console.log(`moulika class`);   
  }
}

arthy.__proto__ = student;
mouli.__proto__ = student;