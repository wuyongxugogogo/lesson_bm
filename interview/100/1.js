// 函数即对象
// 构造函数
function Foo(){
    Foo.a = function() {
        console.log(1)
    }
    // new过程
    this.a = function(){
        console.log(2)
    }
}
// 原型链
Foo.prototype.a = function(){
    console.log(3)
}
// 属性覆盖
Foo.a = function(){
    console.log(4)
}
Foo.a();
let obj = new Foo();
obj.a();
Foo.a();