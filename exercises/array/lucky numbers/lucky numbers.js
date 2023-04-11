function luckyNumbers(matrix) {
    /*
    1. create a empty list 'colList' that stores the max numbers in each column
    2. create a empty list 'empty' for answer
    3. iterate through the column
        a. create a variable 'maxCol' for max numbers in each column
        b. iterate through the height
            i. create a variable 'currentColNum'
            ii. if currentColNum is bigger than maxCol, assign the currentColNum to maxCol
    4. iterate through the height
        a. create a variable 'minRow' for min number in each array
        b. iterate through the array element
            i. create a variable 'currentMinNum'
            ii. if currentMinNum is smaller than minRow, assing the currentRowNum to minRow
        c. if current colList includes minRow, add to the 'empty'
    */    
    let width = matrix[0].length
    let height = matrix.length
    let empty = [];
    let colList = [];

    for (let col=0;col<width;col++){
        let maxCol = -Infinity;
        for (let row=0;row<height;row++) {
            let currentColNum = matrix[row][col]
            if (maxCol < currentColNum){
                maxCol = currentColNum
            }
            // console.log(maxCol)
        }
        colList.push(maxCol)
    }
    for (let row=0;row<height;row++) {
        let minRow = Infinity;
        for (let col=0; col<width; col++) {
            let currentRowNum = matrix[row][col]
            if (currentRowNum < minRow) {
                minRow = currentRowNum
            }
        }
        if (colList.includes(minRow)) {
            empty.push(minRow)
        }
    }
    return empty;
}
