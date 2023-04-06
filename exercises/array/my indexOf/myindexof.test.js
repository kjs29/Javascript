const myIndexOf = require('./myindexof');

test("['a', 'b', 'c', 'e'], 'c' should be 2", () => {
    expect(myIndexOf(['a', 'b', 'c', 'e'], 'c')).toBe(2)
})

test("['a', 'b', 'c', 'e'], 'e' should be 3", () => {
    expect(myIndexOf(['a', 'b', 'c', 'e'], 'e')).toBe(3)
})

test("(['a', 'b', 'c', 'e'], 'z') should be -1", () => {
    expect(myIndexOf(['a', 'b', 'c', 'e'], 'z')).toBe(-1)
})

test("[43, -7, 11, 13, 43] should be 0", () => {
    expect(myIndexOf([43, -7, 11, 13, 43], 43)).toBe(0)
})

test("([43, -7, 11, 13], 1) should be -1", () => {
    expect(myIndexOf([43, -7, 11, 13], 1)).toBe(-1)
})

console.log(myIndexOf(['a', 'b', 'c', 'e'], 'c')); // 2
console.log(myIndexOf(['a', 'b', 'c', 'e'], 'e')); // 3
console.log(myIndexOf(['a', 'b', 'c', 'e'], 'z')); // -1
console.log(myIndexOf([43, -7, 11, 13, 43], 43)); // 0
console.log(myIndexOf([43, -7, 11, 13], 1)); // -1
