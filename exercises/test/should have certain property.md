Let's say we have a class `Person` with a property `name`.

```js
class Person {
    constructor(name) {
        this.name = name;
    }
}
```

With mocha, write a test that tests whether `Person` has property of `name`.

Assume that `Person` class is in the test file.

Output of the test should be like this below.

```
Person Class
    ✔ should have property of 'name'
```


<details>

  <summary>answer</summary>

```js
class Person {
    constructor(name) {
        this.name = name;
    }
}

const chai = require('chai');
const expect = chai.expect;

describe('Person Class', function() {
    it("should have property of 'name'", function() {
        expect(Person).to.have.property('name');
    })
})
```

</details>
