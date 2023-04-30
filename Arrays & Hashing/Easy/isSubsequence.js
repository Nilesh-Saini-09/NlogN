// 1. two pointers 

const isSubsequence = (s, t) => {
    // base case
    if(s.length > t.length) return false;
    if(!s) return true;

    let i = 0, j = 0;

    while(i < s.length && j < t.length) {
        if(s[i] == t[j]) {
            i++;
            j++;
        } else {
            j++;
        }
    }

    return i === s.length;
}

// two pointers with slight modification
const isSubsequence2 = (s, t) => {
    // base case
    if(s.length > t.length) return false;
    if(!s) return true;

    let i = 0; 
    for(let j = 0; j < t.length; j++) {
        if(s[i] == t[j]) i++;
    }

    return i === s.length;
}