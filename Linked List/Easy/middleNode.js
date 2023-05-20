// 1. counting nodes
const middleNode1 = head => {
    let count = 0;
    let curr = head;

    while(curr !== null) {
        count++;
        curr = curr.next;
    }

    curr = head;
    for(let i = 0; i < Math.floor(count / 2); i++) {
        curr = curr.next;
    }

    return curr;
}

// 2. Two Pointer 
const middleNode = head => {
    let slow = head;
    let fast = head;

    while(fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}