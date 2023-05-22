Here’s a code that asks the user for two numbers and shows their sum.

It works incorrectly. The output in the example below is 12 (for default prompt values).

Why? Fix it. The result should be 3.

```js
let first = prompt('First number?', 1);
let second = prompt('Second number?', 2);

alert(first + second);
```

<details>

  <summary>answer</summary>

```js
let first = prompt('First number?', 1);
let second = prompt('Second number?', 2);

alert(+first + +second);
```
  

</details>

