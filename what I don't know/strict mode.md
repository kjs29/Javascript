# What does strict mode do?

# 

```js

function eat() {
  console.log(`${this.name} eats fish food`);
}

class Fish {
  constructor(name) {
    this.name = name;
  }

  swim() {
    console.log(`${this.name} swimming in the water`);
  }
}

const nemo = new Fish('Nemo');

const swim = nemo.swim;
swim(); // guess what will happen?
```
