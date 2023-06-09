
Write a function `selectiveMap` that accepts an array and two callbacks as arguments.

The function should return a new array where elements are replaced with the results

of calling the second callback on the element only if calling the first callback on the element results in true. 

If calling the first callback on an element results
in false, then the element should not be changed in the new array.

Note that that you cannot use the Array `map` or `filter` methods to solve this
problem.

Examples:

```js
function isEven(n) {
    return n % 2 === 0;
}

function isPositive(n) {
    return n > 0;
}

function square(n) {
    return n * n;
}

function flipSign(n) {
    return n * -1;
}

console.log(selectiveMap([8, 5, 10, 4], isEven, square));
// [ 64, 5, 100, 16 ]

console.log(selectiveMap([-10, 4, 7, 6, -2, -9], isEven, flipSign));
// [ 10, -4, 7, -6, 2, -9 ]

console.log(selectiveMap([-10, 4, 7, 6, -2, -9], isPositive, square));
// [-10, 16, 49, 36, -2, -9]
```

<details>

  <summary>answer</summary>
  
  ```js
  let selectiveMap = function(array, cb1, cb2) {
      /*
      1. create an empty array for the result
      2. iterate through the array 
          a. assign the current element to a variable
          b. if result of cb1(ele) is not true, push the current element
          c. if true, push the result of cb2 in each iteration to array
      */
    let empty = [];
    for (let i=0;i<array.length;i++) {
        let el = array[i];
        if (cb1(el) === false) {
            empty.push(el);
        } else {
            empty.push(cb2(el,i,array));
        }
    }
    return empty;
  };
  ```

</details>
