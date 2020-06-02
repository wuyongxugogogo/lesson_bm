## req
浏览器：xhr fetch
node：http.get()

不同xxx -> http  -> 一样

http：超文本传输

- xhr
```js
const xhr = new Xmlhttprequest();
xhr.setheader('Content-Type': 'application/json');
xhr.open('POST', 'api.com', true);
xhr.onload = function() {
  
}
xhr.send({a: 1, b: 2})
```

- 浏览器拼接报文
  http1.1 报文(纯文本)
  - 首行\r\n
  - 首部\r\n
  - \r\n
  - 实体\r\n

## 解析报文

split('\r\n');

限制：必须等到拿到一个完整的报文，
现实：报文传输，可以允许我们，分段传输
  

## 解析
FSM（finate，state， machine）
Infinity: 正无穷 负无穷 除法 

浏览器解析报文：body(html), headers, 响应行
html怎么渲染出来了？浏览器也要解析 html
js 怎么就被执行？浏览器 也要解析 js

解析成什么？


## 编译原理

代码都是字符串，
- 词法分析（分词）： 代码切割成一个个最小有效的单位
- 语法分词：栈，LL LR
- 生成目标代码

语文：
我今天很高兴   -> 我  今天  很  高兴
const net = require('net');  ->  const net = require 'net'
```js
function cal(str) {}
let str = '34 + 567 - 890'
1. 34 + 567 - 890
```

语法：
```js
{
  person: '我'
  time: '今天',
  do: '很高兴'
}
```
```
{
  statement: {
    type: 'class',
    loc: {
      row: 4,
      coloumn: 5
    },
    clssName: 'Xmlhttprequest',
    constructor: {
      type: 'function',
      functionName: ''
    }
  }
}
```

```jsx
<div>
  <span></span>
</div>
```


DOM 树， AST 抽象语法树
栈



## 浏览器 匹配css 规则

效率：**按照 css 选择器 从后往前匹配的**


## layout
display: flex | block | inline-block | grid
justify-content: center;
position:
float:

## 正常的文档流
行内元素