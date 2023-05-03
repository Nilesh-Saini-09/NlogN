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