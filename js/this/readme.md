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