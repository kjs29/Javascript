
Write a function `sentenceMapper` that accepts a sentence and a callback as arguments.

The function should return a new sentence where every word of the original sentence becomes the result of passing the word to the callback.

Examples:

```js
let result1 = sentenceMapper("what is the answer?", function(word) {
    return word.toUpperCase() + "!";
});
console.log(result1); // 'WHAT! IS! THE! ANSWER?!'

let removeVowels = function(word) {
    let newWord = "";
    for (let i = 0; i < word.length; i++) {
        let char = word[i];
        if (!"aeiou".includes(char)) {
            newWord += char;
        }
    }
    return newWord;
};

let result2 = sentenceMapper("this is pretty cool right", removeVowels);
console.log(result2); // 'ths s prtty cl rght'
```



<details>

  <summary>answer</summary>
  
  ```js
let sentenceMapper = function(sentence, cb) {
    let answer = sentence.split(" ");
    let empty = [];
    for (let i=0;i<answer.length;i++){
        let word = answer[i];
        empty.push(cb(word));
    }
    return empty.join(" ");
};
  
  ```
</details>
