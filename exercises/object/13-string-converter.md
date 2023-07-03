# 7/3(o)

Write a function `stringConverter(string)` that will intake a
string as an argument and returns an object representing the count of each
character in the string. **Hint:** don't forget you can check if a key is present
in an object by using `obj[key] === undefined`.

Examples:

```js
console.log(stringConverter("apple")); // => {a: 1, p: 2, l: 1, e: 1}
console.log(stringConverter("banana")); // => {b: 1, a: 3, n: 2}
console.log(stringConverter("raccoon")); // => {r: 1, a: 1, c: 2, o: 2, n: 1}
```


<details>

  <summary>answer</summary>

```js
function stringConverter(string) {
  let stringArray = string.split("");
  let empty = {};
  stringArray.forEach(char=>{
    if(empty[char] === undefined) {
      empty[char] = 1
    } else {
      empty[char] += 1
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
function stringConverter(s) {
    let hashmap = {};
    for (let each of s) {
        hashmap[each] = (hashmap[each] || 0) + 1;
    }
    return hashmap;
}
```


</details>
