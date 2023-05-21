// 1. Iterative 
const deleteDuplicates1 = head => {
    let current = head;

    while(current !== null && current.next !== null) {
        if(current.val === current.next.val) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }

    return head;
}

// 2. Recursion
const deleteDuplicates = head => {
    if(head === null || head.next === null) return head;
    if(head.val === head.next.val) {
        head.next = head.next.next;
        return deleteDuplicates(head);
    } else {
        head.next = deleteDuplicates(head.next);
        return head;
    }
}