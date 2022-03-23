// Write a recursive functions which accepts an arry and a callback.
// Return true if a single value in the array returns true when passed
// to the callback, otherwise it returns false.

// SAMPLE INPUT / OUTPUT
const isOdd = val => val % 2 !== 0;

function someRecursive(arrayToCheck: Array<number>, callback: (num: number) => boolean): boolean {
    const lastVal = arrayToCheck.pop()
    if (lastVal === undefined) return false;
    return callback(lastVal) ? true : someRecursive(arrayToCheck, callback);
}

console.log({
    test1: someRecursive([1, 2, 3, 4], isOdd), // true
    test2: someRecursive([4,6,8,9], isOdd), // true
    test3: someRecursive([4,6,8], isOdd), // false
    test4: someRecursive([4,6,8], val => val > 10) // false
})