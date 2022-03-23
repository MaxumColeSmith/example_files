function nestedEvenSum(obj: Object) {
    let globalSum: number = 0;
    (function nestedEvenSumExecuteImmediately(obj: Object) {
        for (const prop in obj) {
            const valueOfProperty = obj[prop];
            const isANumber = !isNaN(valueOfProperty);
            if (isANumber) {
                const isEven: boolean = valueOfProperty % 2 === 0;
                if (isEven) globalSum += valueOfProperty;
            } else if (typeof valueOfProperty !== 'string') {
                nestedEvenSumExecuteImmediately(valueOfProperty);
            }
        }
    })(obj);
    return globalSum;
}

var obj1 = {
    outer: 2,
    obj: {
        inner: 2,
        otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: "yup"
        }
    }
}

var obj2 = {
    a: 2,
    b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
    c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
    d: 1,
    e: { e: { e: 2 }, ee: 'car' }
};

console.log({
    test1: nestedEvenSum(obj1), // 6
    test2: nestedEvenSum(obj2), // 10
})