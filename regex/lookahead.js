// Lookaheads are patterns that tell JavaScript to look - ahead in your string to check for patterns further along.
// This can be useful when you want to search for multiple patterns over the same string.

// There are two kinds of lookaheads:
//     positive lookahead and negative lookahead.

// ---------------------------
// A positive lookahead will look to make sure the element in the search pattern IS there,
//     but won't actually match it. 
//     A positive lookahead is used as (?=...) where the ...is the required part that is not matched.

// ---------------------------
// A negative lookahead will look to make sure the element in the search pattern IS NOT there.
//     A negative lookahead is used as (?!...) where the ...is the pattern that you do not want to be there.
//     The rest of the pattern is returned if the negative lookahead part is not present.

// ======================================

// Here is a(naively) simple password checker that looks for between 3 and 6 characters and at least one number:

let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password);