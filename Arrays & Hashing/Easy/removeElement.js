// 1. Naive Approach
const removeElement1 = (nums, val) => {
    let i = 0; 
    while(i < nums.length) {
        if(nums[i] === val) nums.splice(i, 1);
        else i++;
    }

    return nums.length;
}

// 2. Two Pointer Approach
const removeElement2 = (nums, val) => {
    let slow = 0; 

    for(let fast = 0; fast < nums.length; fast++) {
        if(nums[fast] !== val) {
            nums[slow] = nums[fast];
            slow++;
        }
    }

    return slow;
}

// 3. Optimized two pointer 
const removeElement = (nums, val) => {
    let left = 0; 
    let right = nums.length - 1;

    while(left <= right) {
        if(nums[left] === val) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            right--;
        } else {
            left++;
        }
    }

    return left;
}