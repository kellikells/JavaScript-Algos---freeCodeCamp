//      \w      \W     \d      \D      \s   \S  


// You've learned that you can use a shortcut to match alphanumerics [A-Za-z0-9_] using \w.
// ---------------------------------
// A natural pattern you might want to search for is the opposite of alphanumerics.

// You can search for the opposite of the \w with \W
// Note, the opposite pattern uses a capital letter.This shortcut is the same as [^ A - Za - z0 -9_].

// ---------------------------------

// The shortcut to look for digit characters is \d, with a lowercase d

// This is equal to the character class [0 - 9],
// which looks for a single character of any number between zero and nine.

// ---------------------------------
// The shortcut to look for non - digit characters is \D


// This is equal to the character class [^ 0 - 9],
    // which looks for a single character that is not a number between zero and nine.

// ---------------------------------

// search for whitespace is \s 

// equal to the character class [\r\t\f\n\v]

// --------------------------------------
// Search for non - whitespace using \S, which is an uppercase s.

// This pattern will not match whitespace, carriage return, tab, form feed, and new line characters.

// You can think of it being similar to the character class [^ \r\t\f\n\v].