function palindrome(str) {
    str = str.toLowerCase();

    let arr1 = str.split('');
    let charArr1 = arr1.map((item) => {
        return (item.match("^[a-zA-Z0-9]*$"))
    });
    let str1 = charArr1.join('')


    let arr2 = [];
    for (let i = arr1.length - 1; i >= 0; i--) {
        arr2.push(arr1[i]);
    }
    let charArr2 = arr2.map((item) => {
        // return (item.match(/[a-z]/i))
        return (item.match("^[a-zA-Z0-9]*$"))
    });
    let str2 = charArr2.join('')

    console.log(`str1 : ${str1}`);
    console.log(`str2 : ${str2}`);

    return (str1 == str2)

}



console.log(palindrome("eye"))  //true
console.log(palindrome("1 eye for of 1 eye."))   //false
// palindrome("A man, a plan, a canal. Panama")