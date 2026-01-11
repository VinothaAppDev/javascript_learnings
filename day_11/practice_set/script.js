class User{
  constructor(name, email){
    this.name = name;
    this.email = email;
  }
  viewData(){
    console.log(`Name: ${this.name}\nEmail: ${this.email}`);
  }
}

class Admin extends User{
  editData(name, email){
    this.name = name;
    this.email = email;
  }
}

let name = 'vinotha';
let email = 'vino@gmail.com';
let obj = new Admin(name, email);
obj.viewData();
/*
Name: vinotha
Email: vino@gmail.com
*/

obj.editData("vino","vino123@gmail.com");

obj.viewData();
/*
Name: vino
Email: vino123@gmail.com
*/