# 7/2(o)

Write a function `printObject(obj)` that prints out all key-value pairs of an object. 

The format should be key - value.

```js
let bootcamp = {
    name: "App Academy",
    color: "Red",
    population: 120
};

printObject(bootcamp);
```

```
name App Academy
color Red
population 120
```

<details>

  <summary>answer</summary>

```js
function printObject(obj) {
    for (let [k,v] of Object.entries(obj)) {
        console.log(k, v);
    }
}
```

</details>
