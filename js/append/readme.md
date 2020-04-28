- DOM document 文档就是网页， js 内存里，文档对象模型
  js  -> html 转化
  DOM JS 数据结构tree  appendChild 组成一棵树
  ul>li>textnode
  document.createElement('tag') 标签节点
  document.createTextNode('asdsad)  文本节点

  哪怕是文字 都是节点， 都是对象
  前端js, html, css, js是王者, js可以操控html, css, 这些API DOM 

- js this指向  你不知道的javascript
  1. 作为对象的方法调用, this 指向对象本身
  2. 作为事件函数, this 指向事件发生的元素
    bind 可以强行去绑定函数内部的this 
- 封装 class 复用
  constructor 申明属性 this.state
  render() 渲染到页面上
  changeLikeText()

  class LikeButton{
    constructor(){

    }
    render(){

    }
    changeLikeText(){}
  }