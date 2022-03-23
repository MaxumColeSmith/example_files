// make it recursively

function reverse(stringToReverse: string): string {
    if (stringToReverse.length === 0) return '';
    const lastChar = stringToReverse[stringToReverse.length - 1];
    const subString = stringToReverse.substring(0, stringToReverse.length - 1);
    return `${lastChar}${reverse(subString)}`
}

//reverse('awesome') // 'emosewa'
reverse('rithmschool') // 'loohcsmhtir'