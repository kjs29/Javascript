# 7/3 (o)

Create a function that takes an object parameter and doubles the value in an object.

The function does not return anything, also it doubles only if the value is number.

```js
let person = {
    name: 'John',
    width: 210,
    height: 178
}

doubleValue(person);

console.log(person);        // { name: 'John', width: 420, height: 356 }
```


<details>

  <summary>answer</summary>

```js
function doubleValue(obj) {
    for (let each in obj) {
        if (typeof obj[each] === 'number'){
            obj[each] *= 2;
        }
    }
}
```

</details>

<details>

  <summary>answer 7/3</summary>


```js
function doubleValue (obj) {
    for (let key in obj) {
        let value = obj[key];
        (typeof value === "number" ? obj[key] *= 2 : value);            // value *= 2 won't work.
    }
}
```

</details>
