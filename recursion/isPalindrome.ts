function isPalindrome(stringToCheck: string): boolean {
    if (stringToCheck === reverse(stringToCheck)) return true;
    return false;
}

function reverse(stringToReverse: string): string {
    if (stringToReverse.length === 0) return '';
    const lastChar = stringToReverse[stringToReverse.length - 1];
    const subString = stringToReverse.substring(0, stringToReverse.length - 1);
    return `${lastChar}${reverse(subString)}`
}

console.log({
    test1: isPalindrome('awesome'), // false,
    test2: isPalindrome('foobar'), // false,
    test3: isPalindrome('tacocat'), // true,
    test4: isPalindrome('amanaplanacanalpanama'), // true,
    test5: isPalindrome('amanaplanacanalpandemonium'), // false
})