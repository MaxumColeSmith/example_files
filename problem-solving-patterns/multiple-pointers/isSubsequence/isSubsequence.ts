// time complexity: O(N+M)
// Space Complexity: O(1)

function isSubsequence(target: string, search: string): boolean {
    if (target.length > search.length) return false;
    let targetIndex: number = 0;
    for (let char of search) {
        if (target[targetIndex] === char) {
            targetIndex++
            if (targetIndex === target.length) return true;
        }
    }
    return false;
}

console.log({
    test1: isSubsequence('hello', "hello world"), // true
    test2: isSubsequence("sing", "sting"), // true
    test3: isSubsequence("abc", "abracadabra"), // true
    test4: isSubsequence("abc", "acb"), //false order matters
    test5: isSubsequence("", "acb")
})