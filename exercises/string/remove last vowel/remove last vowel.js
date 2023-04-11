const removeLastVowel = str => {
    let lstStr = str.split("")
    for (let i=lstStr.length-1;i>=0;i--) {
        if ('aeiou'.includes(lstStr[i])){
            lstStr.splice(i,1,'')
            
            return lstStr.join("")
        }
    }
    return lstStr.join("")
}


console.log(removeLastVowel('bootcamp')); // 'bootcmp'
console.log(removeLastVowel('better')); // 'bettr'
console.log(removeLastVowel('graph')); // 'grph'
console.log(removeLastVowel('thy')); // 'thy'
