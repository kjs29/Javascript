
Write a recursive function called `sumToN` that takes in a number and returns
the sum of all the numbers from 0 to that number. Return null for any input
number below 0.

Examples:

```js
sumToN(5) // returns 15
sumToN(1)  // returns 1
sumToN(9)  // returns 45
sumToN(-8)  // returns null
```

<details>

  <summary>answer</summary>

  ```js
  function sumToN(num) {
    if (num < 0) {
      return null;
    }
    let sum = 0;
    if (num === 1) {
      return 1;
    }
    return sum + sumToN(num-1);
  }
  ```  
</details>
