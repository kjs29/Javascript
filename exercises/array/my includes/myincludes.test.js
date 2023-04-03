const myIncludes = require('./myincludes')



test("(['a', 'b', 'c', 'e'], 'c') should be true", () => {
    expect(myIncludes(['a', 'b', 'c', 'e'], 'c')).toBe(true)
})

test("(['a', 'b', 'c', 'e'], 'a') should be true", () => {
    expect(myIncludes(['a', 'b', 'c', 'e'], 'a')).toBe(true)
})

test("(['a', 'b', 'c', 'e'], 'z') should be false", () => {
    expect(myIncludes(['a', 'b', 'c', 'e'], 'z')).toBe(false)
})

test("([43, -7, 11, 13], 11) should be true", () => {
    expect(myIncludes([43, -7, 11, 13], 11)).toBe(true)
})

test("([43, -7, 11, 13], 1) should be false", () => {
    expect(myIncludes([43, -7, 11, 13], 1)).toBe(false)
})
