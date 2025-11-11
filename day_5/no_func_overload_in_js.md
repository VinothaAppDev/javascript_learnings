<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# function fun(){

    console.log("hellooooo...");
    }

fun();                                  // hellooooo...

function fun(name){
console.log(`hello, ${name}`);
}

fun();
fun("vinotha");

is there no function overloading in js ?

JavaScript does not have native function overloading like Java or C++. If multiple functions are declared with the same name, JavaScript simply uses the last definition, overwriting any previous ones. In your example, only the final fun(name) function will exist, so all calls to fun() will use that version. If you call fun() with no parameters, name will be undefined. If you call fun("vinotha"), name will be "vinotha".[^2][^11]

### Function Overloading Details

- In languages like Java or C++, functions with the same name but different parameter lists exist simultaneously. JavaScript does not support this—it matches functions by name, not by signature. Only the latest definition is kept.[^11][^2]
- This is why fun() in your sample is overwritten by fun(name), and any calls to fun() will use the latest version—name will either be undefined or have the passed value.


### Workarounds and Simulating Overloading

To mimic overloading in JavaScript, you can:

- Check the number and type of arguments inside a single function, and decide what to do based on those values (using arguments.length, typeof, or ES6 rest parameters).
- Use default and optional parameters.

Example:

```javascript
function fun(name) {
    if (typeof name === "undefined") {
        console.log("hellooooo...");
    } else {
        console.log(`hello, ${name}`);
    }
}

fun();            // hellooooo...
fun("vinotha");   // hello, vinotha
```

This manually mimics the behavior of overloading.[^5][^2]

### Summary Table

| Feature | Java/C++ | JavaScript |
| :-- | :-- | :-- |
| Multiple same name | Allowed (different params) | Only the last one is kept; earlier ones are replaced[^2][^11] |
| Overloading Supported? | Yes | No, but can be simulated inside a single function[^2][^5] |

So, JavaScript does not support native function overloading—the last defined function with a name "wins." You can manually check arguments to simulate similar behavior if needed.[^2][^5][^11]
<span style="display:none">[^1][^10][^12][^13][^14][^15][^16][^3][^4][^6][^7][^8][^9]</span>

<div align="center">⁂</div>

[^1]: https://stackoverflow.com/questions/456177/function-overloading-in-javascript-best-practices

[^2]: https://www.geeksforgeeks.org/javascript/function-overloading-in-javascript/

[^3]: https://dev.to/joelnet/simulated-function-overloading-in-javascript-1l0o

[^4]: https://www.programiz.com/javascript/examples/function-overloading

[^5]: https://docs.vultr.com/javascript/examples/perform-function-overloading

[^6]: https://www.youtube.com/watch?v=9PkkNlbsID0

[^7]: https://clouddevs.com/javascript/function-overloading-techniques/

[^8]: https://migom6.hashnode.dev/fun-with-functions

[^9]: https://www.reddit.com/r/learnjavascript/comments/tkrt7g/function_overloading_in_javascript/

[^10]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions

[^11]: https://www.c-sharpcorner.com/blogs/function-overloading-in-javascript

[^12]: https://www.gacbe.ac.in/pdf/ematerial/18BCS53C-U4.pdf

[^13]: https://www.scholarhat.com/tutorial/javascript/functions-in-javascript

[^14]: https://launchschool.com/books/javascript/read/functions

[^15]: https://www.youtube.com/watch?v=miKIcHJVS6Q

[^16]: https://dev.to/whoadarshpandya/enough-javascript-to-get-you-started-11-functions-g56

