// 1. Using sets
/*
    1. Create a new Set from the values of the input array nums.
    2. compare the length of the original array and the set.
    3. No duplicates means length of the array and the set will be same, return false.
    4. otherwise return true. 
*/

const containsDuplicate = nums => {
    const set = new Set(nums); // create a Set from the array
    return set.size !== nums.length; // if set size is less than array length, it means there are duplicates
  }

  // Minified version
const containsDuplicate2 = nums => nums.length !== new Set(nums).size;

// 2. Using Objects as hashmaps
const containsDuplicate3 = nums => {
  let map = {};
  for(let i of nums) map[i] ? true : map[i] = true;

  return false;
}

// 3. using maps over objects as hashmaps
const containsDuplicate4 = nums => {
  let map = new Map();

  for(let i of nums) {
    map.has(i) ? true : map.set(i);
  }

  return false;
}



