// 1. use the built in methods - trim, split and length
// time - O(n) space - O(n)
const lengthOfLastWord = s => {
    let arr = s.trim().split(' ');
    return arr[arr.length - 1].length;
}

// 2. While Loop
// time - O(n), space - O(1)
const lengthOfLastWord2 = s => {
    let len = 0, pointer = s.length - 1;

    while(pointer >= 0 && s[pointer] == ' ') pointer--;
    while(pointer >= 0 && s[pointer] != ' ') {
        len++;
        pointer--;
    }

    return len;
}

// 3. Just one Loop and slightly different method
const lengthOfLastWord3 = s => {
    let len = 0;

    for(let i = s.length - 1; i >= 0; i--) {
        if(s.charAt(i) !== ' ') len++;
        else {
            if(len > 0) return len;
        }
    }

    return len;
}

// 4. more shorter solution using the lastIndexOf() method

const lengthOfLastWord4 = s => {
    let str = s.trim();

    return str.length - str.lastIndexOf(' ') - 1;
}

