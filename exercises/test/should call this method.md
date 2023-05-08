Let's say we have a `Person` class.


<em>person.js</em>

```js
class Person {
    constructor(name) {
        this.name = name;
    }

    greet(){
        console.log(`Hello, I am ${this.name}`);
    }

    introduce(){
        this.greet();
    }
}
```

With using `mocha`,

Create a test whether calling `introduce()` calls `greet()`.

Write the test spec file within `person.js` file.

Desired output:

```
> javascript-test@1.0.0 test
> mocha



  introduce()
Hello, I am Jin
    ✔ should call greet()


  1 passing (6ms)
```

<detials>

  <summary>answer</summary>

```js
const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies');

chai.use(spies);

class Person {
    constructor(name) {
        this.name = name;
    }

    greet(){
        console.log(`Hello, I am ${this.name}`);
    }

    introduce(){
        this.greet();
    }
}

describe('introduce()', ()=>{
    it('should call greet()', ()=>{
        let jin = new Person('Jin');
        chai.spy.on(jin, 'greet');
        jin.introduce();
        expect(jin.greet).to.have.been.called();
    });
});
```


</detials>
