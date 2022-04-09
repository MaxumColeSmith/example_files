const bubbleSort = (arr: Array<number | string | { name: string, age: number }>, comparator?: Function): Array<number | string | { name: string, age: number }> => {
    if (typeof comparator !== 'function') {
        comparator = (item1: number, item2: number): boolean => item1 > item2;
    }
    for (let i = arr.length - 1; i >= 0; i-- ) {
        for (let j = 0; j < i; j++) {
            const comparison = comparator(arr[j], arr[j+1]);
            if (comparison < 0) continue;
            if (!!comparison) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
};

console.log({
    test1: bubbleSort([4,20,12,10,7,9]),
    test2: bubbleSort([0,-10,7,4]),
    test3: bubbleSort([1,2,3]),
    test4: bubbleSort([]),
    test5: bubbleSort(["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"], (a: string, b: string) => {
        if (a < b)  { return -1; }
        else if (a > b) { return 1; }
        return 0;
    }), // sort alphabetically
    test6: bubbleSort([{
        name: "LilBub",
        age: 7
    }, {
        name: "Garfield",
        age: 40
    }, {
        name: "Heathcliff",
        age: 45
    }, {
        name: "Blue",
        age: 1
    }, {
        name: "Grumpy",
        age: 6
    }], (a: {name: string, age: number}, b: {name: string, age: number})=>{
        return b.age - a.age
    }) // sort by age in descending order
});

const answerOutput = {
    test1: [ 4, 7, 9, 10, 12, 20 ],
    test2: [ -10, 0, 4, 7 ],
    test3: [ 1, 2, 3 ],
    test4: [],
    test5: [ 'Blue', 'Garfield', 'Grumpy', 'Heathcliff', 'LilBub' ],
    test6: [
      { name: 'Heathcliff', age: 45 },
      { name: 'Garfield', age: 40 },
      { name: 'LilBub', age: 7 },
      { name: 'Grumpy', age: 6 },
      { name: 'Blue', age: 1 }
    ]
  }