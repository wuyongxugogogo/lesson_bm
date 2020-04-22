function sum(a,b){
    if(arguments.length<2){
        throw new Error('参数不够');
    }
    if(typeof a != 'number' || typeof b != 'number'){
        throw new Error('参数类型错误')
    }
    return a+b
}
console.log(sum(1.98,2.74).toFixed(2))