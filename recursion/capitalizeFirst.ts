function capitalizeFirst(arr: Array<string>): Array<string> {
    if (arr.length === 0) return [];
    const firstEntry = arr.shift();
    const firstChar = firstEntry[0].toUpperCase();
    return [`${firstChar}${firstEntry.slice(1)}`, ...capitalizeFirst(arr)];
}

console.log({
    test1: capitalizeFirst(['car', 'taco', 'banana']) // ['Car','Taco','Banana']
})
