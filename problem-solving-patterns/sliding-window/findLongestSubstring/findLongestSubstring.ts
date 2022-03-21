function findLongestSubstring(stringToExamine: string): number {
    // return 0 if the string doesn't have length
    if (stringToExamine.length === 0) return 0;

    // save the indicies of where characters are seen
    // reset this index when beginning a new substring
    let existingCharacterIndex: {[key: string]: number} = {};

    // keep track of where we are in the string
    let indexPointer: number = 0;

    // store the global maximum value
    let globalMaxValue: number = -Infinity;
    let uniqueCount: number = 0;
    
    while (indexPointer < stringToExamine.length) {
        const char = stringToExamine[indexPointer];
        // if the character exists already in the index, we know it is a repeat
        if (existingCharacterIndex[char] !== undefined) {
            if (uniqueCount > globalMaxValue) globalMaxValue = uniqueCount;
            uniqueCount = 0;
            indexPointer = 1 + existingCharacterIndex[char];
            existingCharacterIndex = {};
        }
        existingCharacterIndex[stringToExamine[indexPointer]] = indexPointer;
        indexPointer++;
        uniqueCount++;
    }
    if (uniqueCount > globalMaxValue) globalMaxValue = uniqueCount;
    return globalMaxValue;
}

console.log({
    test: findLongestSubstring(''), // 0
    test2: findLongestSubstring('rithmschool'), // 7
    test3: findLongestSubstring('thisisawesome'), // 6
    test4: findLongestSubstring('thecatinthehat'), // 7
    test5: findLongestSubstring('bbbbbb'), // 1
    test6: findLongestSubstring('longestsubstring'), // 8
    test7: findLongestSubstring('thisishowwedoit'), // 6
})