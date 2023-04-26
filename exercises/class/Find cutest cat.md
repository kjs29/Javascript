Create a class `Cat` that takes 'name', 'eyeSize', 'weight'.

Each cat's cuteness is defined by its `eyeSize / weight`.

Create 3 different instances `cat1`, `cat2`, `cat3` and print the cutest cat.

```js
cat1 = new Cat('nabi', 25, 5);
cat2 = new Cat('coco', 10, 5);
cat3 = new Cat('haru', 12, 3);

console.log(Cat.cutest);        // Cat { name: 'nabi', eyeSize: 25, weight: 5, cuteness: 5 } 
```


<details>

  <summary>Answer</summary>

```js
class Cat {
    constructor(name, eyeSize, weight) {
        this.name = name;
        this.eyeSize = eyeSize;
        this.weight = weight;
        this.cuteness = eyeSize / weight;

        if (!Cat.cutest || (this.cuteness > Cat.cutest.cuteness)) {
            Cat.cutest = this;
        }
    }

    static cutest = null;
}

cat1 = new Cat('nabi', 25, 5);
cat2 = new Cat('coco', 10, 5);
cat3 = new Cat('haru', 12, 3);

console.log(Cat.cutest);        // Cat { name: 'nabi', eyeSize: 25, weight: 5, cuteness: 5 }

```

</details>
