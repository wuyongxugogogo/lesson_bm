// 函数就是对一个功能进行封装

// 给定 nums = [2, 7, 11, 15], target = 9
// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]

// 1. leetcode 考试， 程序员能通过他的考试， 算法能力
// 没问题。 函数就是对一个功能进行封装 函数
// let a = 2; // 全局
// var twoSum; // 变量申明   它的类型是什么？
// console.log(typeof twoSum); // undefined
// twoSum = null;  // null 
// console.log(typeof twoSum); // object
// 时间复杂度，  n*n = O(n^2)
// var twoSum = function(nums, target) {
//   let arr = []; //坐标放进去
//   for (let i = 0;  i < nums.length; i++) {  //暴力解法
//     // 循环一遍
//     for (let j = i + 1;  j < nums.length; j++) { //内层循环
//       // 不能自恋
//       if (nums[i] + nums[j] === target) {
//         arr = [i, j];
//         return arr;
//       }
//     }
//   }
// }
// 省省时间呢？ O(n^2) -> O(n)? 
// console.log(typeof twoSum)
// twoSum();
// console.log(a)

const twoSum = function (nums, target) {
  // 两重循环， 
  // target , 一重循环， nums[i],  target-nums[i]
  // 一次就能找到？  {}
  let map = {}; //对象字面量
  nums.forEach(function (value, index) {
    console.log(value, index); 
    map[index] = value; // map[]
    // var name = 'kfd'
    // shops[0][name]
  })
  console.log(map);
  for (let i = 0; i < nums.length; i++) {
    let j = map[target - nums[i]];
    if (j && j !== i) {
      return [i, j];
    }
  }
};
// twoSum = [0, 1];
console.log(twoSum([2, 7, 11, 15], 9));
  // 时间复杂度 n + n = 2n  O(n)
