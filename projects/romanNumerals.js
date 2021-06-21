// I = 1;
// V = 5
// X = 10
// L = 50
// C = 100
// D = 500
// M = 1000

//  I   V   X     L      C      D      M
//  1   5   10    50    100    500    1000

// 1-3, 4-8, 9-13

// if the length of 'whatever' is greater than 3, switch to ... 

// const romanNums = {
//     I: 1,
//     V: 5,
//     X: 10,
// }

let I = [1, 'I'];

let V = [5, 'V'];
let X = [10, 'X'];
let L = [50, 'L'];
let C = [100, 'C'];
let D = [500, 'D'];
let M = [1000, 'M'];

romanArr = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];
numsArr = [1000, 500, 100, 50, 10, 5, 1];

// convertToRoman(4)

// 3=III      4=IV    7=VII   9=IX      23=XXIII     24=XXIV      28=XXVIII      29= IXXX



// 1 - figure out where to start
// 2 - use a function to determin whether it should calculate down, or add up
// 3 - if the length is equal by either going higher, or going lower, use the lower





// -----------------------------
let letter = romanArr[0]
// console.log(letter)
// console.log(letter[0])

function convertToRoman(num) {
    let start = 0;
    let str = '';
    while (num != start) {
        for (let i = 0; i < romanArr.length; i++) {
            while (start += numsArr[i] < num) {
                start += numsArr[i];
                console.log(start)
                // console.log(str)
                // str.concat(romanArr[i]);
            }
        }
        console.log('hello')
        return str;
    }
    // return str;
}




// -----------------------------


console.log(convertToRoman(2))  // II.
console.log(convertToRoman(3))  // III.
console.log(convertToRoman(4))  // IV.
console.log(convertToRoman(5))  // V.
console.log(convertToRoman(9))  // IX.
console.log(convertToRoman(12)) // XII.
console.log(convertToRoman(16)) // XVI.
console.log(convertToRoman(29)) // XXIX.
console.log(convertToRoman(44)) // XLIV.
console.log(convertToRoman(45)) // XLV.
console.log(convertToRoman(68)) // LXVIII
console.log(convertToRoman(83)) // LXXXIII
console.log(convertToRoman(97)) // XCVII
console.log(convertToRoman(99)) // XCIX
console.log(convertToRoman(400))    // CD
console.log(convertToRoman(500))    // D
console.log(convertToRoman(501))    // DI
console.log(convertToRoman(649))    // DCXLIX
console.log(convertToRoman(798))    // DCCXCVIII
console.log(convertToRoman(891))    // DCCCXCI
console.log(convertToRoman(1000))   // M
console.log(convertToRoman(1004))   // MIV
console.log(convertToRoman(1006))   // MVI
console.log(convertToRoman(1023))   // MXXIII
console.log(convertToRoman(2014))   // MMXIV
console.log(convertToRoman(3999))   // MMMCMXCIX


