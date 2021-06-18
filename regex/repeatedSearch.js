// +   and     *



// Sometimes, you need to match a character(or group of characters) that appears one or more times in a row.This means it occurs at least once, and may be repeated.

// You can use the + character to check if that is the case.Remember, the character or pattern has to be present consecutively.That is, the character has to repeat one after the other.

// For example, /a+/g would find one match in abc and return ["a"].Because of the +, it would also find a single match in aabc and return ["aa"].

// If it were instead checking the string abab, it would find two matches and return ["a", "a"] because the a characters are not in a row - there is a b between them.Finally, since there is no a in the string bcd, it wouldn't find a match.
// ============================================

// The last challenge used the plus + sign to look for characters that occur one or more times.There's also an option that matches characters that occur zero or more times.

// The character to do this is the asterisk or star: *.

// let soccerWord = "gooooooooal!";
// let gPhrase = "gut feeling";
// let oPhrase = "over the moon";
// let goRegex = /go*/;
// soccerWord.match(goRegex);
// gPhrase.match(goRegex);
// oPhrase.match(goRegex);
// In order, the three match calls would return the values["goooooooo"], ["g"], and null.