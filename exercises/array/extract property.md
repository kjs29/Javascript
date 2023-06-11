We have an array

```js
const people = [
    {name: 'A', age:22},
    {name: 'B', age:28},
    {name: 'C', age:30}
];
```

Create a function that takes an array, and returns names whose age is less than 30.

```js
console.log(lessThanThirty(people));      // ['A', 'B']
```

<details>

  <summary>answer</summary>

```js
const people = [
    {name: 'A', age:22},
    {name: 'B', age:28},
    {name: 'C', age:30}
];

function lessThanThirty(arr) {
    return arr.filter(obj=>obj.age<30).map(obj=>obj.name);
}

console.log(lessThanThirty(people));
```


</details>
