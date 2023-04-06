function sameCharCollapse(str) {
    /*
        1. convert str to arr
        2. iterate through arr,
            a. if first and second element are the same, remove them both.    
    */
    let arr = str.split("");
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i+1]) {
            arr.splice(i,2);
            i=0;
        }
    }
    return arr.join("");
}
    

module.exports = sameCharCollapse;
