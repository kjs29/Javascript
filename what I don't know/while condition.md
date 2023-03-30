# I am having a long time on how to convert while condition to while true


for example

```js
let counter = 0;
while (true) {
    counter++;
    if (counter === 20) {
        break;
    }
}
```

can be 

```js
let counter = 0;
while (counter <20){
    counter++;
}
```

I can maybe think of `while` as `if`.
