
/*
    histogram function takes str as a parameter,
        str: String, sentences or paragraphs to be assessed.
    
    , returns object { word: frequency }
*/  
const histogram = str => {
    let arr = str.split('\n').join(' ').split(' ');
    let answer = {};
    for (let eachWord of arr) {
        if (eachWord in answer) {
            answer[eachWord] += 1;
        } else {
            answer[eachWord] = 1;
        }
    }
    return answer;
}


// Sort object by the value in descending order, returns an object
const sortByValue = (obj, trim) => {
    let entries = Object.entries(obj).sort((a, b)=> b[1] - a[1]).slice(0, trim);
    return Object.fromEntries(entries)
};


const deleteUselessWords = (str, excludedWords) => {
    
    // replace all \n : . ,
    str = str.replace(/\n/g, '')
             .replace(/:/g, '')
             .replace(/\./g, '')
             .replace(/,/g, '')
             .toLowerCase();

    const words = str.split(' ');

    // take out each excluded word from str
    for (let i = words.length - 1; i >= 0; i--) {
        const word = words[i].toLowerCase();
        if (excludedWords.includes(word)) {
            words.splice(i, 1);
        }
    }

    return words.join(' ');
}

module.exports = {
    histogram,
    sortByValue,
    deleteUselessWords
};
