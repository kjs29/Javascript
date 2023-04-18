
Write a function `firstIndex` that accepts an array and a callback as arguments.

The function should return the index of the first element of the array that results in true when passed into the callback. 

If no elements of the array result in true, then the function should return -1.

Examples:

```js
let result1 = firstIndex([3, 7, 8, 10], function (n) {
    return n % 2 === 0;
});
console.log(result1); // 2

let result2 = firstIndex(['dog', 'cat', 'tree'], function (s) {
    return s.length === 3;
});
console.log(result2); // 0

let result3 = firstIndex(['canine', 'feline', 'tree'], function (s) {
    return s.length === 3;
});
console.log(result3); // -1
```


<details>

  <summary>answer</summary>
  
  ```js
let firstIndex = function(array, cb) {
    /**
     * 
     * 1. iterate through an array
     * 2. assign element to a variable
     * 3. if cb(element) is true, return the i
     * 4. if nothing is true, return -1
     */
    for (let i=0;i<array.length;i++) {
        let el = array[i];
        if (cb(el)) {
            return i;
        }
    }
    return -1;
};

  ```
</details>
