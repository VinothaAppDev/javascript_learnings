class parent{
  hello(){
    console.log("hello from parent");
  }
}

class child extends parent{

}

let childObj = new child();

// *If Child & Parent have same method, child’s
// method will be used. [Method Overriding]