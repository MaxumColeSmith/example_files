const rootFib = (n: number): number => {
    if (n < 2) return 1;
    return rootFib(n - 1) + rootFib(n - 2); 
}

const fib = (n: number): number => {
    return rootFib(helper(n))
}

const helper = (n: number): number => n - 1;

console.log({
    test1: fib(4), // 3
    test2: fib(10), // 55
    test3: fib(28), // 317811
    test4: fib(35), // 9227465
})