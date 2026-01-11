class human{
  constructor(){
    console.log(`hello from parent`);
  }
  updateName(name){
    this.name = name;
  }
  eat(){
    console.log(`eat`);
  }
  sleep(){
    console.log(`sleep`);
  }
}

class engineer extends human{
  work(){
    console.log(`problem solver`);
  }
}

class doctor extends human{
  work(){
    console.log(`treat patience`);
  }
}

let obj = new doctor();
obj.updateName('vinotha');