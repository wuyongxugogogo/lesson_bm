// 罗马数字转整数
// 通常情况下，罗马数字中小的数字在大的数字的右边。
// 但也存在特例，例如 4 不写做 IIII，而是 IV。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为 IX。这个特殊的规则只适用于以下六种情况：

// I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
// X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。 
// C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。


var romanToInt = function(s) {
    const hashMap = {
        "I":1,
        "IV":4,
        "V":5,
        "IX":9,
        "X":10,
        "XL":40,
        "L":50,
        "XC":90,
        "C":100,
        "CD":400,
        "D":500,
        "CM":900,
        "M":1000
    };
    let number = 0;
    for(let i=0 ; i<s.length;){
        if(i+1<s.length && hashMap[s.substring(i,i+2)]){
            number += hashMap[s.substring(i,i+2)];
            i=i+2;
        }else{
            number += hashMap[s.substring(i,i+1)];
            i++;
        }
    }
    return number
};
console.log(romanToInt("IX"))