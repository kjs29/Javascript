
Write a function `countScores(people)` that takes in an array of score
objects (people) as its input. A score object has two key-value pairs:
the scorer (string) and a point value (number). `countScores(people)` should
return an object that has key-value pairs listing each person who scored as a key
and the sum of the total points for the game as their value.

Example 1:

```js
let ppl = [{name: "Anthony", score: 10},
            {name: "Fred", score : 10},
            {name: "Anthony", score: -8},
            {name: "Winnie", score: 12}];

console.log(countScores(ppl)); //=> { Anthony: 2, Fred: 10, Winnie: 12 }
```

Example 2:

```js
let peeps = [
  {name: "Anthony", score: 2},
  {name: "Winnie", score: 2},
  {name: "Fred", score: 2},
  {name: "Winnie", score: 2},
  {name: "Fred", score: 2},
  {name: "Anthony", score: 2},
  {name: "Winnie", score: 2}
];
console.log(countScores(peeps)); //=> { Anthony: 4, Fred: 4, Winnie: 6 }
```



<details>

  <summary>answer</summary>

  ```js
function countScores(people) {
  /*
  1. create an empty object
  2. Iterate through ppl
    a. set log as {name:'Anthony',score:10} 
    b. set valueName as log['name']
    c. if valueName doesnt exist in empty, set it as score
    d. if valueName exists, add the current score
  */
  let empty = {};
  for (i in people) {
    let log = people[i]
    let valueName = log.name;
    let valueScore = log.score;
    if (empty[valueName] === undefined) {
      empty[valueName] = valueScore
    } else {
      empty[valueName] += valueScore
    }
  }
  return empty;
}

  ```
</details>
