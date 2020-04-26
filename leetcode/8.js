// 字符串转换整数

var myAtoi = function(str) {
    const number = parseInt(str,10);

    if(isNaN(number)){
        return 0;
    }else if(number > Math.pow(2,31)-1 || number < Math.pow(-2,31)){
        return number<Math.pow(-2,31) ? Math.pow(-2,31):Math.pow(2,31)-1
    }else{
        return number;
    }
};
console.log(myAtoi(' -51231 asd 1321'));