# function sum(a,b){

    console.log(a+b);
    }

// arrow function
const sum = (a,b) => {
console.log(`hello, a is ${a} and b is ${b}`);
}

why error

when below code doesn't thrown error

function fun(){

    console.log("hellooooo...");
    }
    fun();                                  // hellooooo...

function fun(name){
console.log(`hello, ${name}`);
}

fun();
fun("vinotha");

The error occurs because you are trying to declare two different functions with the same name `sum` in the same scope using two different syntaxes: one as a traditional function and the other as an arrow function assigned to a `const` variable.

### Why This Throws an Error:

- `function sum(a,b) { ... }` declares a function named `sum` in the current scope.
- `const sum = (a,b) => { ... }` declares a constant variable named `sum`.
- You cannot redeclare a `const` variable in the same scope, so trying to redefine `sum` as an arrow function causes a syntax error about duplicate declaration.


### Why Your `fun` Example Works Differently:

- When you write two function declarations with the same name like this:

```js
function fun() {
  console.log("hellooooo...");
}

function fun(name) {
  console.log(`hello, ${name}`);
}
```

Only the **last** function declaration (`fun(name)`) remains, effectively **overwriting** the previous one without error. This is called **function hoisting** and replacement in JavaScript function declarations, but not variable redeclaration.

### Summary:

| Scenario | Allowed? | Reason |
| :-- | :-- | :-- |
| Multiple `function` declarations with same name | Yes, latest replaces previous | Function declarations are hoisted and overwritten |
| `const` variable redeclaration | No | `const` variables cannot be redeclared in same scope |

So, function declarations with same name overwrite each other silently but declaring a `const` or `let` variable twice with the same name causes a syntax error.

If you want to use arrow functions instead of traditional ones, assign them unique variable names or avoid redeclaration.

Example:

```js
function sum(a,b) {
  console.log(a+b);
}

const sumArrow = (a,b) => {
  console.log(`hello, a is ${a} and b is ${b}`);
}
```

This avoids the error