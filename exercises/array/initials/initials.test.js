const initials = require('./initials')

describe('initials', () => {
    test('returns the correct initials for a two-word name', () => {
        expect(initials('anna paschall')).toBe('AP');
    });
  
    test('returns the correct initials for a three-word name', () => {
         expect(initials('Mary La Grange')).toBe('MLG');
    });
  
    test('returns the correct initials for a lower case name', () => {
        expect(initials('brian crawford scott')).toBe('BCS');
    });
  
    test('returns the correct initials for a long name', () => {
        expect(initials('Benicio Monserrate Rafael del Toro Sánchez')).toBe('BMRDTS');
    });
});
  