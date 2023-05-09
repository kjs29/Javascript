```js
function returnsArray() {
    return [1,2,3];
}

describe('returnsArray()', function(){
    let result;
    beforeEach(function(){
        result = returnsArray();
    })
    it("should return an array type", function(){
        
        expect(result).to.be.a('array');
    });
    it("should return [1,2,3]", function(){
        
        expect(result).to.eql([1,2,3]);
    });
})
```
