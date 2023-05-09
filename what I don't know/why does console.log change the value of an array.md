why does console.log change the value of an array?

```js
let a = ['h','i']
console.log(a.length)   // 2
console.log(a.push(5))  // 3
console.log(a.length)   // 3

// console.log(a.length === a.push(5))
// console.log(a.push(5)-6===0)
// console.log(a)
// console.log((a.push(6) === a.length)===(a.length=== a.push(7)))

```
