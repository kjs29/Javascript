const { 
    histogram,
    sortByValue, 
    deleteUselessWords 
} = require('./functions');

const { 
    dataAnalyst1, 
    dataAnalyst2, 
    iHaveADream
} = require('./applications');

/* 
    keyWordExtractors takes 3 parameters
        1. str: String, sentence or paragraph to be extracted
        2. trim: Number, how many keywords to show
        3. ...exclude: String, additional words to ignore

    ,returns an object { keyword: frequencies }
*/
const keyWordExtractors = (str, trim, ...exclude) => {
    let excludedWords = [
        '',     'Must',     'a',      'all',
        'also', 'an',       'and',    'are',
        'as',   'be',       'for',    'from',
        'have', 'in',       'is',     'more',
        'of',   'on',       'one',    'or',
        'our',  'required', 'that',   'the',
        'this', 'to',       'we',     'where',
        'who',  'with',     'within', 'work',
        'you',  'your'
    ]
    
    for (let each of exclude) {
        excludedWords.push(each);
    }

    str = deleteUselessWords(str, excludedWords);

    let hist = histogram(str);

    let answer = sortByValue(hist, trim);

    return answer;
}


console.log(`Data Analyst 1: `, keyWordExtractors(dataAnalyst1, 6, 'role'));
console.log(`Data Analyst 2: `, keyWordExtractors(dataAnalyst2, 8));
console.log(`I have a dream speech: `, keyWordExtractors(iHaveADream, 10));
