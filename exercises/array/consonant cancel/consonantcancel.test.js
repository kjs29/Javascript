const { consonantCancel, removeConsonant } = require('./consonantcancel');

describe('consonantCancel', () => {
    test('removes consonants from each word in a sentence', () => {
      expect(consonantCancel('down the rabbit hole')).toBe('own e abbit ole');
      expect(consonantCancel('writing code is challenging')).toBe('iting ode is allenging');
    });
  
    test('returns an empty string if the input is empty', () => {
      expect(consonantCancel('')).toBe('');
    });
  
    test('returns the original string if all words start with vowels', () => {
      expect(consonantCancel('apple ear igloo')).toBe('apple ear igloo');
    });
  
    test('removes consonants from a sentence with mixed-case words', () => {
      expect(consonantCancel('The Quick Brown Fox Jumps Over the Lazy Dog')).toBe('e uick own ox umps Over e azy og');
    });
});

describe('removeConsonant', () => {
    test('removes consonants from the beginning of a word', () => {
      expect(removeConsonant('strength')).toBe('ength');
      expect(removeConsonant('plant')).toBe('ant');
      expect(removeConsonant('escalator')).toBe('escalator');
    });
  
    test('returns an empty string if the input is empty', () => {
      expect(removeConsonant('')).toBe('');
    });
  
    test('returns the original string if it starts with a vowel', () => {
      expect(removeConsonant('apple')).toBe('apple');
      expect(removeConsonant('igloo')).toBe('igloo');
    });
});
  