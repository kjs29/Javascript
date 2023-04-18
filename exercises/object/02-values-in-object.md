
Write a function called `valuesInObject(obj)` that takes in an object and returns 
an array of all the values within that Object. 


Do this once using using a `for...in` loop and once using `Object.values`.


Examples:

```js
let animals = {dog: "Wolfie", cat: "Jet", bison: "Bilbo"}
let foods = {apple: "tart", lemon: "sour", mango: "sweet"}
valuesInObject(animals); // => ["Wolfie", "Jet", "Bilbo"]
valuesInObject(foods); // => ["tart", "sour", "sweet"]

```

<details>

  <summary>answer</summary>

  ```js

function valuesInObject(obj) {
  // return Object.values(obj);
  let empty =[];
  for (key in obj) {
    empty.push(obj[key]);
  }
  return empty;
}


  ```
</details>
