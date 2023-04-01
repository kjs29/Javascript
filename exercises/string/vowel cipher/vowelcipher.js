function vowelCipher(string) {
    // 1. create vowels variable for vowel
    // 2. create new empty string to be added later
    // 3. iterate through the string
    //   a. create a variable that represents the next vowel character
    //   b. add that variable to empty
    
    const vowels = 'aeiou';
    let empty = '';

    for (let i = 0; i < string.length; i++){
      
      if (vowels.includes(string[i])) {
        let nextVowel;
        nextVowel = vowels[(vowels.indexOf(string[i]) + 1) % vowels.length]
        empty += nextVowel
      } else {
        empty += string[i]
      }
      
    }
    return empty;
}

module.exports = vowelCipher;
