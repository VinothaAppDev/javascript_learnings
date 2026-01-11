class student{
  constructor(){
    console.log(`object created successfully !!!`);
  }
}

let obj1 = new student();
let obj2 = new student();
let obj3 = new student();
let obj4 = new student();
let obj5 = new student();
let obj6 = new student();


class emp{
  constructor(name){
    this.name = name;
    console.log(`Hello ${name}`);
  }
  // constructor(){
  //   // this.name = name;
  //   console.log(`Hello`);    // A class may only have one constructor
  // }
}

let emp1 = new emp('vinotha');
let emp2 = new emp('Gowtham');
let emp3 = new emp('Bharathi');
let emp4 = new emp();