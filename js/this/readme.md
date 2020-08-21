## this
**运行时**决定的,跟定义时候无关
```js
function foo() {
  this.a + b;
}
foo
```
- 默认 this 指向了 window
- 对象. 调用 指向 对象
```js
  var obj1 = {
    a: 1,
    say: function() {
      console.log(this.a);
    }
  }
  obj1.say()
  ```
- call/apply 调用，指向我们的第一个参数
  第一个参数是一个对象，它们会把这个对象绑定到 this，接着在调用函数时指定这个 this

## this
this是函数运行时指针， 指向对象由运行方式决定
1. 作为对象的方法调用 this指向对象本身
2. 作为普通函数调用 this指向全局, 严格模式下undefined
3. 构造器调用， this指向实例化后的对象
4. call, apply, bind 手动指定this调用
5. 箭头函数没有自己的this值，箭头函数中所使用的this来自于函数作用域链

## new
使用 new 来调用函数，或者说发生构造函数调用时，会自动执行下面的操作。
1. 创建（或者说构造）一个全新的对象。 
2. 这个新对象会被执行 [[ 原型 ]] 连接。 
3. 这个新对象会绑定到函数调用的 this。 
4. 如果函数没有返回其他对象，那么 new 表达式中的函数调用会自动返回这个新对象。

