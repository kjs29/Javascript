We have a class `Ai`


<em>ai.js</em>

```js
class Ai {
    constructor(name){
        this.name = name;
    }
    introduce() {
        console.log(`I am ${this.name}`);
    }
    static introduceAll(...arr) {
        arr.forEach(eachAi => eachAi.introduce());
    }
}

const ai1 = new Ai('A');
const ai2 = new Ai('B');
const ai3 = new Ai('C');
const ai4 = new Ai('D');

Ai.introduceAll(ai1,ai2,ai3,ai4);

```
With using mocha,

create a test that checks whether the static method `introduceAll()` calls the instance method `introduce()` on an each instance.

Create a test spec within `ai.js`.

Desired output:

```
> javascript-test@1.0.0 test
> mocha



  introduceAll()
I am A
I am B
    ✔ should call introduce() on every single instance


  1 passing (7ms)
```


<details>

  <summary>answer</summary>

```js
const chai = require('chai');
const expect = chai.expect;

const spies = require('chai-spies');
chai.use(spies);

class Ai {
    constructor(name){
        this.name = name;
    }
    introduce() {
        console.log(`I am ${this.name}`);
    }
    static introduceAll(...arr) {
        arr.forEach(eachAi => eachAi.introduce());
    }
}

describe('introduceAll()', ()=>{
    it('should call introduce() on every single instance', ()=>{
        let ai1 = new Ai('A');
        let ai2 = new Ai('B');
        let arr = [ai1, ai2];

        arr.forEach(each=>{
            chai.spy.on(each, 'introduce');
        });

        Ai.introduceAll(...arr);

        arr.forEach(each=>{
            expect(each.introduce).to.have.been.called.once;
        });
    });
});
```

</details>
