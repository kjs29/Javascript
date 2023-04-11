const nextArr = arr => {
    let empty = [];
    for (let i=0;i<arr.length-1;i++) {
        empty.push(arr[i]+arr[i+1])
    }
    empty.unshift(1)
    empty.push(1)
    return empty
}

const pascalsTriangle = n => {
    /*
    create a helper function that takes an array and returns array
    
    1. create an empty array 'empty'
    2. Create while loop, as long as 'empty''s length is equal
        a. add the return value of helper function to the 'empty'
        b. increment counter by 1
    */
    let empty = [[1]];
    let counter = 0
    while (empty.length < n) {
        empty.push(nextArr(empty[empty.length-1]))
        counter++
    }
    return empty;
}
