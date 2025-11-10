<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# NaN in js

what
and in which cases

NaN in JavaScript stands for "Not-a-Number." It is a special numeric value that indicates an operation or value is not a valid number. NaN typically occurs in situations where a mathematical operation fails or where a value cannot be meaningfully converted to a number.

Common cases where NaN appears:

- Performing arithmetic operations with non-numeric strings, e.g., `"hello" * 5` results in NaN.
- Trying to convert non-numeric strings to numbers using `Number()` or `parseInt()`.
- Result of undefined or invalid mathematical operations like `0/0` or `Math.sqrt(-1)`.
- Using arithmetic on `undefined` or other non-numeric types that are coerced to numbers.

Key facts about NaN:

- NaN is a number type, but it represents an invalid number.
- It is the only JavaScript value that is not equal to itself (`NaN !== NaN` is true).
- Use `isNaN(value)` or `Number.isNaN(value)` to check for NaN values.
- NaN propagates: any operation involving NaN usually results in NaN.

Example:

```js
console.log("hello" * 5);  // NaN
console.log(Number("abc")); // NaN
console.log(0 / 0);         // NaN
console.log(Math.sqrt(-1)); // NaN
```

NaN indicates errors or unexpected input during numeric computations and usually signals a problem in data or logic that should be handled or checked.

