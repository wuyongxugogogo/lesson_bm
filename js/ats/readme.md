<div id="root">
  <span class="demo">
    This is a span.
  </span>
  <p>DOM</p>
</div>

html  document 什么关系？ 

- URL  输入  打开页面后， 发生了什么？
   download  index.html   html 标签
  1. 空白页面  背后发生了什么？ 
  启动了一个tab , 进程1(主进程)
  2. window.url = http://127.0.0.1:5502/js/ats/index.html
  html  文档标记语言
  - tab 主进程  url , 
  启动一个网络请求 进程2 url 127.0.0.1:5502/  html 文件
  - 渲染页面进程

  WEB应用 也是多进程架构
  当我们用chrome 打开页面的时候
  启动4个进程  应用进程(pid 计算及资源调用的最小单元) 浏览器运行
  tab 负责一次页面渲染需要的  主进程
  两个子进程 Network Service  http 请求 200 
  GPU 计算  高速css 绘制 

  GPU 加速  chrome为了让页面加载更快， 使用GPU 来
  绘制页面， 这也是chrome 战胜IE的

  html 文本 text/html

  将 文本  -> dom 对象 内存里面  .... 浏览器怎么写的
  chrome  v8 
  BOM Browser Object Model 
  DOM Document Object Model

abstract syntax tree 抽象语法树