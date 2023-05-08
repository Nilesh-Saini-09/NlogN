// 1. Brute Force 
const merge = (nums1, m, nums2, n) => {
    let merged = [];
    let i = 0, j = 0;

    while(i < m && j < n) {
        if(nums1[i] <= nums2[j]) {
            merged.push(nums1[i]);
            i++;
        } else {
            merged.push(nums2[j]);
            j++;
        }
    }

    while(i < m) {
        merged.push(nums1[i]);
        i++;
    }

    while(j < n) {
        merged.push(nums2[j]);
        j++;
    }

    for(let k = 0; k < merged.length; k++) {
        nums1[k] = merged[k];
    }
}

// 2. Two Pointers
const merge2 = (nums1, m, nums2, n) => {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;

    while(i >= 0 && j >= 0) {
        if(nums1[i] >= nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }

        k--;
    }

    while(j >= 0) {
        nums1[k] = nums2[j];
        j--;
        k--;
    }
}