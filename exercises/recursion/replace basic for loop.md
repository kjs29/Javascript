Make a function `replaceFor` that takes an array of strings,

and returns an array of the element + 'b'.

Use recursion.

```js
let a = ['a', 'b'];

console.log(replaceFor(a));     // ['ab', 'bb']
console.log(re(['hello', '', '.'])) // [ 'hellob', 'b', '.b' ]

```

<details>

  <summary>Answer</summary>

  ```js
  function re(arr) {
      /*  
          1. Figure out how to arrive at a base case.
              a. take out the last element, the next array would be original array except for the last element
              
          2. base case : when the length of an arr is 0
              a. return []
          
          3. recursive case : when the length of an array is bigger than 0
              
      */

      if (arr.length === 0) {
          return [];
      } else {
          let currentEl = arr.pop()
          let array = re(arr);
          array.push(currentEl+'b')
          return array
      }
  }
  ```

</details>
