const binarySearch = (sortedArray: Array<number>, targetValue: number): number => {
    let start: number = 0;
    let end: number = sortedArray.length - 1;
    let middle: number = Math.floor(( end + start ) / 2);
    while ( start < end ) {
        if (sortedArray[middle] === targetValue) return middle;
        if (sortedArray[start] === targetValue) return start;
        if (sortedArray[end] === targetValue) return end;
        if (sortedArray[middle] > targetValue) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((end + start) / 2);
    }
    return -1;
}

console.log({
    test1: binarySearch([1, 2, 3, 4, 5], 2), // 1
    test2: binarySearch([1, 2, 3, 4, 5], 3), // 2
    test3: binarySearch([1, 2, 3, 4, 5], 5), // 4
    test4: binarySearch([1, 2, 3, 4, 5], 6), // -1
    test5: binarySearch([5,6,10,13,14,18,30,34,35,37,40,44,64,79,84,86,95,96,98,99], 10), // 2
    test6: binarySearch([5,6,10,13,14,18,30,34,35,37,40,44,64,79,84,86,95,96,98,99], 95), // 16
    test7: binarySearch([5,6,10,13,14,18,30,34,35,37,40,44,64,79,84,86,95,96,98,99], 100), // 16
})