
1. Create a function that returns the first element.

Don't use `array[0]` or `shift()`.

```js
let cards = [1,2,3,4,5];
console.log(returnFirst(cards));        // 1
```

2. Create a function that returns an array that holds the second, and fourth element.

Don't use `array[1]` or `array[3]`.

```js
let cards = [1,2,3,4,5];
console.log(returnSecondAndFourth(cards));      // [2, 4]
```

3. Create a function that swaps the first element and the second element.

The function should return a swapped array.

```js
let cards = [1,2,3,4,5];
console.log(swapFirstAndSecond(cards));         //[2,1,3,4,5]
```

4. Create a function that discards the first card, and returns the first card, and a second pile of the card.

```js
let cards = [1,2,3,4,5];
console.log(discardFirst(cards));           //[1,[2,3,4,5]]
```

5. We have a set of joker cards.

```js
let setOfJoker = ['Color Joker', 'Joker'];
```

Create a function that takes two arguments that are arrays.

It inserts all the elements from the array2 to array1, starting from the second element in the array1.

It returns the modified array1.

```js
let cards = [1,2,3,4,5];
console.log(insertFromTheSecond(cards, setOfJoker));        //[1,'Color Joker','Joker',3,4,5]
```


<details>

  <summary>answer1</summary>


  ```js
  function returnFirst([number1,]) {
    return number1;
  }
  ```
</details>

<details>

  <summary>answer2</summary>

  2.

  ```js
  function returnSecondFourth([,n2,,n4,]){
    return [n2, n4];
  }
  ```
</details>


<details>

  <summary>answer3</summary>

  3.

  ```js
  function swapFirstAndSecond([first,second,...rest]){
    return [second,first,...rest];
  }
  ```

</details>


<details>

  <summary>answer4</summary>

  4.

  ```js
  function discardFirst([first,...rest]){
    return [first,rest];
  }
  ```

</details>

<details>

  <summary>answer5</summary>
  
  5.

  ```js
  function insertFromTheSecond([first, ...rest], array){
    return [first, ...array, ...rest];
  }
  ```

</details>
