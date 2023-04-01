function uncompress(str) {
    // 1. create an empty string variable to be added later
    // 2. iterate through the str
    //    a. for only character part
    //    b. for only number part
    // 3. add character the number amount of times to the empty variable

    let empty = "";
    
    for (let i = 0; i < str.length; i++) {
        if (i % 2 === 1) {
            for (let j=0; j < Number(str[i]); j++) {
            empty += str[i-1]
      }
    }
  }
  return empty;
}

module.exports = uncompress;
