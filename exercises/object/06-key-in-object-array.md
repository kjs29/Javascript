# 7/2(o)

Write a function `keyInObjectArray(objArray, keyString)` that takes in an array of 
objects as the first parameter and a string as the second. The `keyInObjectArray` 
will return `true` if any of the objects contains the `keyString` as a key within them, and 
`false` if not.


Examples:

```js
let objArray = [
    { name: "Rupert" },
    { age: 42 },
    { planet: "Earth", system: "Milky Way" }
];

console.log(keyInObjectArray(objArray, 'planet')); // => true
console.log(keyInObjectArray(objArray, 'age')); // => true
console.log(keyInObjectArray(objArray, 'food')); // => false
console.log(keyInObjectArray(objArray, 'animal')); // => false
```


<details>

  <summary>answer</summary>

  ```js

function keyInObjectArray(objArray, keyString) {
  /*
  1. create an empty array
  1.iteratte through objArray
    a. create a variable eachObj
    b. if keyString is not in eachObj, false
  */
  for (let i=0;i<objArray.length;i++) {
      let eachObj = objArray[i];
      if (keyString in eachObj) {
        return true;
    }
  }
  return false;
}
  ```
</details>


<details>

  <summary>answer</summary>

```js

function keyInObjectArray(arr, string) {
    for (let obj of arr) {
        if (Object.keys(obj).includes(string)) {
            return true;
        }
    }
    return false;
}

```
</details>
