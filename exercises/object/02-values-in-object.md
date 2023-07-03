
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
  

  <details>
    <summary>for .. in</summary>
    
```js
function valuesInObject(obj) {
      
  let answer = [];
  
  for (let key in obj) {
    answer.push(obj[key]);
  }
  
  return answer;
}
```
    
  </details>

  <details>
    <summary>Object.values</summary>
    
```js
function valuesInObject(obj) {
  
  return Object.values(obj);
}
```
    
  </details>
</details>
