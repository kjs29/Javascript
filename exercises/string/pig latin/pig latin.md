Write a function `pigLatinWord` that takes in a word string and translates the word into Pig Latin.

1. For words that start with a vowel, add 'yay' to the end of the word.

2. For words that start with a non-vowel, move all letters that come
 
**before the first vowel** to the **end of the word** then add 'ay'

Use `.slice()` method.

```js
console.log(pigLatinWord("apple")); //=> "appleyay"
console.log(pigLatinWord("eat")); //=> "eatyay"
console.log(pigLatinWord("banana")); //=> "ananabay"
console.log(pigLatinWord("trash")); //=> "ashtray"
```
