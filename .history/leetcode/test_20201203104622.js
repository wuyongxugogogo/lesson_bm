var twoSum = function(nums, target) {
    let left = 0, right = nums.length - 1;
    let sum = nums[left] + nums[right];
    while(sum !== target) {
        if(sum < target) {
            left ++;
        }else {
            right --;
        }
    }
    return [nums[left],nums[right]]
};

console.log(twoSum([2,7,11,15],9));