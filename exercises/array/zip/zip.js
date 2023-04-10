// Your code here
function zip(arr1, arr2){
    /*
    1. create an empty array for answer
    2. iterate through the first array, 
        a. make an 'nestedArray' for an empty array
        b. push each element in the first array to the 'nestedArray'
        c. push each element in the second array to the 'nestedArray'
        d. push the whole 'nestedArray' to the empty array
    */
    let empty = [];
    for (let i = 0; i < arr1.length; i++) {
        let nestedArray = [];
        nestedArray.push(arr1[i])
        nestedArray.push(arr2[i])
        empty.push(nestedArray)
    }
    return empty;
}
