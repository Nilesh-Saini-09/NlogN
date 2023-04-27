// 1. using the built in functions
/*
time - O(n^2)
space - O(n)

*/
const replaceMaxRight = arr => {
    const result = [];

    for(let i = 0; i < arr.length; i++) {
        result[i] = Math.max(...arr.slice(i+1));
    }

    result[result.length - 1] = -1;

    return result;
}

/* 

    We can reduce the time complexity from o(n^2) to o(n). If we iterate the array from right to left.

*/

// 2. Iterating the array from right to left

const replaceMaxRight2 = arr => {
    let max = -1;

    for(let i = arr.length - 1; i >= 0; i--) {
        let curr = arr[i];
        arr[i] = max;
        max = Math.max(max, curr);
    }

    return arr;
}

// Little modified version of the second approach
// time and space complexity remains same as app. 2
const replaceMaxRight3 = arr => {
    let max = arr[arr.length - 1];
    arr[arr.length - 1] = -1;

    for(let i = arr.length - 2; i >= 0; i--) {
        let curr = arr[i];
        arr[i] = max;
        if(curr > max) max = curr;
    }

    return arr;
}