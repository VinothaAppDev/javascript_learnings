class human{
  constructor(name){
    this.name = name;
  }
  eat(){
    console.log('eat');
  }
}

class engineer extends human{
  constructor(name, branch){
    super(name);
    this.branch = branch;
    console.log(`name = ${this.name}\nbrance = ${this.branch}`);
  }
  work(){
    // eat();    //error
    super.eat();
    console.log(`solve problems`);
  }
}

let obj1 = new engineer('vinotha','ECE');