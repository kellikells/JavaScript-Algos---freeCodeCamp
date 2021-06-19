// Caesars Cipher
// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher.In a shift cipher the meanings of the letters are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places.Thus A ↔ N, B ↔ O and so on.

// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

// All letters will be uppercase.Do not transform any non - alphabetic character(i.e.spaces, punctuation), but do pass them on.

function rot13(str) {
    let arr = str.split('');
    console.log(arr)
    let shiftedArr = [];
    let lettersArr = [];

    // loop through split str, and get charCode + 13
    for (let i = 0; i < arr.length; i++){
        if (arr[i].match(/[^A-Z]/)) {
            console.log(`space at index: ${i}`)
            shiftedArr.push(arr[i]);
        } else {
            let numberVal = arr[i].charCodeAt(0);
            shiftedArr.push(numberVal += 13);
        }
    }

    // loop through numbers+13 array, and translate back to letters
    for (let i = 0; i < shiftedArr.length; i++){
        lettersArr.push(String.fromCharCode(shiftedArr[i]))
    }

    return lettersArr;
}
 



console.log(rot13("SERR PBQR PNZC"))// FREE CODE CAMP

// console.log(rot13("SERR CVMMN!"))// FREE PIZZA!

// console.log(rot13("SERR YBIR?"))// FREE LOVE ?