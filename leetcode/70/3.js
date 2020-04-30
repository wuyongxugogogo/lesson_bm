function f(n){
    const w = new Map(); // es6 新的数据类型 map
    if(n >= 40) throw new Error('内存会溢出哦，亲！')
    if(n == 1) return 1;
    if(n == 2) return 2;
    return f(n-1) + f(n-2);
}