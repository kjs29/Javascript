/*
1. create helper functions for the case 2.a and 2.b
2. since they want to ask different conditions for 2.a and 2.b , I need to create vowels in the main function.
*/

const endsWithVowels = word => {
    let vowels = 'aeiou';
    return (vowels.includes(word[word.length-1])) ? true : false; 
}

const repeatTwice = word => {
    return word.concat(word);
}

const repeatPart = word => {
    let vowels = 'aeiou';
    let vowelIndex;
    for (let i=0;i<word.length;i++) {
        if (vowels.includes(word[i])) {
            vowelIndex = i;
        }
    }
    return word.concat(word.slice(vowelIndex));
}

const repeatingTranslate = sentence => {
    // 1) words that are shorter than 3 characters are unchanged
    // 2) words that are 3 characters or longer are translated according to the
    //   following rules:
    //   a. if the word ends with a vowel, simply repeat the word twice (example:
    //     'like'->'likelike')
    //   b. if the word ends with a non-vowel, repeat all letters that come after the
    //     word's last vowel, including the last vowel itself (example:
    //     'trash'->'trashash')
    //
    // Note that if words are capitalized in the original sentence, they should remain
    // capitalized in the translated sentence. Vowels are the letters a, e, i, o, u.

    /*
        1. convert sentence into array
        2. iterate through the array
            a. if each word is less than 3 characters, leave them.
            b. if they are equal or longer than 3 characters, 
                i. if the word ends with a vowel, repeat the word twice
                ii. if the word ends with a consonant, repeat the part.
        3. convert back to string
    */

    let array = sentence.split(" ");

    for (let i=0;i<array.length;i++){
        if (array[i].length<3) {
            
        } else {
            if (endsWithVowels(array[i])) {
                array[i] = repeatTwice(array[i])
            } else {
                array[i] = repeatPart(array[i])
            }
        }
    }
    return array.join(" ");
}

module.exports = repeatingTranslate;

// console.log(repeatingTranslate("we like to go running fast"));  // "we likelike to go runninging fastast"
// console.log(repeatingTranslate("he cannot find the trash"));    // "he cannotot findind thethe trashash"
// console.log(repeatingTranslate("pasta is my favorite dish"));   // "pastapasta is my favoritefavorite dishish"
// console.log(repeatingTranslate("her family flew to France"));   // "herer familyily flewew to FranceFrance"
