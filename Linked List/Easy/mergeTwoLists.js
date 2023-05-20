// 1. Iterative approach
const mergeTwoLists1 = (list1, list2) => {

    // dummy node and pointer 
    let dummy = new ListNode(0);
    let pointer = dummy;

    // compare values and add to the merged list
    while(list1 !== null && list2 !== null) {
        if(list1.val < list2.val) {
            pointer.next = list1;
            list1 = list1.next;
        } else {
            pointer.next = list2;
            list2 = list2.next;
        }

        pointer = pointer.next;
    }

    // Add remaining nodes
    pointer.next = list1 !== null ? list1 : list2;

    return dummy.next;
}

// 2. recursive 
const mergeTwoLists2 = (list1, list2) => {
    if(list1 === null) return list2;
    if(list2 === null) return list1;

    if(list1.val < list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    } else {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
}
