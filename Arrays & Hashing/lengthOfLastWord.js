// 1. use the built in methods - trim, split and length
// time - O(n) space - O(n)
const lengthLastWord = s => {
    let arr = s.trim().split(' ');
    return arr[arr.length - 1].length;
}

// 2. While Loop
// time - O(n), space - O(1)
const lengthLastWord2 = s => {
    let len = 0, tail = s.length - 1;

    while(tail >= 0 && s[tail] == ' ') tail--;
    while(tail >= 0 && s[tail] != ' ') {
        len++;
        tail--;
    }

    return len;
}

// 3. Just one Loop and slightly different method
const lengthLastWord3 = s => {
    let len = 0;

    for(let i = s.length - 1; i >= 0; i--) {
        if(s.charAt(i) !== ' ') len++;
        else {
            if(len > 0) return len;
        }
    }

    return len;
}


