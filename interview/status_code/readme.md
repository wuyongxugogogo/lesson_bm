# 计算机网络  HTTP

-  a   怎么样点击它 不跳转？ 
- 浏览器上输入  http://www.baidu.com   http 协议
  会发生什么？  状态码？ 
    307 
    200    
  https://www.baidu.com/ 跳转到  加密的http协议 https
  浏览器可以读懂状态码 
  1. http://www.baidu.com  
    res  writeHead(307)  Location: https://www.baidu.com/
  redirect
  https://www.baidu.com/

  1XX  正在处理中， 
  2XX  成功
  3XX  跳转
  4XX  客服端错误   404  
  5XX  服务器端错误  500  503 服务器不能响应