// 1. two pointer approach
// tc - O(n), sc - O(1)
const moveZeroes = nums => {
    let slowPointer = 0;

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== 0) {
            [nums[slowPointer], nums[i]] = [nums[i], nums[slowPointer]];
            slowPointer++;
        }
    }

    return nums;
}

// 2. modified two pointer approach
const moveZeroes2 = nums => {
    let counter = 0;

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== 0) {
            nums[counter] = nums[i];
            counter++;
        }
    }

    for(let i = counter; i < nums.length; i++) {
        nums[i] = 0;
    }

    return nums;
}