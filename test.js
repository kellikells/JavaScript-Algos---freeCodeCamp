// // We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

// // For example, sumAll([4, 1]) should return 10 because sum of all the numbers between 1 and 4(both inclusive) is 10.
// 1 + 4 + + 2 3


sumAll([1, 4]);
sumAll([5, 10]);
sumAll([10, 5]);


function sumAll(arr) {
    let answer = 0;

    let firstNum = arr[0];
    let secondNum = arr[1];

    if (secondNum > firstNum) {
        
        while (firstNum <= secondNum) {
            answer += firstNum;
            firstNum++;
        }
    }
    if (firstNum > secondNum) {
        firstNum = arr[1];
        secondNum = arr[0];
        while (firstNum <= secondNum) {
            answer += firstNum;
            firstNum++;
        }
    }
    console.log(answer);
    return answer;
}

// sumAll([1, 4]);
// sumAll([5, 10]);
// sumAll([10, 5]);


// sumAll([1, 4]) should return 10.

// sumAll([4, 1]) should return 10.

// sumAll([5, 10]) should return 45.

// sumAll([10, 5]) should return 45.

// ------------------------

// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.In other words, return the symmetric difference of the two arrays.

//     Note: You can return the array with its elements in any order.
//     Note: You can return the array with its elements in any order.







// diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) should return an array.

// ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["pink wool"].

// ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return an array with one item.

// ["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["diorite", "pink wool"].

// -----------------------------------------



// -----------------------------------------



// -----------------------------------------



// -----------------------------------------



// -----------------------------------------



// -----------------------------------------




