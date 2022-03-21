// time complexity: O(N+M)
// Space Complexity: O(1)
function isSubsequence(target, search) {
    if (target.length > search.length)
        return false;
    var targetIndex = 0;
    for (var _i = 0, search_1 = search; _i < search_1.length; _i++) {
        var char = search_1[_i];
        if (target[targetIndex] === char) {
            targetIndex++;
            if (targetIndex === target.length)
                return true;
        }
    }
    return false;
}
console.log({
    test1: isSubsequence('hello', "hello world"),
    test2: isSubsequence("sing", "sting"),
    test3: isSubsequence("abc", "abracadabra"),
    test4: isSubsequence("abc", "acb"),
    test5: isSubsequence("", "acb")
});
//# sourceMappingURL=isSubsequence.js.map