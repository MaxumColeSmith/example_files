function flatten(arr: Array<any>): Array<number> {
    const firstEntry = arr.shift();
    if (firstEntry === undefined) return [];
    if (Array.isArray(firstEntry)) return [...flatten(firstEntry), ...flatten(arr)];
    if (arr.length === 0) return [firstEntry];
    return [firstEntry, ...flatten(arr)];
}

console.log({
    test1: flatten([1, 2, 3, [4, 5]]), // [1, 2, 3, 4, 5]
    test3: flatten([1, [2, [3, 4], [[5]]]]), // [1, 2, 3, 4, 5]
    test4: flatten([[1], [2], [3]]), // [1,2,3]
    test5: flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]
})