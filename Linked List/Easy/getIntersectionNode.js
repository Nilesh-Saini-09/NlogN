// 1. brute force
const getIntersectionNode1 = (headA, headB) => {
    let ha = headA;

    while(ha !== null) {
        let hb = headB;
        while(hb !== null) {
            if(ha === hb) return ha;
            hb = hb.next;
        }
        ha = ha.next;
    }

    // No intersection found
    return null;
}

// 2. hashset
const getIntersectionNode2 = (headA, headB) => {
    let set = new Set();

    let ha = headA;
    while(ha !== null) {
        set.add(ha);
        ha = ha.next;
    }

    let hb = headB;
    while(hb !== null) {
        if(set.has(hb)) return hb;
        hb = hb.next;
    }

    return null;
}

// 3. Two pointers
const getIntersectionNode = (headA, headB) => {
    let ha = headA, hb = headB;

    // Find the length of both linked lists
    let lenA = getLength(ha);
    let lenB = getLength(hb);

    // Adjust the pointer to make them start at the same relative position from the intersection point
    while(lenA > lenB) {
        ha = ha.next;
        lenA--;
    }

    while(lenB > lenA) {
        hb = hb.next;
        lenB--;
    }

    // Traverse both the linked lists simultaneously util the intersection point is found
    while(ha !== hb) {
        ha = ha.next;
        hb = hb.next;
    }

    // Intersection node or null (if no intersection is found)
    return ha;
}

const getLength = node => {
    let len = 0; 
    while(node !== null) {
        len++;
        node = node.next;
    }
    return len;
}