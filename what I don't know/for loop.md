# What is the difference between these?

```js
for (let i=0; i<max; (i%3==0 || i%5==0)) {
// code
}
```

and 

```js
for (let i=0; i<max; i++) {
  if (i%3==0 || i%5==0) {
    //code
  }
}
```
