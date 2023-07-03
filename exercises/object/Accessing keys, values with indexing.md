We have a dictionary below,

```js
favourite_languages = {
    "sarah":["c"],
    "jin":["python"],
    "scott":["c++","C"],
    "jules":["ruby"]
    }
```

But we actually don't know what the third key and value in the dictionary. We want to print 3rd key:value pair like this using indexing.

```
Third key:value is Scott : ['c++', 'C']
```

How would we get it?

<details>

  <summary>answer</summary>

```js
favourite_languages = {
    "sarah":["c"],
    "jin":["python"],
    "scott":["c++","C"],
    "jules":["ruby"]
    }

let thirdKey = Object.keys(favourite_languages)[2];
let thirdValue = favourite_languages[thirdKey];

thirdValue = thirdValue.map(lang => `'${lang}'`);
thirdKey = thirdKey[0].toUpperCase() + thirdKey.slice(1);

console.log(`Third key:value is ${thirdKey} : [${thirdValue}]`);
```
</details>
