const sampleJson = {
    "prop1": "test",
    "prop2": {
        "prop1": {
            "prop1": "nestedProp"
        },
        "prop3": "testing here",
        "arrProp": {
            "arrProp": {
                "arrProp": [],
                "bool": true
            }
        }
    }
}

const flattenJson = (json: object, prefix: string = '') => {
    const currentLevelKeys = Object.keys(json)
    for (const key of currentLevelKeys) {
        if (Array.isArray(json[key])) {
            const logThis = `[${typeof json[key]}]: ${prefix}${prefix.length ? '.' : ''}${key}.${JSON.stringify(json[key])}`;
            console.info(logThis);
        }
        else if (typeof json[key] === 'object') {
            flattenJson(json[key], `${prefix}${prefix.length ? '.' : ''}${key}`);
        }
        else {
            const logThis = `[${typeof json[key]}]: ${prefix}${prefix.length ? '.' : ''}${key}.${JSON.stringify(json[key])}`;
            console.info(logThis);
        }
    }
}

// [string]: prop1."test"
// [string]: prop2.prop1.prop1."nestedProp"  
// [string]: prop2.prop3."testing here"      
// [object]: prop2.arrProp.arrProp.arrProp.[]
// [boolean]: prop2.arrProp.arrProp.bool.true

console.log({
    test1: flattenJson(sampleJson)
})