// 1. use the built in methods - trim, split and length
// time - O(n) space - O(n)
const lengthLastWord = s => {
    let arr = s.trim().split(' ');
    return arr[arr.length - 1].length;
}

// 2. 

