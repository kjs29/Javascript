/*
    1. Create helper function that takes a word which has to start with vowel.
*/
let removeConsonant = word => {
    /*
        1. convert word into array, each character is an element
        2. iterate through array.
            a. if each character is consonant, it removes it
        3. convert back to string
    */
    let arr = word.split("");
    const vowels = 'aeiou';
    for (let i=0; i<arr.length; i++) {
        
        if (!vowels.includes(arr[i].toLowerCase())) {
            arr.shift();
            i--;
        } else {
            break;
        }
   }
   return arr.join("");
}

function consonantCancel(sentence) {
    /*
        1. convert sentence to array
        2. iterate through the array
        3. apply the helper function to each element
        4. convert back to string 
    */
    let arr = sentence.split(" ");
    for (let i=0;i<arr.length;i++) {
        arr[i] = removeConsonant(arr[i])
    }    
    return arr.join(" ");
}

module.exports = { removeConsonant, consonantCancel }
