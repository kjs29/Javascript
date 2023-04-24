
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


/* 
    callback chain order : 
                            1. askLimit()
                            2. askRange()
                            3. confirm()
                            4. askGuess()
*/


// variables 
let [max, min] = [];
let secretNumber;
let numAttempts = 0;


// Callback chain order : 1

const askLimit = () => {
    /*
        Ask user for a limit of tries
    */

    rl.question('Enter your limit of tries: ', answer => {
        numAttempts = Number(answer);
        askRange();
    })
}


// Callback chain order : 2

const askRange = () => {    
    /*
        Ask user for max, and min number, respectively.
        If user types wrong max, min numbers, start over.

        function used : isNumber()
                        randomInRange()
                        confirm()
                        askLimit()
    */

    rl.question('Enter a max number: ', answer1 => {
        max = Number(answer1);

        rl.question('Enter a min number: ', answer2 => {
            min = Number(answer2);
            if (isNumber(max,min)) {

                if (min < max) {
                    console.log(`I am thinking of a number between ${min} and ${max}...`);
                    secretNumber = randomInRange(min, max);
                    console.log(`<hidden message : Secret number is ${secretNumber}>`);
                    rl.question(`\nAre you satisfied with the current setting? (Y/N) :`, confirm)
                } else {
                    console.log('Min should be lower than max, starting over...\n')
                    askLimit();
                }

            } else {
                console.log('Enter valid numbers\n');
                askRange();
            }
            
        })
        
    })
};

const isNumber = (...numbers) => {
    /*
        check whether all the arguments are numbers
    */

    for (let i = 0; i < numbers.length; i++) {
        let eachNum = numbers[i];
        if (isNaN(eachNum)) {
            return false;
        }
    }
    return true;
};

const randomInRange = (min, max) => {
    /*
        Let program return a random number in range(min, max). Both inclusive.
    */

    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1) + min);
};


// Callback chain order : 3

const confirm = yesOrNo => {
    /*
        Check whether user wants to confirm the current setting
        including numAttempts, max, min.

        function used :     askGuess()
                            askLimit()
    */

    if (yesOrNo.toLowerCase() === 'y') {
        askGuess();
    } else {
        console.log('Okay, starting over...\n')
        askLimit();
    }
};


// Callback chain order : 4

const askGuess= () => {
    /*
        Check whether user has enough numAttempts.
        If user has no numAttempts left, user loses.
        If user has numAttempts left, user has chances to guess until they guess correctly.

        function used :     checkGuess()
                            askGuess() - recursive
    */
    if (numAttempts > 0) {
        numAttempts--;
        rl.question(`\nEnter a guess(${numAttempts + 1} tries left): `, guess => {
            if (checkGuess(Number(guess))) {
                console.log("You Won!");
                rl.close();
            } else {
                askGuess();
            }
        })
    } else {
        console.log('You Lost.')
        rl.close();
    }
};

const checkGuess = (guess) => {
    /*
        Validate user's guess, and return boolean value
        indicating whether the guess is too high, too low, or correct answer.
    */
    if (guess < secretNumber) {
        console.log('Too low');
        return false;
    } else if (guess > secretNumber) {
        console.log('Too high');
        return false;
    } else if (guess === secretNumber) {
        console.log('Correct!');
        return true;
    }
};


// Program starts

askLimit();
