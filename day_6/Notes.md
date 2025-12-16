## firstChild Property

Node.firstChild returns the first child node (any type: text, element, comment) or null if none exist.[^2]

## Quick Examples

```js
// firstChild example
const p = document.querySelector('p');
p.firstChild; // Returns first child (may be #text from whitespace)
```

## Key Notes

- Use `Element.firstElementChild` instead of `firstChild` to skip text/comment nodes.[^2]
- Widely supported since 2015 across browsers.[^2][^1]
- Helps traverse DOM structure and conditional logic based on node kind.[^1]
