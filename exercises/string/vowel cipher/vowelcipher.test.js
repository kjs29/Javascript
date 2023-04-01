const vowelCipher = require('./vowelcipher');

test("'bootcamp' should be equal to 'buutcemp'", () => {
  expect(vowelCipher('bootcamp')).toBe('buutcemp');
});

test("'paper cup' should be equal to 'pepir cap'", () => {
    expect(vowelCipher('paper cup')).toBe('pepir cap');
});
