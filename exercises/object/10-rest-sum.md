
Write a function named `restSum` that accepts all incoming parameters and sums them.

**Hint**: Use rest parameter syntax!

Examples:

```js
restSum(3,5,6); // => 14
restSum(1, 2, 3, 4, 5, 6, 7, 8, 9); // => 45
restSum(0); // => 0
```


<details>

  <summary>answer</summary>

  ```js
function restSum(...otherNums) {
  return otherNums.reduce((accum, ele)=>accum+ele,0)
}
  ```
</details>
