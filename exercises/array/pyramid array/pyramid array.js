function addEach(arr) {
    let empty= []
    for (let i =1;i<arr.length;i++) {
        empty.push(arr[i-1]+arr[i])
    }
    return empty        
}

function pyramidArray(arr) {
    /*
    1. Create an empty array 'empty'
    2. add the returned value of addEach(arr) to 'empty'
    3. if return value's length is more than 1, addEach(return value)
    3. repeat 2~3
    */
    
    let empty = [arr];

    for (let i=0;i<arr.length-1;i++) {
        if (empty.length >= 1) {
            empty.push(addEach(empty[empty.length-1]))
        }
    }
    return empty.reverse();
}
