
Write a function `none` that accepts an array and a callback as arguments.

The function should call the callback for each element of the array, passing in the element. 

The function should return true if all elements of the array result to false when passed into the callback. 

Otherwise, the method should return false.

Examples:

```js
let result1 = none(['ruby', 'topaz', 'opal'], function(w) {
    return w.includes('e');
});
console.log(result1);   // true

let result2 = none(['ruby', 'topaz', 'sapphire', 'opal'], function(w) {
    return w.includes('e');
});
console.log(result2);   // false

let result3 = none([4, 5, 7, 1], function(n) {
    return n < 0;
});
console.log(result3);   // true

let result4 = none([4, -5, 7, -1], function(n) {
    return n < 0;
});
console.log(result4);   // false
```




<details>

  <summary>answer</summary>
  
  ```js

let none = function(array, cb) {
    /*
    if there is only one true => return false
    */
    for (let i=0;i<array.length;i++) {
        let el = array[i];
        if (cb(el)) {
            return false;
        }
    }
    return true;
};
  ```
</details>
