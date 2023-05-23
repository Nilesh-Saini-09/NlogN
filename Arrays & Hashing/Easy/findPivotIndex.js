// 1. prefix sum
const pivotIndex1 = nums => {
    let totalSum = 0;
    for(let i of nums) totalSum += i;

    let leftSum = 0;
    for(let i = 0; i < nums.length; i++) {
        const rightSum = totalSum - leftSum - nums[i];
        if(leftSum === rightSum) return i;

        leftSum += nums[i];
    }

    return -1;
}

