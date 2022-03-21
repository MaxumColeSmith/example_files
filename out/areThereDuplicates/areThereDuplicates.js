// accept a variable number of arguments
// check if there are duplicates among args
// Time: O(n)
// Space: O(n)
function areThereDuplicates() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var argsSeen = {};
    for (var i = 0; i < args.length; i++) {
        if (argsSeen[args[i]] === undefined)
            argsSeen[args[i]] = 1;
        else
            return true;
    }
    return false;
}
console.log({
    test1: areThereDuplicates(1, 2, 3),
    test2: areThereDuplicates(1, 2, 2),
    test3: areThereDuplicates("a", "b", "c", "a"), // true
});
//# sourceMappingURL=areThereDuplicates.js.map