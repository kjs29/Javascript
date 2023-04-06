const sameCharCollapse = require('./samecharcollapse');
  

describe('sameCharCollapse', () => {
    test('returns the collapsed string for a string with repeated characters', () => {
      expect(sameCharCollapse('zzzxaaxy')).toBe('zy');
    });
  
    test('returns the collapsed string for a string with multiple repeated characters', () => {
      expect(sameCharCollapse('uqrssrqvtt')).toBe('uv');
    });
  
    test('returns the original string if no characters are repeated', () => {
      expect(sameCharCollapse('abcdefg')).toBe('abcdefg');
    });
  
    test('returns an empty string for an empty input', () => {
      expect(sameCharCollapse('')).toBe('');
    });
});
