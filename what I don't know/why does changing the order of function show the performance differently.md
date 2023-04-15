I measured the time perfomance between for loop and for in loop

1.

```js
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Measure time for regular for loop
console.time("Regular for loop");
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
console.timeEnd("Regular for loop");

// Measure time for for...in loop
console.time("For...in loop");
for (let i in arr) {
  console.log(arr[i]);
}
console.timeEnd("For...in loop");
```


```
1
2
3
4
5
6
7
8
9
10
Regular for loop: 7.168ms
1
2
3
4
5
6
7
8
9
10
For...in loop: 0.547ms
```

2.

```js
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Measure time for for...in loop
console.time("For...in loop");
for (let i in arr) {
  console.log(arr[i]);
}
console.timeEnd("For...in loop");

// Measure time for regular for loop
console.time("Regular for loop");
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
console.timeEnd("Regular for loop");
```


```
1
2
3
4
5
6
7
8
9
10
For...in loop: 7.879ms
1
2
3
4
5
6
7
8
9
10
Regular for loop: 0.569ms
```

Why do they always say the first one takes longer?
