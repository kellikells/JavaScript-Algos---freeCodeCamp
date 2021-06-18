function repeatStringNumTimes(str, num) {
    if (Math.abs(num) != num) return '';
    let newStr = '';
    while (num > 0) {
        newStr += str;
        num--;
    }
    return newStr;
}

// console.log(repeatStringNumTimes("abc", 3))
// -----------------------------------
function truncateString(str, num) {
    if (str.length <= num) return str;

    return str.slice(0, num) + '...';
}

// console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));  //A-tisket...
// -----------------------------------
function findElement(arr, func) {
    let num = 0;
    for (; num < arr.length; num++) {
        if (func(arr[num])) {
            return arr[num];
        }
    }
    return undefined;
}

// findElement([1, 2, 3, 4], num => num % 2 === 0);

// console.log(findElement([1, 3, 5, 8, 9, 10], function (num) { return num % 2 === 0; }))//return 8.
// -----------------------------------
function titleCase(str) {
    str = str.toLowerCase();
    str = str.split(' ');
    str = str.map((word) => {
        return word.slice(0, 1).toUpperCase() + word.slice(1)
    })
    str = str.join(' ');
    return str;
}

// console.log(titleCase("I'm a little tea pot"))

// ----------------------------------
function frankenSplice(arr1, arr2, n) {
    arr2.splice(n, 0, ...arr1);
    return arr2;
}

// console.log(frankenSplice([1, 2, 3], [4, 5], 1)) // should return [4, 1, 2, 3, 5].

// -----------------------------------
function bouncer(arr) {
    let newArr = [];
    arr.map((item) => {
        if (item) {
            newArr.push(item)
        }
    })
    return newArr;
}

// console.log(bouncer([7, "ate", "", false, 9]));


// -----------------------------------
function getIndexToIns(arr, num) {
    // sort the array
    arr = arr.sort((a, b) => (a - b))

    // go through and find where to insert
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] >= num) {
            return i
        }
        if (i == arr.length) {
            return i;
        }
    }

}

// console.log(getIndexToIns([10, 20, 30, 40, 50], 35))    // should return 3.
// console.log(getIndexToIns([10, 20, 30, 40, 50], 30))    // should return 2

// -----------------------------------
function mutation(arr) {
    let str1 = arr[0].toLowerCase();
    let str2 = arr[1].toLowerCase();

    for (let i = 0; i < str2.length; i++) {
        if (str1.indexOf(str2[i]) < 0) {
            return false
        }
    }
    return true;
}

// console.log(mutation(["Mary", "Army"]));    //  true
// console.log(mutation(["hello", "hey"]))     //   should return false.
// console.log(mutation(["hello", "Hello"]))   // should return true.

// -----------------------------------
// Write a function that splits an array(first argument) into groups the length of size(second argument) and returns them as a two - dimensional array.
function chunkArrayInGroups(arr, size) {
    let finalArr = [];
    let index = 0;
    let numberOfChunks= Math.floor(arr.length/size)
    for (let i = 0; i < numberOfChunks; i++) {
        let chunk = [];
        for (let j = 0; j < size; j++){
            chunk.push(arr[index]);
            index++;
        }
        finalArr.push(chunk);

    }
    console.log(index);
    if (index != arr.length) {
        // console.log('some left')
        finalArr.push(arr.slice(index))
    }
    return finalArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2))     //should return [["a", "b"], ["c", "d"]].
// console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3))   //should return [[0, 1, 2], [3, 4, 5]].
// console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2))  //should return [[0, 1], [2, 3], [4, 5]].
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4))   //should return [[0, 1, 2, 3], [4, 5]].
// -----------------------------------

