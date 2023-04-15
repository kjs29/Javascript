function countScores(people) {
    /*
    1. create an empty object
    2. Iterate through ppl
      a. set log as {name:'Anthony',score:10} 
      b. set valueName as log.name
      c. if valueName doesnt exist in empty, set it as score
      d. if valueName exists, add the current score
    */
    let empty = {};
    for (i in people) {
    let log = people[i]
    let valueName = log.name;
    let valueScore = log.score;
    if (empty[valueName] === undefined) {
        empty[valueName] = valueScore
    } else {
        empty[valueName] += valueScore
    }
    }
    return empty;
}
