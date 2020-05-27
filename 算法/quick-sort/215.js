var findKthLargest = function(nums, k) {
    let i = 0, j = nums.length - 1;
    // 基准 -> index
    let index = partition(nums,i,j);
    k = nums.length - k;
    while(index !== k){
        if(index < k){
            i = index + 1;
        }else{
            j = index - 1;
        }
        index = partition(nums,i,j);
    }
    return nums[index];
};

function partition(nums, left, right) {
    if (left >= right) return;
    let i = left;
    let j = right;
    let provit = nums[left];
    while (left < right) {
        // left right 互相换
        // right 替换 left 位置
        // left 替换 right 位置

        // 1：右边扫描，比基准值小的数，如果这个数比基准值大，一直往前走
        while (left < right && nums[right] >= provit) right--;
        nums[left] = nums[right]
        // 2：左边扫描
        while (left < right && nums[left] <= provit) left++;
        nums[right] = nums[left]
    }
    nums[left] = provit;

    return left;
}