## req
浏览器；xhr fetch
node: http.get()

不同xxx -> http -> 一样

http:超文本传输
- xhr
```js
const xhr = new Xmlhttprequest();
xhr.setheader('Content-Type':'application/json');
xhr.open('POST','api.com',true);
xhr.send({a:1,b:2})
```

- 浏览器拼接报文
  http1.1 报文(纯文本)
  - 请求行
  - 首部
  - \r\n
  - 实体