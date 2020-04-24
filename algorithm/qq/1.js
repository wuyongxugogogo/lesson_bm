// 类型
// 1. number 数值型 整数 浮点数没有区分
// 2. 字符串类型
let arr = [];
let nums = '631758924';
// console.log(typeof nums); // typeof 运算符
arr.push(nums[0]);
let c = nums[1];
nums = nums.substring(2); //slice
nums += c;
console.log(nums,arr);