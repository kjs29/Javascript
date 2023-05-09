Using mocha and chai, 

1. write a test whether `sayString` function returns a string value. 

2. write another test whether `sayString` function returns 'is this a string?'

Write the test spec within the same file as `test-type.js`


<em>test-type.js</em>

```js
function sayString(){
    return 'is this a string?';
}
```

Expected output:

```
> mocha-test@1.0.0 test
> mocha



  sayString()
    ✔ should return string type
    ✔ should return 'is this a string?'


  2 passing (6ms)
```

<details>

  <summary>answer</summary>

```js
const chai = require('chai');
const expect = chai.expect;

describe('sayString()',function(){
    
    let result;
    
    beforeEach(function(){
        result = sayString();
    });

    it('should return string type', function(){
        expect(result).to.be.a('string');
    });

    it("should return 'is this a string?'", function(){
        expect(result).to.equal('is this a string?');
    });
});
```


</details>
