
Write a function `minValueCallback` that accepts an array and an optional callback as arguments.

If a callback is not passed in, then the function should return the smallest value in the array. 

If a callback is passed in, then the function should return the result of the smallest value being passed into the given callback.

Examples:

```js
console.log(minValueCallback([64, 25, 49, 9, 100]));             // 9
console.log(minValueCallback([64, 25, 49, 9, 100], Math.sqrt));  // 3
```


<details>

  <summary>answer</summary>
  
  ```js
  let findSmallest = function(array) {
      let answer = array.reduce((accum, ele)=> {
          if (ele < accum) {
              accum = ele;
          } 
          return accum;
      })
      return answer;
  }

  let minValueCallback = function(array, cb) {
      let answer = findSmallest(array);
      if (cb) {
          return cb(answer);
      } else {
          return answer;
      }
  };


  ```
</details>
