function repeatingTranslate(sentence) {
    let lst = sentence.split(" ")
    for (let i=0;i<lst.length;i++) {
        if (lst[i].length >= 3) {
            if (isLastCharVowel(lst[i])) {
                lst[i] = repeatTwice(lst[i])
            } else {
                lst[i] = repeatAfterLastVowel(lst[i])
            }
        }
    }
    return lst.join(" ")
}

const isLastCharVowel = word => {
    let vowels = 'aeiou';
    return (vowels.includes(word[word.length-1].toLowerCase())) ? true : false;
}

const repeatTwice = word => {
    return word.concat(word);
}

const repeatAfterLastVowel = word => {
    let vowels = 'aeiou';
    for (let i=word.length-1;i>=0;i--){
        if (vowels.includes(word[i])) {
            return word.concat(word.slice(i))
        }
    }
    return word;
}
