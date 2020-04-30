// 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

// 示例 1:

// 输入: 123
// 输出: 321

// 示例 2:
// 输入: -123
// 输出: -321

// 示例 3:
// 输入: 120
// 输出: 21
// 要求输出的值 必须在[-2^31,2^31-1]之间 否则输出 0
var reverse = function (x) {
    let y = 0;
    if (x < 0) {
        x = x * -1;
        while (x >= 10) {
            y = y + (x % 10);
            y = y * 10;
            x = Math.floor(x / 10);
        }
        y = (y + x) * -1;
    } else {
        while (x >= 10) {
            y = y + (x % 10);
            y = y * 10;
            x = Math.floor(x / 10);
        }
        y = y + x;
    }
    if (y >= Math.pow(-2, 31) && y <= Math.pow(2, 31) - 1) {
        return y
    } else {
        return 0
    }
};
console.log(reverse(1534236469))