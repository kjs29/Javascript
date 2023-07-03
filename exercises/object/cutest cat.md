Create a function called `cutestCat` that takes an array of cat objects as an argument. 

Each cat object has a name property and a cuteness property, 

which is a number between 1 and 10. 

The function should return the cat object with the highest cuteness rating.

```js
const cats = [
  { name: 'Fluffy', cuteness: 9 },
  { name: 'Princess', cuteness: 6 },
  { name: 'Tiger', cuteness: 7 },
  { name: 'Indie', cuteness: 5 },
]

console.log(cutestCat(cats)); // { name: 'Fluffy', cuteness: 9 }
```

<details>

  <summary>answer</summary>

```js
function cutestCat(arr) {
    
    let cutestCat = -Infinity;

    for (let eachCat of arr) {
        if (eachCat.cuteness > cutestCat) {
            cutestCat = eachCat;
        }
    }
    return cutestCat;
}
```

</details>
