
//Given 2 strings, write a method to decide if one is a permutation of the other.

function checkPermutation (string1, string2) {
    let firstWord = string1.split("");
    let secondWord = string2.split("");
    let isPermutation = false;

    for (let i = 0; i < firstWord.length; i++) {
        for (let j = 0; j < secondWord.length; j++) {
            if (secondWord[j] === a[i]) {
                isPermutation = true;
                break;
            }
            else {
                isPermutation = false;
            }
        }
    }
    return isPermutation;
};

console.log(checkPermutation("car", "racecar"));
console.log(checkPermutation("car", "car"));
console.log(checkPermutation("", "racecar"));
console.log(checkPermutation("empath", "racecar"));

