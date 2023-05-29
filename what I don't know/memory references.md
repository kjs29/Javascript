
My original question is...

# How can I check memory address of an object?

```js
let randomNumber = 25;      // string, primitive type, immutable

console.log(???)    // how to check memory address?
```

I want to see whether two objects share the same reference to an object.

However the following code checks if they have the same value.

```js
let randomNumber = 25;
let randomNumber2 = 25;

console.log(randomNumber === randomNumber2);        // true, but it does not check if they have the same reference to memory address
```

My Guess is `Two strings probably have different memory addresses`.

And so far, the following code is the only way to prove that they probably have different memory addresses.

```js
let randomNumber = 25;
let randomNumber2 = randomNumber;

randomNumber = 300;

console.log(randomNumber2);         // 25, this means that they probably have different memory addresses.
```

, but how to prove that primitives have two different references?


Q: How can I check memory address of an object?

A: You can check memory address of object that is not primitives (`===`), but you can't check memory addresses of primitives.

    Q: Then, why can't we check memory address of primitives?

        A: Because when primitive values(string, boolean, null, etc) are assigned to a variable, JS runtime environment stores value itself in memory location, not the references to the value.

    Q: Why did they decide to NOT pass primitives by references? Why did they decide to pass primitives by values?
