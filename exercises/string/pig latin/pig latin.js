function pigLatinWord(word) {
    if ('aeiou'.includes(word[0])) {
        return word + 'yay';
    }
    for (let i=0;i<word.length;i++) {
        if ('aeiou'.includes(word[i])) {
            return word.slice(i)+word.slice(0,i)+'ay'
        }
    }
};
