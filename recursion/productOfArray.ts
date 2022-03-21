const productOfArray = (arr: Array<number>): number => arr.length === 0 ? 1 : arr.pop() * productOfArray(arr);

console.log({
    test1: productOfArray([1,2,3]), // 6
    test2: productOfArray([1,2,3,10]) // 60
})