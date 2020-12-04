var plusOne = function(digits) {
    let num = 0;
    digits.reverse().map((item,i) => {
        num = num + item*Math.pow(10,i);
    })
    num += 1;
    let result = [];
    while(num > 10) {
        result.push(num%10);
    }
    return result.reverse();
};

console.log(plusOne([9,9,9]));