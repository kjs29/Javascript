# 7/3 (o)
Write a function `arrayConverter(array)` that will intake an array as an argument and 
returns an object representing the count of each value in the array. 

**Hint:** don't forget you can check if a key is present
in an object by using `obj[key] === undefined`.

Examples:

```js
console.log(arrayConverter(["apple", "apple"])); // => {apple: 2}
console.log(arrayConverter(["mango", "pineapple"])); // => {mango: 1, pineapple: 1}
console.log(arrayConverter(["apple", "banana", "potato", "banana"])); // => {apple: 1, banana: 2, potato: 1}
```


<details>

  <summary>answer</summary>

```js
function arrayConverter(array) {
  let empty = {};
  array.forEach(each=>{
    if (empty[each] === undefined) {
      empty[each] = 1
    } else {
      empty[each] += 1;
    }
  })
  return empty;
}
```
</details>

<details>

  <summary>answer 7/3
  
  tc: O(n)
  
  sc: O(n)
  </summary>

```js
function arrayConverter(arr) {
    let hashmap = {};

    for (let each of arr) {
        hashmap[each] = (hashmap[each] || 0) + 1;
    }

    return hashmap;
}
```

</details>
