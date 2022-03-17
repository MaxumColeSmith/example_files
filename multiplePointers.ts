// space must be O(1)
// time must be O(n)

function countUniqueValues(sortedNumberArray: Array<number>): number {
    // time of O(n) should be easy, just iterate through the list
    // space O(1) means we have constant assignments, never growing with length of list
    // of course parsing out data from array is O(n), and const assigns it, so odd

    if (!sortedNumberArray.length) return 0;
    let uniqueCount: number = 1;
    for (const numIndex in sortedNumberArray) {
        if (sortedNumberArray.length - 1 > +numIndex) {
            if (sortedNumberArray[numIndex] !== sortedNumberArray[+numIndex + 1]) {
                uniqueCount += 1
            }
        }
    }
    return uniqueCount;
}

console.log({
    test1: countUniqueValues([1,1,1,1,1,2]), // 2
    test2: countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]), // 7
    test3: countUniqueValues([]), // 0
    test4: countUniqueValues([-2,-1,-1,0,1]) // 4
})