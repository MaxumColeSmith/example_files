function validAnagram(word1: string, word2: string): boolean {
    if (word1.length !== word2.length) return false;
    // build an index of frequency of each letter in word1 and word2
    let word1Index: {[k: string]: number} = {};
    let word2Index: {[k: string]: number} = {};
    for (const char of word1) {
        word1Index[char] = word1Index[char] === undefined ? 1 : word1Index[char] + 1
    }
    for (const char of word2) {
        word2Index[char] = word2Index[char] === undefined ? 1 : word2Index[char] + 1
    }

    // check to see if length of properties word1Index is same as 2, if not, return false
    if (Object.keys(word1Index).length !== Object.keys(word2Index).length) return false;

    // check to see if every property of word1Index is in word2Index
    for (const key of word1) {
        if (word1Index[key] !== word2Index[key]) return false;
    }

    // and if it hasn't failed yet, return true
    return true;
}

console.log({
    test1: validAnagram('', ''), // true,
    test2: validAnagram('aaz', 'zza'), // false
    test3: validAnagram('anagram', 'nagaram'), //true
    test4: validAnagram('rat', 'car'), // false
    test5: validAnagram('awesome', 'awesom'), //false
    test6: validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana'),
    test7: validAnagram('qwerty', 'qeywrt')
})