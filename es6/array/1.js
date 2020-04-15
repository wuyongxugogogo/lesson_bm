const ages = [32,15,19,12];
// 所有大于18的数字
// const nums = []; // 空间开销 O(n)
// for(let age of ages){
//     if(age>=18){
//         nums.push(age);
//     }
// }
// console.log(nums)

// const n = [];
// ages.map((nums) => {
//     return nums>=18;
// })
// console.log(n)

// 命名
// ages 数组， filter 语义化的 过滤
// 1. 计数 for 机器化
// 2. 表述性好一些 forEach 函数式编程 提升可读性
const adultArr = ages.filter(age => age >= 18);
// 出席? 有?
const adultPresent = ages.some(age => age >= 50);// 有一个就会输出true
// console.log(adultPresent);
// 所有人满足需求?
const allOldEnough = ages.every(age => age >= 1);
console.log(allOldEnough)