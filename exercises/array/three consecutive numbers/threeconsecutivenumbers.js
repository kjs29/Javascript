const threeConsecutiveNumbers = array => {
    for (let i=0; i<array.length; i++){
        if (array[i]===array[i+1]-1 && array[i+1]===array[i+2]-1){
            return true;
        }
    }
    return false;
}

module.exports = threeConsecutiveNumbers;
