const factorial = (num: number): number => {
   if (num === 1) return 1;
   return num * factorial(num - 1);
}

console.log({
    test1: factorial(1), // 1
    test2: factorial(2), // 2
    test3: factorial(4), // 24
    test4: factorial(7), // 5040
})