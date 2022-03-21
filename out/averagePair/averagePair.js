// Time: O(N)
// Space: O(1)
var avg = function (num1, num2) { return (num1 + num2) / 2; };
function averagePair(arr, target) {
    var j = arr.length - 1;
    var i = 0;
    while (j > i) {
        var average = avg(arr[i], arr[j]);
        if (average === target)
            return true;
        else if (average < target) {
            i++;
        }
        else {
            j--;
        }
    }
    return false;
}
averagePair([], 1);
console.log({
    test1: averagePair([1, 2, 3], 2.5),
    test2: averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8),
    test3: averagePair([-1, 0, 3, 4, 5, 6], 4.1),
    test4: averagePair([], 4), // false
});
//# sourceMappingURL=averagePair.js.map