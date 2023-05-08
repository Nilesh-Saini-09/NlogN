// 1. Brute Force
const twoSum = (numbers, target) => {
    const n = numbers.length;

    for(let i = 0; i < n; i++) {
        for(let j = i + 1; j < n; j++) {
            if(numbers[i] + numbers[j] === target) {
                return [i+1, j+1];
            }
        }
    }

    return [];
}

// 2. Binary Search
const twoSum2 = (numbers, target) => {
    const n = numbers.length;

    for (let i = 0; i < n; i++) {
        let left = i + 1;
        let right = n - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (numbers[mid] === target - numbers[i]) {
                return [i + 1, mid + 1];
            } else if (numbers[mid] < target - numbers[i]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return [];
}

// 3. Two-Pointers
const twoSum3 = (numbers, target) => {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        const sum = numbers[left] + numbers[right];

        if (sum === target) {
            return [left + 1, right + 1];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    
  return [];
}