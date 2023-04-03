const isPrime = n => {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
};

const allPrimesBelow = num => {
    let primes = [];
    for (let i = 0; i <= num; i++) {
        if (isPrime(i)) {
            primes.push(i)
        }
    }
    return primes;
}

const nthPrime = n => {
    if (n <= 0) {
        return undefined;
    }
    let counter = 0;
    let i = 2;
    while (counter < n) {
        if (isPrime(i)) {
            counter++;
        }
        i++;
    }
    return i - 1;
};

// My solution

// let printNthPrime = n => {
//     // 1. it returns nth prime, for example, printNthPrime(1) returns 2, because it is the first prime number.
//     // 2. create a nCounter = 2, default is 2 because 2 is the first prime number.
//     // 2. conduct a while loop from 2 and increase by 1  
//     //    a. if printAllPrimeBelow(nCounter).length is same as n, then break
    
//     let nCounter = 2;
//     while (true) {

//         if (printAllPrimeBelow(nCounter).length === n){
//             let lastElement = printAllPrimeBelow(nCounter)[printAllPrimeBelow(nCounter).length - 1];
//             console.log(JSON.stringify(printAllPrimeBelow(nCounter)))
//             return lastElement;
//         }

//         nCounter++;
//     }
// }

module.exports = { isPrime, allPrimesBelow, nthPrime };
