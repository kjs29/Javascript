Write a test that checks that 

1. `returnsArray` should return an array type.

2. `returnsArray` should return [1, 2, 3].

Expected outcome:

```
> mocha-test@1.0.0 test
> mocha



  returnsArray()
    ✔ should return an array type
    ✔ should return [1,2,3]


  2 passing (8ms)
```

<details>

  <summary>answer</summary>

```js
function returnsArray() {
    return [1,2,3];
}

describe('returnsArray()', function(){
    
    let result;
    
    beforeEach(function(){
        result = returnsArray();
    });

    it("should return an array type", function(){
        expect(result).to.be.a('array');
    });

    it("should return [1,2,3]", function(){
        expect(result).to.eql([1,2,3]);
    });

});
```


</details>
