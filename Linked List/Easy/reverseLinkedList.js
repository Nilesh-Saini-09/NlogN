// 1. Iterative approach
const reverseList1 = head => {
    let prev = null;
    let current = head;

    while(current !== null) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    return prev;
}

// 2. Recrsive Approach
const reverseList = head => {
    if(head === null || head.next === null) return head;

    let reversedList = reverseList(head.next);
    head.next.next = head;
    head.next = null;

    return reversedList;
}