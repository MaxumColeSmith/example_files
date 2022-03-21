function findLongestSubstring(stringToExamine) {
    // return 0 if the string doesn't have length
    if (stringToExamine.length === 0)
        return 0;
    // save the indicies of where characters are seen
    // reset this index when beginning a new substring
    var existingCharacterIndex = {};
    // keep track of where we are in the string
    var indexPointer = 0;
    // store the global maximum value
    var globalMaxValue = -Infinity;
    var uniqueCount = 0;
    while (indexPointer < stringToExamine.length) {
        var char = stringToExamine[indexPointer];
        // if the character exists already in the index, we know it is a repeat
        if (existingCharacterIndex[char] !== undefined) {
            if (uniqueCount > globalMaxValue)
                globalMaxValue = uniqueCount;
            uniqueCount = 0;
            indexPointer = 1 + existingCharacterIndex[char];
            existingCharacterIndex = {};
        }
        existingCharacterIndex[stringToExamine[indexPointer]] = indexPointer;
        indexPointer++;
        uniqueCount++;
    }
    if (uniqueCount > globalMaxValue)
        globalMaxValue = uniqueCount;
    return globalMaxValue;
}
console.log({
    test: findLongestSubstring(''),
    test2: findLongestSubstring('rithmschool'),
    test3: findLongestSubstring('thisisawesome'),
    test4: findLongestSubstring('thecatinthehat'),
    test5: findLongestSubstring('bbbbbb'),
    test6: findLongestSubstring('longestsubstring'),
    test7: findLongestSubstring('thisishowwedoit'), // 6
});
//# sourceMappingURL=findLongestSubstring.js.map