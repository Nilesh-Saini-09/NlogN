// 1. Brute force 
const groupAnagrams = strs => {
    // helper function
    const validAnagram = (s1, s2) => {
        return s1.split('').sort().join('') === s2.split('').sort().join('');
    }

    const allGroups = [];

    for(let i = 0; i < strs.length; i++) {
        const group = [strs[i]];
        for(let j = i+1; j < strs.length; j++) {
            if(validAnagram(strs[i], strs[j])) {
                group.push(strs[j]);
            }
        }

        allGroups.push(group);
    }

    return allGroups;
}

// 1.1 keeping track of visited strings to avoid duplicates

const groupAnagrams2 = strs => {
    // Helper function to check if two strings are anagrams
    const isAnagram = function(s1, s2) {
        return s1.split('').sort().join('') === s2.split('').sort().join('');
    }
    
    const allGroups = [];
    const visited = new Array(strs.length).fill(false); // To keep track of visited strings
    
    for (let i = 0; i < strs.length; i++) {
        if (visited[i]) continue; // Skip visited strings
        
        const group = [strs[i]];
        visited[i] = true;
        
        for (let j = i + 1; j < strs.length; j++) {
            if (visited[j]) continue; // Skip visited strings
            
            if (isAnagram(strs[i], strs[j])) {
                group.push(strs[j]);
                visited[j] = true;
            }
        }
        
        allGroups.push(group);
    }
    
    return allGroups;
};


// 2. Using map and sorting
const groupAnagrams3 = strs => {
    let map = new Map();
    for(let i of strs) {
        let sorted = i.split('').sort().join('');
        if(map.has(sorted)) {
            map.set(sorted, [...map.get(sorted), i]);
        } else {
            map.set(sorted, [i]);
        }
    }

    return Array.from(map.values());
}

// 3. Character Count
// time and space  - O(n*k)

const groupAnagrams4 = strs => {
    let map = new Map();

    for(let str of strs) {
        let count = new Array(26).fill(0);
        for(let i = 0; i < str.length; i++) {
            const charIdx = str.charCodeAt(i) - 97;
            count[charIdx]++;
        }

        const key = count.join('');

        if(map.has(key)) {
            map.get(key).push(str);
        } else {
            map.set(key, [str]);
        }
    }

    return Array.from(map.values());
}