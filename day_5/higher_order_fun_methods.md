Higher-order functions in JavaScript are functions that can do at least one of the following:

- Take one or more functions as arguments.
- Return a function as their result.

This allows higher-order functions to operate on functions, enabling powerful abstractions and more flexible, reusable code.

### Examples of Higher-Order Functions

1. **Passing a function as argument**

```js
function greet(name) {
  console.log(`Hello, ${name}`);
}

function callTwice(func) {
  func("Alice");
  func("Bob");
}

callTwice(greet);
// Output:
// Hello, Alice
// Hello, Bob
```

Here, `callTwice` is a higher-order function that accepts the function `greet` as an argument and calls it twice.

2. **Returning a function**

```js
function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = multiplier(2);
console.log(double(5));  // Output: 10
```

Here, `multiplier` returns a new function tailored by the given factor.

### Built-in Higher-Order Methods in JavaScript

- `Array.prototype.map()`, `filter()`, `reduce()`
- `forEach()` method
- Event listener registration functions like `addEventListener`

### Why Use Higher-Order Functions?

- They enable **code reuse** by abstracting common patterns.
- They support **functional programming** techniques.
- They make your code more **declarative** and easier to read and maintain.

In summary, higher-order functions treat functions as first-class values, allowing dynamic function manipulation and flexible program design.


The `forEach()` method in JavaScript is a higher-order method.

### Explanation:
- `forEach()` takes a **callback function** as an argument.
- It **executes this callback** on each element of the array.
- Since it accepts a function as a parameter, it qualifies as a higher-order function.

### Summary:
- **Higher-order functions** are functions that take other functions as arguments or return functions.
- `forEach()` is a built-in higher-order method because it takes a function as a callback to apply on every array element.
- Other array higher-order methods include `map()`, `filter()`, and `reduce()`.

This makes `forEach()` a flexible and expressive way to iterate over arrays by passing in custom callback logic.