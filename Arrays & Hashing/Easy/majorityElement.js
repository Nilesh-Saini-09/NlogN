// 1. Brute Force
const majorityElement1 = nums => {
    const n = nums.length;

    for(let i = 0; i < n; i++) {
        let count = 0; 

        for(let j = 0; j < n; j++) {
            if(nums[i] === nums[j]) count++;
        }

        if(count > n/2) return nums[i];
    }

    return -1;
}

// 2. hashmap
const majorityElement2 = nums => {
    let n = nums.length;
    let map = new Map();

    for(let i = 0; i < n; i++) {
        const num = nums[i];
        map.set(num, (map.get(num) || 0) + 1);

        if(map.get(num) > n / 2) return num;
    }

    return -1;
}

// 3. 
const majorityElement = nums => {
    let candidate = null;
    let count = 0;
    
    for (let i = 0; i < nums.length; i++) {
      if (count === 0) {
        candidate = nums[i];
        count++;
      } else if (nums[i] === candidate) {
        count++;
      } else {
        count--;
      }
    }
    
    return candidate;
}
  