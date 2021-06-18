// Sum all numbers in range

function sumAll(arr) {
    let inOrder = arr.sort((a, b) => a - b);
    let start = inOrder[0];
    let finish = inOrder[1];
    let sum = 0;
    while (start <= finish) {
        sum += start;
        start++;
    }
    return sum;
}

// console.log(sumAll([1, 4]))
// console.log(sumAll([4, 1]));

// ----------------------------------------

// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.In other words, return the symmetric difference of the two arrays.

//     Note: You can return the array with its elements in any order.

function diffArray1(arr1, arr2) {
    return arr1
        .concat(arr2)
        .filter(item => !arr1.includes(item) || !arr2.includes(item));
}
// -----------------------------
function diffArray(arr1, arr2) {
    var newArr = [];
    for (let i = 0; i < arr1.length; i++) {
        let count = 0;
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] == arr2[j]) {
                count++;
            }
        }
        if (count == 0) {
            newArr.push(arr1[i]);
        }
        count = 0;
    }
    for (let i = 0; i < arr2.length; i++) {
        let count = 0;
        for (let j = 0; j < arr1.length; j++) {
            if (arr2[i] == arr1[j]) {
                count++;
            }
        }
        if (count == 0) {
            newArr.push(arr2[i]);
        }
        count = 0;
    }
    return newArr;
}

// console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
// console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]))

// ----------------------------------------

// You will be provided with an initial array(the first argument in the destroyer function), followed by one or more arguments.Remove all elements from the initial array that are of the same value as these arguments.

//     Note: You have to use the arguments object.

function destroyer(arr) {
    let arg1 = arguments[0];

    for (let i = 1; i < arguments.length; i++) {
        for (let j = 0; j < arg1.length; j++) {
            if (arg1[j] == arguments[i]) {
                arg1.splice(j, 1)
                j--;
            }
        }
    }
    return arg1;
}

// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))    //  [1,1]
// console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5))    // [1]
// ----------------------------------------

function whatIsInAName(collection, source) {
    var arr = [];
    let keys = Object.keys(source);
    let values = Object.values(source);

    for (let i = 0; i < collection.length; i++) {
        let match = 0;
        let numToMatch = keys.length;
        let currCollection = collection[i];
        for (let j = 0; j < keys.length; j++) {
            let currKey = keys[j];
            if (currCollection[currKey] == values[j]) {
                match++
            }
        }
        if (match == numToMatch) {
            arr.push(collection[i]);
        }
        match = 0;
    }
    return arr;
}

// console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));    //[{ first: "Tybalt", last: "Capulet" }
// console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }))   //  [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }].
// ----------------------------------------

// Convert a string to spinal case.Spinal case is all - lowercase - words - joined - by - dashes.

function spinalCase(str) {
    let spaces = /\s/g;
    let dashes = /_/g;
    let newStr = '';

    str = str.replace(/([a-z])([A-Z])/g, "$1 $2");

    for (let char of str) {
        if (char.match(spaces) || char.match(dashes)) {
            newStr += '-';
        }
        else {
            newStr += char;
        }
    }
    newStr = newStr.toLowerCase();
    return newStr;
}

// console.log(spinalCase("This Is Spinal Tap")) // this - is - spinal - tap.
// console.log(spinalCase("thisIsSpinalTap")) // this - is - spinal - tap
// console.log(spinalCase("The_Andy_Griffith_Show")) // the - andy - griffith - show
// ----------------------------------------

// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

// - If a word begins with a vowel, just add way at the end.
function translatePigLatin(str) {
    for (let i = 0; i < str.length; i++){
        if (str[i].match(/[aeiou]/) && i == 0) {
            return str.concat('way');
        }
        if (str[i].match(/[aeiou]/) && i != 0) {
            return str.slice(i) + str.slice(0, i) + 'ay';
        }
        if (i == str.length - 1) {
            return str.concat('ay');
        }
    }
}

// console.log(translatePigLatin("california")) //  aliforniacay.
// console.log(translatePigLatin("algorithm")) //  algorithmway.
// console.log(translatePigLatin("glove")) //  oveglay

// ----------------------------------------
// Perform a search and replace on the sentence using the arguments provided and return the new sentence.
// First argument is the sentence to perform the search and replace on.
// Second argument is the word that you will be replacing(before).
// Third argument is what you will be replacing the second argument with (after).

    Note: Preserve the case of the first character in the original word when you are replacing it.For example if you mean to replace the word Book with the word dog, it should be replaced as Dog



// ----------------------------------------





// ----------------------------------------




// ----------------------------------------





// ----------------------------------------





// ----------------------------------------




// ----------------------------------------





// ----------------------------------------





// ----------------------------------------




// ----------------------------------------





// ----------------------------------------





// ----------------------------------------




// ----------------------------------------





// ----------------------------------------





// ----------------------------------------




// ----------------------------------------





// ----------------------------------------





// ----------------------------------------