These two functions are the same. 

```js
// Your code here
function zanyZip(arr1, arr2) {
    /*
    1. create an empty array for an answer
    2. iterate through longer array between arr1, arr2
        a. create an empty array 'nestedArray'
        b. create a variable for current element for both arr1, and arr2
        c. if current element for both arr1, or arr2 doesn't exist, then assign null value to it.
        d. add the corresponding element for both arr1, and arr2 to the 'nestedArray'
        e. add the 'nestedArray' to the empty array
    */
    let empty = [];
    for (let i = 0 ; i < (arr1.length <= arr2.length ? arr2.length : arr1.length); i++) {
        let nestedArray = [];
        let currentElementArr1 = (i < arr1.length) ? arr1[i] : null;
        let currentElementArr2 = (i < arr2.length) ? arr2[i] : null;
        nestedArray.push(currentElementArr1)
        nestedArray.push(currentElementArr2)
        empty.push(nestedArray)
    }
    return empty;
}

```

```js
function zanyZip(arr1, arr2) {
  const maxLength = Math.max(arr1.length, arr2.length);
  return Array.from({ length: maxLength }, (_, i) => [arr1[i] ?? null, arr2[i] ?? null]);
}
```
