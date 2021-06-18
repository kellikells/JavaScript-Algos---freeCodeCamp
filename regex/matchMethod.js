// You can also extract the actual matches you found with the.match() method.

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; 
let result = extractStr.match(codingRegex);

console.log(result);