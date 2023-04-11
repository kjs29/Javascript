function matrixAddition(arr1, arr2) {
    /*
        1. create an empty list
        2. iterate through arr1
            a. create a variable 'currentArray1' for a current element for arr1
            b. create a variable 'currentArray2' for a current element for arr2
            c. create an empty list 'elementArray' that stores the sum of iteration of arr1, and arr2
            d. iterate through the the 'currentArray'
                i. push the sum of iterations of both arr1 and arr2
            e. push the 'elementArray' to 'empty'
    */

    let empty = [];
    
    for (let i = 0; i < arr1.length; i++) {
        let currentArray1 = arr1[i]
        let currentArray2 = arr2[i]
        let elementArray = [];
        
        for (let j = 0; j < currentArray1.length; j++){
            elementArray.push(currentArray1[j] + currentArray2[j])
        }
        
        empty.push(elementArray)
    }
    return empty
}
