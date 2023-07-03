# 7/2(o)

Write a function called `keysInObject(obj)` that takes in an object and returns 
an array of all the keys within that Object.

Do this in two ways by

1. using a `for...in` loop

2. using `Object.keys`

Examples:

```js
let animals = {dog: 'Wolfie', cat: 'Jet', bison: 'Bilbo'}
let foods = {apple: 'tart', lemon: 'sour', mango: 'sweet'}

console.log(keysInObject(animals)); // ["dog", "cat", "bison"]
console.log(keysInObject(foods)); // ["apple", "lemon", "mango"]
```

<details>
  <summary>answer</summary>
  

  <details>
    <summary>for .. in</summary>
    
```js
function keysInObject(obj) {
      
  let answer = [];
  
  for (let key in obj) {
    answer.push(key);
  }
  
  return answer;
}
```
    
  </details>

  <details>
    <summary>Object.keys</summary>
    
```js
function keysInObject(obj) {
  
  return Object.keys(obj);
}
```
    
  </details>
</details>
