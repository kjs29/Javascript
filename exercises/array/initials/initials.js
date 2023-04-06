function initials(name) {
    // 1. create an empty string variable
    // 2. change name to array
    // 3. iteratate through the array
    //    a. get the first character of each element in the array and 
    // 4. add the first character to the string variable and change it to uppercase
    let empty = "";
    let arrayOfNames = name.split(" ")
    for (let i =0;i<arrayOfNames.length;i++) {
        empty += arrayOfNames[i][0]
    }
    return empty.toUpperCase();
}

module.exports = initials;
