
There is a bingo board, and you are given an array of numbers to mark in the board.

You can create a bingo with either horizontal or vertical line.

Create a function that takes the board(arr) and returns the last number that is part of bingo line.

If there isn't any bingo line completed, return null.

```js
let board = [
    [5,3,2],
    [6,4,9],
    [8,1,7]
];

console.log(solve(board, [1,4,5,6,7,9]))       // 9
```

<details>

  <summary>answer</summary>

```js
function solve(mat, arr) {
    combinations = [];

    for (let row=0;row<mat.length;row++) {
        combinations.push(mat[row]);
        let temp = [];
        for (let col=0;col<mat[0].length;col++) {
            temp.push(mat[col][row]);
        }
        combinations.push(temp);
    }
    
    for (let i=0;i<combinations.length;i++) {
        let combinationsRow = combinations[i];
        for (let num of arr) {
            if (combinationsRow.includes(num)) {
                combinationsRow.splice(combinationsRow.indexOf(num), 1)
                if (combinationsRow.length === 0) {
                    return num;
                }
            }
        }   
    }

    return null;
}

```

</details>
