const recursiveRange = (num: number) => {
    if (num === 0) return 0;
    return num + recursiveRange(num - 1);
}

console.log({
    test1: recursiveRange(6), // 21
    test2: recursiveRange(10), // 55
})