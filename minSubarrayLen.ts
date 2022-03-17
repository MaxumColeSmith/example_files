function minSubarrayLen(arr: Array<number>, sumTarget: number) {
    let leftIndex: number = 0;
    let rightIndex: number = 0;
    let cumSum: number = arr[0];
    let minSubarrayLength: number = Infinity;
    if (cumSum >= sumTarget) {
        return 1;
    }
    rightIndex += 1;
    while (rightIndex < arr.length + 1) {
        if (cumSum < sumTarget) {
            cumSum += arr[rightIndex];
            rightIndex++;
        } else {
            if (rightIndex - leftIndex < minSubarrayLength) minSubarrayLength = rightIndex - leftIndex
            cumSum -= arr[leftIndex];
            leftIndex++;
        }
    }
    return minSubarrayLength === Infinity ? 0 : minSubarrayLength;
}

console.log({
    test1: minSubarrayLen([2, 3, 1, 2, 4, 3], 7), // 2
    test2: minSubarrayLen([2,1,6,5,4], 9), // 2
    test3: minSubarrayLen([3,1,7,11,2,9,8,21,62,33,19], 52), // 1
    test4: minSubarrayLen([1,4,16,22,5,7,8,9,10], 39), // 3
    test5: minSubarrayLen([1,4,16,22,5,7,8,9,10], 55), // 5
    test6: minSubarrayLen([4,3,3,8,1,2,3], 11), // 2
    test7: minSubarrayLen([1,4,16,22,5,7,8,9,10], 95) // 0
})