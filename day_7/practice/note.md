<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# quick notes about classlist and about its important methods in js

Element.classList is a read-only property that returns a live DOMTokenList of all CSS classes on an element, making it easy to add, remove, or toggle classes dynamically.

## Key Methods

- **add('class1', 'class2')**: Adds one or more classes (ignores duplicates).[^1][^2]
- **remove('class1', 'class2')**: Removes specified classes.[^2][^1]
- **toggle('class')**: Adds class if missing, removes if present (optional second param for force add/remove).[^3][^1]
- **contains('class')**: Returns true/false if class exists.[^5][^1]
- **replace('old', 'new')**: Swaps one class for another.[^2]


## Quick Examples

```js
const elem = document.querySelector('.box');
elem.classList.add('active', 'highlight');     // <div class="box active highlight">
elem.classList.remove('highlight');            // <div class="box active">
elem.classList.toggle('active');               // Toggles active class
if (elem.classList.contains('active')) { ... } // Check existence
elem.classList.replace('box', 'panel');        // Replaces class
```


## Usage Tips

- Works on any Element (not Node), live updates reflect immediately.[^2]
- Multiple classes: `add(...classes)` or `remove(...classes)`.[^2]
- Perfect for toggling styles, themes, or states without direct className manipulation.[^3]
<span style="display:none">[^10][^4][^6][^7][^8][^9]</span>
