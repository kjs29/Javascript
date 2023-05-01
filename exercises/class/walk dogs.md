Create a `dog` class that takes two two instance variables `name` and `happiness`.

Create a static methods `walkDogs()` that takes two instance objects of the Dog class, increase each dog's happiness by 20.

Print the instances again to check if their happiness level went up by 20.

```js

console.log(dog1);      // Dog { name: 'zozo', happiness: 0 }
console.log(dog2);      // Dog { name: 'coco', happiness: 1 }

Dog.walkDogs(dog1, dog2);

console.log(dog1);      // Dog { name: 'zozo', happiness: 20 }
console.log(dog2);      // Dog { name: 'coco', happiness: 21 }

```

<details>

  <summary>answer</summary>

```js
class Dog {
    constructor(name, happiness) {
        this.name = name;
        this.happiness = happiness;

    }

    static walkDogs(...dogs) {
        dogs.forEach(dog=>{
            dog.happiness += 20;
        })
    }
}

const dog1 = new Dog('zozo', 0);
const dog2 = new Dog('coco', 1);

console.log(dog1);      // Dog { name: 'zozo', happiness: 0 }
console.log(dog2);      // Dog { name: 'coco', happiness: 1 }

Dog.walkDogs(dog1, dog2);

console.log(dog1);      // Dog { name: 'zozo', happiness: 20 }
console.log(dog2);      // Dog { name: 'coco', happiness: 21 }
```

</details>
