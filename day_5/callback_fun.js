function hello(){
    return "hello";
}

function hai(){
    return "hai";
}

function withName(name,callback){
    console.log(callback(),name);
}

withName("vinotha", hello);         // hello vinotha
withName("vinotha", hai);           // hai vinotha

// A callback function in JavaScript is a normal function passed as an argument to another function, which is then executed inside that outer function.
// with traditional function definition of arrow function ...