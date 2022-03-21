// find the maximum sum of a subarray with the length of the number passed in
// subarray must consist of consequtive elements
// Time Complexity: O(N)
// Space Complexity: O(1)
function maxSubarraySum(arr, n) {
    if (n > arr.length)
        return null;
    var currentSum = 0;
    var maxSum = -Infinity;
    var leftOfWindow = 0;
    var rightOfWindow = leftOfWindow + n;
    // INITIAL CASE
    for (var p = leftOfWindow; p < rightOfWindow; p++) {
        currentSum += arr[p];
    }
    for (var i = 1; i < arr.length; i++) {
        currentSum -= arr[leftOfWindow];
        currentSum += arr[rightOfWindow];
        if (currentSum > maxSum)
            maxSum = currentSum;
        leftOfWindow += 1;
        rightOfWindow += 1;
    }
    return maxSum;
}
console.log({
    test1: maxSubarraySum([100, 200, 300, 400], 2),
    test2: maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4),
    test3: maxSubarraySum([-3, 4, 0, -2, 6, -1], 2),
    test4: maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2),
    test5: maxSubarraySum([2, 3], 3) // null
});
//# sourceMappingURL=maxSubarraySum.js.map