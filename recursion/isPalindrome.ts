import { reverse } from "./reverse";

function isPalindrome(stringToCheck: string): boolean {
    if (stringToCheck === reverse(stringToCheck)) return true;
    return false;
}

console.log({
    test1: isPalindrome('awesome'), // false,
    test2: isPalindrome('foobar'), // false,
    test3: isPalindrome('tacocat'), // true,
    test4: isPalindrome('amanaplanacanalpanama'), // true,
    test5: isPalindrome('amanaplanacanalpandemonium'), // false
})