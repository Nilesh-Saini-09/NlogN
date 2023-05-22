// 1. Index comparison
const isIsomorphic1 = (s, t) => {
    if(s.length !== t.length) return false;

    for(let i = 0; i < s.length; i++) {
        if(s.indexOf(s[i], i+1) !== t.indexOf(t[i], i+1)) {
            return false;
        }
    }

    return true;
}

// 2. using maps
const isIsomorphic = (s, t) => {
    if(s.length !== t.length) return false;

    const sMap = new Map();
    const tMap = new Map();

    for(let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];

        if(!sMap.has(charS) && !tMap.has(charT)) {
            sMap.set(charS, charT);
            tMap.set(charT, charS);
        } else {
            if(sMap.get(charS) !== charT || tMap.get(charT) !== charS) {
                return false;
            }
        }
    }

    return true;
}