const power = (base: number, exponent: number): number => {
    if (exponent === 0) return 1;
    return base * power(base, exponent - 1);
}

console.log({
    test1: power(2,0), // 1
    test2: power(2,2), // 4
    test3: power(2,4) // 16
})