// -----------------------------------------------------------------------

// Convert HTML Entities
// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str) {
    let and = '&amp;';
    let lt = '&lt;';
    let gt = '&gt;';
    let doubleQuotes = '&quot;';
    let apostrophe = '&apos;';
    str = str.replace(/&/g, and);
    str = str.replace(/</g, lt);
    str = str.replace(/>/g, gt);
    str = str.replace(/"/g, doubleQuotes);
    str = str.replace(/'/g, apostrophe);

    return str;
}

// console.log(convertHTML("Dolce & Gabbana")) // Dolce &amp; Gabbana.
// console.log(convertHTML("Hamburgers < Pizza < Tacos"))  // Hamburgers &lt; Pizza &lt; Tacos.

// -----------------------------------------------------------------------
// Sum All Odd Fibonacci Numbers
// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers.The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

// For example, sumFibs(10)) return10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

function sumFibs(num) {
    let prev = 0;
    let curr = 1;
    let sum = 0;
    while (curr <= num) {
        if (curr % 2 !== 0) {
            sum += curr;
        }
        curr += prev;
        prev = curr - prev;
        // console.log(curr);
    }
    return sum;
}
// console.log(sumFibs(1)) // 1.
// console.log(sumFibs(5)) // 10.
// console.log(sumFibs(1000))  // 1785.

// -----------------------------------------------------------------------
// Sum All Primes
// A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself.For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

// Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

function sumPrimes(num) {
    let sum = 2;
    if (num == 2) return sum;
    if (num == 1) return 0;

    while (num > 2) {
        let prime = true;
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                prime = false;
                break;
            }
        }
        if (prime == true) {
            sum += num
        }
        num--;
    }
    return sum;
}
// console.log(sumPrimes(10)) // 17.   //  2 3 5 7
// console.log(sumPrimes(977)) // 73156.

// -----------------------------------------------------------------------
// Smallest Common Multiple
// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

function smallestCommonMultiple(arr) {
    const [MIN, MAX] = arr.sort((a, b) => a - b);
    let primeFactors = {};

    for (let i = MIN; i <= MAX; i++) {
        let primes = getPrimeFactors(i);
        for (let j in primes) {
            if (!primeFactors[j] || primes[j] > primeFactors[j]) {
                primeFactors[j] = primes[j]
            }
        }
    }

    let multiple = 1;
    for (let i in primeFactors) {
        console.log(`${i}: ${primeFactors[i]}`)
        multiple *= i ** primeFactors[i]
    }
    return multiple;

    function getPrimeFactors(number) {
        const factorsObj = {};
        for (let prime = 2; prime <= number; prime++) {  // starts from 2 because 2 is the first given prime

            // get count of factors
            while ((number % prime) === 0) {
                factorsObj[prime] = (factorsObj[prime])
                    ? factorsObj[prime] + 1
                    : 1;
                number /= prime;    // return the divided amount;
            }
        }
        return factorsObj;
    }
}
// console.log(smallestCommons([1, 5]))    // 60.
// console.log(smallestCommons([5, 1]))    // 60.
// console.log(smallestCommons([2, 10]))   // 2520.

// -----------------------------------------------------------------------
// Drop it
// Given the array arr, iterate through and remove each element starting from the first element(the 0 index) until the function func returns true when the iterated element is passed through it.

// Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.

function dropElements(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            return arr.slice(i);
        }
    }
    return [];
}
// console.log(dropElements([0, 1, 0, 1], function (n) { return n === 1; }))   // [1, 0, 1].
// console.log(dropElements([1, 2, 3], function (n) { return n > 0; }))    // [1, 2, 3].
// console.log(dropElements([1, 2, 3, 4], function (n) { return n > 5; })) // [].

// -----------------------------------------------------------------------
// Steamroller
// Flatten a nested array.You must account for varying levels of nesting.
// * don't use Array.prototype.flat() or Array.prototype.flatMap();

function steamrollArray(arr) {
    let flatArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (checkIfArray(arr[i])) {
            flatArr.push(...steamrollArray(arr[i]))
        } else {
            flatArr.push(arr[i])
        }
    }
    // console.log(`flatArrOUtside ${flatArr}`)
    return flatArr;

    function checkIfArray(element) {
        return Array.isArray(element);
    }
}
// console.log(steamrollArray([[["a"]], [["b"]]])) // ["a", "b"].
// console.log(steamrollArray([1, [2], [3, [[4]]]]))   // [1, 2, 3, 4].
// console.log(steamrollArray([1, [], [3, [[4]]]]))    // [1, 3, 4].
// console.log(steamrollArray([1, {}, [3, [[4]]]]))    // [1, {}, 3, 4].

// -----------------------------------------------------------------------
// Binary Conversion
// Return an English translated sentence of the passed binary string.
// The binary string will be space separated.

function binaryAgent(str) {
    return String.fromCharCode(
        ...str.split(" ").map(function (char) {
            return parseInt(char, 2);
        })
    );
}

function binaryAgent2(str) {
    let binaryArr = str.split(' ');
    let wordArr = [];

    for (let i = 0; i < binaryArr.length; i++) {
        wordArr.push(String.fromCharCode(parseInt(binaryArr[i], 2)));   //using radix 2 , for binary
    }
    let word = wordArr.join('');
    return word;
}

// console.log('I'.charCodeAt(0));  // 73
// console.log(String.fromCharCode(73));   //  I
// console.log(' '.charCodeAt(0));  // 32
// console.log(String.fromCharCode(32));   // ' '

// console.log( binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001")) // I love FreeCodeCamp!

// -----------------------------------------------------------------------
// Everything Be True

// Check if the predicate(second argument) is truthy on all elements of a collection(first argument).
// In other words, you are given an array collection of objects.The predicate pre will be an object property and you need to return true if its value is truthy.Otherwise, return false.
// In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.
// Remember, you can access object properties through either dot notation or[] notation.

function truthCheck(collection, pre) {
    for (let obj of collection) {
        if (!obj[pre]) {
            return false;
        }
    }
    return true;
}
// console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"))   // true.
// console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"))  // false.

// -----------------------------------------------------------------------

// Arguments Optional

// Create a function that sums two arguments together.If only one argument is provided, then return a function that expects one argument and returns the sum.
// If either argument isn't a valid number, return undefined.

// For example, addTogether(2, 3))  // 5, and addTogether(2))   // a function.
// Calling this returned function with a single argument will then return the sum:
//      var sumTwoAnd = addTogether(2);
//      sumTwoAnd(3) returns 5.

function addTogether() {
    let firstArg = arguments[0];

    // checking for type numbers
    for (let arg of arguments) {
        if (arg.length) return undefined;
    }

    // sum two arguments
    if (arguments.length === 2) {
        return arguments[0] + arguments[1]
    }

    // if only 1 argument provided****
    if (arguments.length == 1) {
        return function (y) {   // returning a function that will run & sum
            if (typeof y != 'number') return undefined;
            return firstArg + y;
        }
    }
}
// console.log(addTogether(2, 3))  // 5.
// console.log(addTogether(5)(7))  // 12.
// console.log(addTogether("http://bit.ly/IqT6zt"))    // undefined.
// console.log(addTogether(2, "3"))    // undefined.
// console.log(addTogether(2)([3]));   //undefined

// -----------------------------------------------------------------------
// Make a Person
// Fill in the object constructor with the following methods below:

// getFirstName()
// getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(firstAndLast)
// Run the tests to see the expected output for each method.The methods that take an argument must accept only one argument and it has to be a string.These methods must be the only available means of interacting with the object.
// ---------------

var BestPracticesPerson = function (firstAndLast) {
    var fullName = firstAndLast;

    this.getFirstName = function () {
        return fullName.split(" ")[0];
    };

    this.getLastName = function () {
        return fullName.split(" ")[1];
    };

    this.getFullName = function () {
        return fullName;
    };

    this.setFirstName = function (name) {
        fullName = name + " " + fullName.split(" ")[1];
    };

    this.setLastName = function (name) {
        fullName = fullName.split(" ")[0] + " " + name;
    };

    this.setFullName = function (name) {
        fullName = name;
    };
};


// ---------------

var Person = function (firstAndLast) {
    this.getFullName = function () {
        return firstAndLast;
    };
    this.getFirstName = function () {
        for (let i = 1; i < firstAndLast.length; i++) {
            if (firstAndLast[i].match(/\s/)) {
                return firstAndLast.slice(0, i)
            }
        }
    };
    this.getLastName = function () {
        for (let i = 1; i < firstAndLast.length; i++) {
            if (firstAndLast[i].match(/\s/)) {
                return firstAndLast.slice(i + 1)
            }
        }
    };
    this.setFirstName = function (first) {
        this.last = this.getLastName();
        firstAndLast = first + ' ' + this.last;
    };
    this.setLastName = function (last) {
        this.first = this.getFirstName();
        firstAndLast = this.first + ' ' + last;
    };
    this.setFullName = function (firstAndLast) {
        this.firstN = '';
        this.lastN = '';
        for (let i = 1; i < firstAndLast.length; i++) {
            if (firstAndLast[i].match(/\s/)) {
                this.firstN = firstAndLast.slice(0, i);
                this.lastN = firstAndLast.slice(i + 1);
            }
        }
        this.setFirstName(this.firstN);
        this.setLastName(this.lastN);
    };
    return firstAndLast;
};

let bob = new Person('Bob Ross')

// console.log(Object.keys(bob).length)    // 6.
// console.log(bob instanceof Person)  // true.
// console.log(bob.firstName)  // undefined.
// console.log(bob.lastName)   // undefined.
// console.log(bob.getFirstName()) //  Bob.
// console.log(bob.getLastName()) //  Ross.
// console.log(bob.getFullName());// Bob Ross
// console.log(bob.setFirstName('Kelli'))
// console.log(bob.getFirstName()) //  Kelli
// console.log(bob.setLastName('Kells'))
// console.log(bob.getLastName());// Kells
// console.log(bob.setFullName('Please Work'))
// console.log(bob.getFullName());// Please Work

// -----------------------------------------------------------------------
// Map the Debris
// Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

// The array will contain objects in the format { name: 'name', avgAlt: avgAlt }.

// You can read about orbital periods on Wikipedia.

// The values should be rounded to the nearest whole number.The body being orbited is Earth.

// The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s - 2.


function orbitalPeriod(arr) {
    const GM = 398600.4418;   //km3s-2
    const earthRadius = 6367.4447;    //km

    let finalArr = arr.map((item) => {
        let orbitalPeriod = getOrbitalPeriod(item.avgAlt, GM)
        return { 'name': item.name, 'orbitalPeriod': orbitalPeriod }
    })

    return finalArr;

    function getOrbitalPeriod(a, gm) {
        let seconds = (2 * Math.PI) * (Math.sqrt((Math.pow((a + earthRadius), 3)) / gm));
        return Math.round(seconds);
    }
}

console.log(orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]))
// [{name: "sputnik", orbitalPeriod: 86400}].

console.log(orbitalPeriod([{ name: "iss", avgAlt: 413.6 }, { name: "hubble", avgAlt: 556.7 }, { name: "moon", avgAlt: 378632.553 }]))
// [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}].



// -----------------------------------------------------------------------





// -----------------------------------------------------------------------





// -----------------------------------------------------------------------