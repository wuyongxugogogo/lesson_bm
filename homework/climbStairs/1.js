// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

// 注意：给定 n 是一个正整数。
// function climbStairs(n){
//     if(n==1||n==2){
//         return n;
//     }else{
//         return climbStairs(n-1)+climbStairs(n-2);
//     }
// }


// 符合斐波那契数列 F(n)=F(n-1)+F(n-2) 用递归的方法


// 数组的方式 缩短运行时间
var climbStairs = function(n) {
    let result = [1,2];
    for(let i=2; i<n ; i++){
        result.push(result[i-1]+result[i-2]);
    }
    return result[n-1]
};
console.log(climbStairs(90));


// function f(n){
//     if(n == 1) return 1;
//     if(n == 2) return 2;

//     let ret = 0,
//         pre = 2,
//         prepre = 1;

//     //递归可以优化成循环
//     for(let i = 3; i <= n ;i++){
//         ret = pre + prepre;
//         prepre = pre;
//         pre = ret;
//     }
//     return ret;
// }
// console.log(f(1000))