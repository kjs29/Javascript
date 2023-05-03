

In order to get this expected output,

how can I write the function `bindToAnArg`?

```js
function bindToAnArg(func, arg) {
  
}

function add(num1, num2) {
  return num1 + num2;
}

const addTwo = bindToAnArg(add, 2);
const addThree = bindToAnArg(add, 3);

const twoPlusSix = addTwo(6);
const twoPlusSeven = addTwo(7);
const threePlusSeven = addThree(7);
const threePlusEight = addThree(8);
console.log({
  twoPlusSix,     // => 8
  twoPlusSeven,   // => 9
  threePlusSeven, // => 10
  threePlusEight  // => 11
});
```