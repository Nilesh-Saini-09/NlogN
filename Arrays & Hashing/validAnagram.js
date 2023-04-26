// 1. Sort both strings and compare
/*
    Time - O(nlogn), Space - O(n)
    Space is O(string's length), reason being that on splitting we are generating a new array of size n.
*/

const validAnagram = (s, t) => {
    // base case
    if(s.length !== t.length) return false;

    return s.split('').sort().join('') === t.split('').sort().join('');
}

// 2. using map
const validAnagram2 = (s, t) => {
    // base case
    if(s.length !== t.length) return false;

    let map = new Map();

    for(let i of s) {
        map.set(i, map.get(i) + 1 || 1);
    }

    console.log(map);

    for(let i of t) {
        if(map.has(i)) {
            map.set(i, map.get(i)-1);
            if(map.get(i) == 0) map.delete(i);
        } else {
            return false;
        }
    }

    return map.size === 0;
}

// using objects as map
const isAnagram = (s, t) => {
    // base case
    if(s.length !== t.length) return false;

    let counts = {};

    for(let i of s) {
        counts[i] = (counts[i] || 0) + 1;
    }

    for(let i of t) {
        if(!counts[i]) return false;
        counts[i]--;
    }

    return true;
}

// using array as bucket

const validAnagram3 = (s, t) => {
    if (s.length !== t.length) return false;
    
    const counts = new Array(26).fill(0);
    
    for (let i = 0; i < s.length; i++) {
        counts[s.charCodeAt(i) - 97]++;
        counts[t.charCodeAt(i) - 97]--;
    }
    
    return counts.every(count => count === 0);
}