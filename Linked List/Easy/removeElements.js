// 1. Iterative 
const removeElements1 = (head, val) => {
    if(head === null) return head;
    let dummy = new ListNode(0);
    dummy.next = head;
    let current = dummy;
    while(current !== null && current.next !== null) {
        if(current.next.val === val) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }

    return dummy.next;
}

// 2. recursion
const removeElements = (head, val) => {
    // base case
    if(head === null) return null;

    // recursive call on the next node
    head.next = removeElements(head.next, val);

    // check if the current node's value matches the target value
    if(head.val === val) return head.next;

    return head;
}