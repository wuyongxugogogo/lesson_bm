let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let res = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
// []
// [ 4, 9, 3, 2, 1, 5, 6, 7, 8, 0]
// [ 6, 4, 0, 8, 1, 2, 9, 5, 3, 7]

// 没有真正 随机  伪随机
// 正确：每个数在每一位出现的概率是均等的 => 把重复乱序足够多的次数，
// 那么把每一位计算出一个平均值  ~ 4.5
function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5)
}
let t = 1000;
for (let i = 0; i < t; i++) {
  // 浅拷贝一下
  let sorted = shuffle(arr.slice(0));
  for (let i = 0; i < sorted.length; i ++) {
    res[i] = sorted[i] + res[i];
  }
}
console.log(res.map(sum => sum / t));

