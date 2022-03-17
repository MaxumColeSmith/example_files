// most by Time: O(N)

function sameFrequency(int1: number, int2: number): boolean {
    const stringInt1: string = int1.toString();
    const stringInt2: string = int2.toString();

    const freqCounter: {[key: string]: number} = {};

    for (const integer of stringInt1) {
        freqCounter[integer] = freqCounter[integer] === undefined ? 1 : freqCounter[integer] + 1;
    }

    for (const integer of stringInt2) {
        if (freqCounter[integer] === undefined) return false;
        if (freqCounter[integer] === 0) return false;
        else if (freqCounter[integer] > 0) {
            freqCounter[integer] -= 1;
        }
    }

    return true;
}

console.log({
    test1: sameFrequency(182, 281), // true
    test2: sameFrequency(34, 14), // false
    test3: sameFrequency(3589578, 5879385), // true
    test4: sameFrequency(22, 222), // false
})