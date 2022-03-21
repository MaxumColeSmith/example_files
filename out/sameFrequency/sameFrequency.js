// most by Time: O(N)
function sameFrequency(int1, int2) {
    var stringInt1 = int1.toString();
    var stringInt2 = int2.toString();
    var freqCounter = {};
    for (var _i = 0, stringInt1_1 = stringInt1; _i < stringInt1_1.length; _i++) {
        var integer = stringInt1_1[_i];
        freqCounter[integer] = freqCounter[integer] === undefined ? 1 : freqCounter[integer] + 1;
    }
    for (var _a = 0, stringInt2_1 = stringInt2; _a < stringInt2_1.length; _a++) {
        var integer = stringInt2_1[_a];
        if (freqCounter[integer] === undefined)
            return false;
        if (freqCounter[integer] === 0)
            return false;
        else if (freqCounter[integer] > 0) {
            freqCounter[integer] -= 1;
        }
    }
    return true;
}
console.log({
    test1: sameFrequency(182, 281),
    test2: sameFrequency(34, 14),
    test3: sameFrequency(3589578, 5879385),
    test4: sameFrequency(22, 222), // false
});
//# sourceMappingURL=sameFrequency.js.map