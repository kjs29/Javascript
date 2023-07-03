# 7/2(o)

Write a function `doesKeyExist(obj, key)` that takes in an object and a
key and returns true if the key is inside the object and false if the
key is not inside the object.

Examples:

```js
let obj1 = {bootcamp: 'App Academy', course: 'Bootcamp Prep'}
doesKeyExist(obj1, 'course'); // => true
doesKeyExist(obj1, 'name'); // => false
```

<details>

  <summary>answer</summary>

```js
function doesKeyExist(obj, key) {
    return (key in obj);
}
```
</details>
