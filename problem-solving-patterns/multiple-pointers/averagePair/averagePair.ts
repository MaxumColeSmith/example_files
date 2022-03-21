// Time: O(N)
// Space: O(1)

const avg = (num1: number, num2: number) => (num1 + num2) / 2;

function averagePair(arr: Array<number>, target: number): boolean {
    let j: number = arr.length - 1;
    let i: number = 0;

    while (j > i) {
        const average = avg(arr[i], arr[j]);
        if (average === target) return true;
        else if (average < target) {
            i++
        } else {
            j--
        }
    }

    return false;
}

console.log({
    test1: averagePair([1,2,3], 2.5), // true
    test2: averagePair([1,3,3,5,6,7,10,12,19], 8), // true
    test3: averagePair([-1,0,3,4,5,6], 4.1), // false
    test4: averagePair([],4), // false
})