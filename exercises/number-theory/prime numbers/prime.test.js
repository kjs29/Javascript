const { isPrime, allPrimesBelow, nthPrime } = require('./prime');

describe('isPrime', () => {
  test('returns false for numbers less than 2', () => {
    expect(isPrime(-1)).toBe(false);
    expect(isPrime(0)).toBe(false);
    expect(isPrime(1)).toBe(false);
  });

  test('returns true for prime numbers', () => {
    expect(isPrime(2)).toBe(true);
    expect(isPrime(3)).toBe(true);
    expect(isPrime(5)).toBe(true);
    expect(isPrime(7)).toBe(true);
    expect(isPrime(11)).toBe(true);
  });

  test('returns false for non-prime numbers', () => {
    expect(isPrime(4)).toBe(false);
    expect(isPrime(6)).toBe(false);
    expect(isPrime(8)).toBe(false);
    expect(isPrime(9)).toBe(false);
    expect(isPrime(15)).toBe(false);
  });
});

describe('allPrimesBelow', () => {
  test('returns all prime numbers below input number', () => {
    expect(allPrimesBelow(2)).toEqual([2]);
    expect(allPrimesBelow(3)).toEqual([2, 3]);
    expect(allPrimesBelow(10)).toEqual([2, 3, 5, 7]);
    expect(allPrimesBelow(20)).toEqual([2, 3, 5, 7, 11, 13, 17, 19]);
    expect(allPrimesBelow(30)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
  });

  test('returns an empty array for numbers less than 2', () => {
    expect(allPrimesBelow(-1)).toEqual([]);
    expect(allPrimesBelow(0)).toEqual([]);
    expect(allPrimesBelow(1)).toEqual([]);
  });
});

describe('nthPrime', () => {
  test('returns the nth prime number', () => {
    expect(nthPrime(1)).toBe(2);
    expect(nthPrime(2)).toBe(3);
    expect(nthPrime(5)).toBe(11);
    expect(nthPrime(10)).toBe(29);
  });

  test('returns undefined for non-positive input values', () => {
    expect(nthPrime(-1)).toBeUndefined();
    expect(nthPrime(0)).toBeUndefined();
  });
});
