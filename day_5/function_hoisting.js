function voteEntry(name, age){
    console.log(`${name}, ${age}`);
}

voteEntry("ram", 55);                   // ram, 55
voteEntry('bharathi');                  // bharathi, undefined

function voteEntry(name, age){
    console.log(name * age);            // ---> NaN not a number
}

voteEntry("vinotha", 88);

/*
but the whole output when i run this code is
NaN
NaN
NaN
all three calls give NaN
*/

// REASON

/*
This is how function hoisting and overwriting works:

Function declarations are hoisted to the top of their scope.

The last function declaration with the same name in the code "wins."

All calls to the function, regardless of position in the code, refer to this last definition.

Hence, all outputs are NaN because the second function version is the one actually invoked for every call.
*/

