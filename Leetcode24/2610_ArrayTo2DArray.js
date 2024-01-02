var findMatrix = function(nums) {
    if(nums.length === 0) return nums;
    
    let result = [], popped = [];
    let temp = [];
    for(let i of nums) {
        if(!temp.includes(i)) {
            temp.push(i)
        } else {
            popped.push(i);
        }
    }
    return [temp, ...findMatrix(popped)];
};