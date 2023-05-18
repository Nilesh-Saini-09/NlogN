// 1. Brute Force 
const rotateArray1 = (nums, k) => {
    const n = nums.length;
    k = k % n;

    for(let i = 0; i < k; i++) {
        const last = nums[n - 1];
        for(let j = n - 1; j > 0; j--) {
            nums[j] = nums[j-1];
        }

        nums[0] = last;
    }

    return nums;
}

// 2. using extra space 
const rotateArray2 = (nums, k) => {
    const n = nums.length;
    k = k % n;

    const rotatedArray = [];

    for(let i = n - k; i < n; i++) {
        rotatedArray.push(nums[i]);
    }

    for(let i = 0; i < n - k; i++) {
        rotatedArray.push(nums[i]);
    }

    return rotatedArray;
}

// 3. reversing array
const reverseArray = (arr, start, end) => {
    while(start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]]; 
        start++;
        end--;
    }
}

const rotateArray = (nums, k) => {
    const n = nums.length;
    k = k % n;

    reverseArray(nums, 0, n-1);
    reverseArray(nums, 0, k-1);
    reverseArray(nums, k, n-1);

    return nums;
}