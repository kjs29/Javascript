We have an array

```js
let arr1 = [1,2,3,4,5];
```

Create a function that takes an array, and returns a modified array like this below.

```js
let arr1 = [1,2,3,4,5];
let arr2 = [1,5,3,10,2];

console.log(addNumberNumberTimes(arr1));    // [1,2,2,3,3,3,4,4,4,4,5,5,5,5,5];
console.log(addNumberNumberTimes(arr2));    
/*
[
   1,  5,  5,  5,  5,  5,  3,
   3,  3, 10, 10, 10, 10, 10,
  10, 10, 10, 10, 10,  2,  2
]
*/
```

<details>

  <summary>answer</summary>

```js
function addNumberNumberTimes(arr){
    let answer = arr.flatMap((el,i)=>{
        let tempArr = [];
        for (let i=0;i<el;i++){
            tempArr.push(el);
        }
        return tempArr;
    })
    
    return answer
}
```

</details>
