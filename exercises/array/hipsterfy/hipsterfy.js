
const removeLastVowel = word => {
    /*
    1. create vowel variable
    2. convert word into array, with each character as element
    3. create vowelIndex variable that shows each vowel's index
    4. iterate through the array
       a. find the vowel, if it is vowel, assign the vowel index to vowelIndex, 
    5. remove the element with that vowelIndex
    
    */
    let vowels = 'aeiou';
    let array = word.split('');
    let vowelIndex = null;
    for (let i=0;i<array.length;i++){
        if (vowels.includes(array[i])) {
            vowelIndex = i;
        }
    }
    if (typeof vowelIndex === "number") {
        array.splice(vowelIndex,1)
    }
    return array.join("");
}

console.log(removeLastVowel('hello')); // hell
console.log(removeLastVowel("gpt"));    // gpt

const hipsterfy = sentence => {
    /*
        1. convert sentence to array
        2. iterate through the array
        3. remove last vowel
        4. convert back to string
    */
    let arr = sentence.split(" ");
    for (let i=0;i<arr.length;i++) {
        arr[i] = removeLastVowel(arr[i])
    }
    return arr.join(" ");
}

console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'
