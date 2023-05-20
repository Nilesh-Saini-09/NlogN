// 1. reverse and check
const isPalindrome1 = head => {
    let reversed = reversedLinkedList(head);

    // compare the reversed list with the original
    while(head !== null) {
        if(head.val !== reversed.val) return false;
        head = head.next;
        reversed = reversed.next;
    }

    return true;
}

const reversedLinkedList = head => {
    let prev = null;
    let curr = head;

    while(curr !== null) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    return prev;
}

// 2. use extra array
const isPalindrome2 = head => {
    let arr = [];

    // Copy the list values to array
    while(head !== null) {
        arr.push(head.val);
        head = head.next;
    }

    let left = 0, right = arr.length - 1;

    while(left < right) {
        if(arr[left] !== arr[right]) return false;
        left++;
        right--;
    }

    return true;
}

// 3. Reverse the second half
const isPalindrome3 = head => {
    // Find the middle of the linked list
    let slow = head;
    let fast = head;

    while(fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Reverse the second half of the list
    let secondHalf = reversedLinkedList(slow);

    // Compare the first half with the reversed second half
    while(secondHalf !== null) {
        if(head.val !== secondHalf.val) return false;
        head = head.next;
        secondHalf = secondHalf.next;
    }

    return true;
}

// using stack
const isPalindrome = head => {
    let newHead = head;
    let stack = [];
	
	// push the elements to the stack
    while(head) {
        stack.push(head.val);
        head = head.next;
    }
    
	// check if every list element is equal to value popped from stack(it is reverse of link list)
    while(newHead){
        if(newHead.val != stack.pop())
            return false;
        newHead = newHead.next;
    }
    
    return true;
};