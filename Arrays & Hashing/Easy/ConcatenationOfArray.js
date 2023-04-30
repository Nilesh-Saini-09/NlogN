// 1. arrays in js are dynamic
// Just iterate and add num to the ith index and i + arr.length index
// time - O(n) and space - O(n)

const concatenationArray = arr => {
    let result = [];

    for(let i  = 0; i < arr.length; i++) {
        result[i] = arr[i];
        result[i + arr.length] = arr[i];
    }

    return result;
}

// 2. time - O(n) and space - O(1)
const concatenationArray2 = arr => {
    let n = arr.length;
    for(let i = 0; i < n; i++) {
        arr.push(arr[i]);
    }

    return arr;
}

// 3. built in methods and operators
const concatenationArray3 = arr => [...arr, ...arr];

const concatenationArray4 = arr => arr.concat(arr);