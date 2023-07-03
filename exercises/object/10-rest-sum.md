# 7/3(o)

Write a function named `restSum` that accepts all incoming parameters and sums them.

**Hint**: Use rest parameter syntax!

Examples:

```js
console.log(restSum(3,5,6)); // => 14
console.log(restSum(1, 2, 3, 4, 5, 6, 7, 8, 9)); // => 45
console.log(restSum(0)); // => 0
```


<details>

  <summary>answer</summary>

  ```js
  function restSum(...otherNums) {
      return otherNums.reduce((accum, ele) => accum + ele, 0);
  }
  ```
</details>


<details>

  <summary>answer</summary>

```js
function restSum(...rest) {
    let sum = 0;
    
    for (let each of rest) {
        sum += each;
    }

    return sum;
}

```

</details>
