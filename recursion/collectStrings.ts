const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

collectStrings(obj) // ["foo", "bar", "baz"])

function collectStrings(obj: Object) {
    let rtnArray: Array<string> = [];
    (function collectStringsExecuteImmediately(obj: Object) {
        for (const prop in obj) {
            const valueOfProperty = obj[prop];
            if (typeof valueOfProperty === 'string') {
                rtnArray.push(valueOfProperty);
            } else if (typeof valueOfProperty === 'object') {
                collectStringsExecuteImmediately(valueOfProperty)
            }
        }
    })(obj);
    return rtnArray;
}