// You can specify the lower and upper number of patterns with quantity specifiers.

// Quantity specifiers are used with curly brackets({ and }).

// You put two numbers between the curly brackets - 
//     for the lower and upper number of patterns.


// For example, to match only the letter a appearing between 3 and 5 times in the string ah, your regex would be 
    /a{3,5}h/
        


// For example, to match only the string hah with the letter a appearing at least 3 times, your regex would be 
    /ha{3,}h/


// For example, to match only the word hah with the letter a 3 times, your regex would be 
    /ha{3}h/