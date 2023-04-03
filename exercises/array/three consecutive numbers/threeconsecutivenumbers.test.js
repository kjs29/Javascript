const threeConsecutiveNumbers = require('./threeconsecutivenumbers');

test("[3, 2, 11, 12, 13, 2, 4] should be true", () => {
  expect(threeConsecutiveNumbers([3, 2, 11, 12, 13, 2, 4])).toBe(true);
});

test("[2, 7, 8, 9] should be false", () => {
    expect(threeConsecutiveNumbers([2, 7, 8, 9])).toBe(true);
});

test("[7, 2, 4, 5, 2, 1, 6] should be false", () => {
    expect(threeConsecutiveNumbers([7, 2, 4, 5, 2, 1, 6])).toBe(false);
});

test("[1, 2, 4, 5, 2, 7, 8] should be true", () => {
    expect(threeConsecutiveNumbers([1,2,4,5,2,7,8])).toBe(false);
});
