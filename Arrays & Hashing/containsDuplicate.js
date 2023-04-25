// 1. Brute Force
const containsDuplicate = nums => {
  for(let i = 0; i < nums.length; i++) {
    for(let j = i+1; j < nums.length; j++) {
      if(nums[i] === nums[j]) return true;
    }
  }

  return false;
}

// 2. Sorting 
const containsDuplicate2 = nums => {
  nums.sort((a,b) => a-b);

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) return true;
  }

  return false;
}

// 3. Using sets
/*
    1. Create a new Set from the values of the input array nums.
    2. compare the length of the original array and the set.
    3. No duplicates means length of the array and the set will be same, return false.
    4. otherwise return true. 
*/

const containsDuplicate3 = nums => {
    const set = new Set(nums); // create a Set from the array
    return set.size !== nums.length; // if set size is less than array length, it means there are duplicates
  }

  // Minified version
const containsDuplicate33 = nums => nums.length !== new Set(nums).size;

// 4. Using Objects as hashmaps
const containsDuplicate4 = nums => {
  let map = {};
  for(let i of nums) {
    if(map[i]) return true;
    map[i] = true;
  }

  return false;
}

// 5. using maps over objects as hashmaps
const containsDuplicate5 = nums => {
  let map = new Map();

  for(let i of nums) {
    if(map.has(i)) return true;
    map.set(i);
  }

  return false;
}


