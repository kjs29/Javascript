function maxColumn(matrix) {
    let width = matrix[0].length;
    let height = matrix.length;
    let answer = [];

    for (let col = 0; col < width; col++) {
        let maxCol = matrix[0][col]
        for (let row = 1; row < height; row++) {
            if (matrix[row][col] > maxCol) {
                maxCol = matrix[row][col]
            }
        }
        answer.push(maxCol)
    }
    return answer
}
