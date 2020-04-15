// 给定一个排序数组，你需要在 原地 删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。

// 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。

// 示例 2:

// 给定 nums = [0,0,1,1,1,2,2,3,3,4],

// 函数应该返回新的长度 5, 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4。

// 你不需要考虑数组中超出新长度后面的元素。


var removeDuplicates = function (nums) {
    let len = nums.length;
    for (let i = 0; i < len - 1; i++) {
        if (nums[i] == nums[i+1]) {
            nums.splice(i, 1);
            i = i - 1;
            len = nums.length;
        }
    }
    // console.log(nums);
    return len;
};
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))

// 下面解法是不删除元素 将重复元素放在后面 所以长度等于 n-count
// var removeDuplicates = function(nums) {
//     var count = 0;
//     var n = nums.length;
//     for(let i = 1;i<n;i++){
//         if(nums[i] != nums[i-1]){
//             nums[i-count] = nums[i]
//         }else{
//             count++;
//         }
//     }
//     return n-count;
// };
