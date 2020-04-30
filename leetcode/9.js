// 回文数
// 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

// 示例 1:
// 输入: 121
// 输出: true

// 示例 2:
// 输入: -121
// 输出: false
// 解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
var isPalindrome = function(x) {
    let k = 0;
    const m = x;
    if(x<0){
        return false
    }else{
        while(x >= 10){
            k = k + (x%10);
            k = 10*k;
            x = Math.floor(x/10)
        }
        k = k + x; // 把x剩下的一位数加起来
    }
    if(m == k){
        return true
    }else{
        return false
    }
};
console.log(isPalindrome(10))