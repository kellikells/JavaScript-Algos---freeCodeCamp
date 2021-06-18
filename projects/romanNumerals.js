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



1 - figure out where to start
2 - use a function to determin whether it should calculate down, or add up
// 3 - the function will know, if it is 3 and under, 
3 - if the length is equal by either going higher, or going lower, use the lower





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
console.log(convertToRoman(5000));




// -----------------------------



// function convertToRoman(num) {
//     let start = 0;
//     let answer = '';
//     while (start != num) {
//         answer += I[1];
//         start += I[0]
//     }
//     // start += I[0];
//     console.log(`start ${start}`);
//     console.log(`answer ${answer}`);
// }



// -----------------------------
// function convertToRoman(num) {
//     let numArr = String(num).split('');

//     console.log(numArr);

//     let romanArr = [];
//     numArr.forEach((item, index) => {
//         if (item >= 1 && item <= 3 && index==0) {
//             romanArr.push('X'.repeat(item));
//             // romanArr.push('L'.repeat())
//         }
//         if (item == 4 && index == 0) {
//             romanArr.push('XL');
//         }

//         if (item >= 5 && item <=8 && index == 0) {
//             romanArr.push('L');
//             romanArr.push('X'.repeat(item-5))
//         }
//     })
//     console.log(romanArr);
//     // console.log(numArr);

//     return num;
// }

// convertToRoman(36);
// //  XXXVI
// convertToRoman(40);
// convertToRoman(51);
// convertToRoman(60);
// convertToRoman(70);
// convertToRoman(80);
// convertToRoman(90);

