// accept a variable number of arguments
// check if there are duplicates among args
// Time: O(n)
// Space: O(n)

function areThereDuplicates(...args: Array<string | number>): boolean {
    const argsSeen: {[key: string | number]: number} = {};
    for (var i = 0; i < args.length; i++) {
        if (argsSeen[args[i]] === undefined) argsSeen[args[i]] = 1
        else return true;
    }

    return false;
}

console.log({
    test1: areThereDuplicates(1,2,3), // false
    test2: areThereDuplicates(1,2,2), // true
    test3: areThereDuplicates("a", "b", "c", "a"), // true
})