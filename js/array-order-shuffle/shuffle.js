// 两个数比较的时候
// 100% 交换 洗牌算法
// 从后往前 取一个数 a
// 从未洗牌的区间之内随机取出一个数 b
// a b 交换
function shuffle(arr) {
    let arr = [...arr];
    let len = arr.length;
    for(let i = 0; i < len; i++){
        let idx = Math.floor(Math.random() * (len-i));
        [arr[len-1-i],arr[idx]] = [arr[idx],arr[len-1-i]]
    }
    return arr
}