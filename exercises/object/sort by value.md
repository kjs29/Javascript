Create a function that takes an object as the first argument, 

ascending(boolean value) as the second argument,

and returns an object that is sorted by the value.

```js
let age = {
    'bob':50,
    'gerald':36,
    'john':25,
    'adam':18,
}


console.log(sortedByValue(age, true));      // { adam: 18, john: 25, gerald: 36, bob: 50 }
console.log(sortedByValue(age, false));      // { bob: 50, gerald: 36, john: 25, adam: 18 }
```


<details>

  <summary>answer</summary>

```js
const sortByValue = (obj, ascending) => Object.fromEntries(Object.entries(obj).sort((a,b) => (ascending) ? a[1] - b[1] : b[1] - a[1]));
```


</details>
