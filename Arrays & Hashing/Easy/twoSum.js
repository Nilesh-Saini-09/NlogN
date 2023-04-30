// 1. Brute force 
// time O(N^2) space O(1)
const twoSum = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {

        if (nums[i] + nums[j] === target) return [i, j];

      }
    }

    return null; 
  };

  // 2. Array.indexOf() function
  // time O(N^2) space O(1)
  const twoSum2 = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];

        const j = nums.indexOf(diff, i + 1);

        if (j !== -1) return [i, j];
      }

    return null;
  }

  // 3. Sorting and Two Pointers 
  // time O(NlgN) space O(N)
  const twoSum3 = (nums, target) => {
    const sorted = [...nums].sort((a, b) => a - b);

    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
      const sum = sorted[left] + sorted[right];

      if (sum === target) {
        // Find the original indices of the two numbers in the unsorted array.
        const i = nums.indexOf(sorted[left]);
        let j = nums.indexOf(sorted[right]);
        if (i === j) { 
        // The same number is used twice.
          j = nums.indexOf(sorted[right], i + 1);
        }

        return [i, j];
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }

    return null;
  };
  
  // 4. Using Map
  // time O(N) space O(N)
  const twoSum4 = (nums, target) => {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
      const diff = target - nums[i];

      if (map.has(diff)) {
        return [map.get(diff), i];
      }

      map.set(nums[i], i);
    }

    return null;
};

// 5. Using a hash table
// time O(N) space O(N)
const twoSum5 = (nums, target) => {
    const hash = {};

    for (let i = 0; i < nums.length; i++) {
      const diff = target - nums[i];

      if (hash[diff] !== undefined) return [hash[diff], i];

      hash[nums[i]] = i;
    }

    return null;
};
  
  