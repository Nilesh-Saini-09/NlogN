// 1. Brute Force 
const productExceptSelf = nums => {
    const result = [];
    for(let i = 0; i < nums.length; i++) {
        let product = 1;
        for(let j = 0; j < nums.length; j++) {
            if(i !== j) {
                product *= nums[j];
            }
        }
        result.push(product);
    }

    return result;
}

// 2. Two Pass Solution
const productExceptSelf2 = nums => {
    const result = [];

    // First Pass
    let product = 1;
    for(let i = 0; i < nums.length; i++) {
        result[i] = product;
        product *= nums[i];
    }

    // Second Pass
    product = 1;
    for(let i = nums.length - 1; i >= 0; i--) {
        result[i] *= product;
        product *= nums[i];
    }

    return result;
}

// Prefix and Suffix
const productExceptSelf3 = nums => {
    const prefix = [], suffix = [], result = [];

    // calculate prefix products
    prefix[0] = 1;
    for(let i = 1; i < nums.length; i++) {
        prefix[i] = prefix[i - 1] * nums[i - 1];
    }

    // calculate suffix products
    suffix[nums.length - 1] = 1;
    for(let i = nums.length - 2; i >= 0; i--) {
        suffix[i] = suffix[i + 1] * nums[i + 1];
    }

    // product of suffix and prefix to find final result
    for(let i = 0; i < nums.length; i++) {
        result[i] = prefix[i] * suffix[i];
    }

    return result;
}

// 4. Optimized prefix and suffix 
const productExceptSelf4 = nums => {
    const result = [];
    let product = 1;

    // Find the prefix products and store them in the output array
    result[0] = 1;
    for(let i = 1; i < nums.length; i++) {
        result[i] = result[i - 1] * nums[i - 1];
    }

    // Find the suffix products in place and multiply them with the prefix products 

    for(let i = nums.length - 1; i >= 0; i--) {
        result[i] *= product;
        product *= nums[i];
    }

    return result;
}