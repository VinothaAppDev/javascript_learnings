function PrintHello(){
    console.log("Welcome to function ...");
}

PrintHello();
PrintHello();

function Hello(name){                   
    console.log(`Welcome to function, ${name}`);
}

// In JavaScript, when you define a function like function Hello(name), the parameter name is declared as part of the function definition


Hello("vinotha");                           // Welcome to function, vinotha
Hello();                                    // Welcome to function, Undefined

// you dont need to declare
// function Hello(let name){                             // error            
//     console.log(`Welcome to function, ${name}`);
// }

function voteEntry(name, age){
    console.log(`${name}, ${age}`);
}

voteEntry("ram", 55);                   // ram, 55
voteEntry('bharathi');                  // bharathi, undefined

function voteEntry(name, age){
    console.log(name * age);            // ---> NaN not a number 
}

voteEntry("vinotha", 88);               // ---> NaN not a number


/// there is NO function overload in js refer that md file


function fun(){
    console.log("hellooooo...");
}

fun();                                  // hellooooo...

function fun(name){
    console.log(`hello, ${name}`);
}

fun();                                  // 
fun("vinotha");

