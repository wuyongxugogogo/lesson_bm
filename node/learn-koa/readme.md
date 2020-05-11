- koa node web 开发框架
  7天后 blog 网站

  背后的基石是什么？
  koa 加速了 node web 开发 一个web服务就是一个web app
  koa 在3000端口提供了http协议访问服务
  https://127.0.0.1:3000  看微信读书 图解HTTP

  http.createServer()
  http node 内置模块 createServer 启动服务
  koa 封装了它们

  http 协议本质是干嘛的？
  ctx context 上下文环境(request response)
  http 协议 诞生于1991年,用于传输学术论文的。
  采用基于请求(ctx.request)响应(ctx.response)的模式,在网络间传输HTML超文本的内容 

- HTTP(web server 应用层协议)基于TCP(Tracnsport Control Protocol)协议
  TCP 用户 移动或电信 运营商 动态IP，网站 阿里云(IP) 传输
  TCP连接 三次握手

▪ 应用层 HTTP
▪ 表示层
▪ 会话层
▪ 传输层 TCP
▪ 网络层
▪ 数据链路层
▪ 物理层
- 建立连接后，会发送一个GET请求行(request method GET url / )的信息
- 服务器接收到请求信息后，读取对应的HTML文件，并将数据以ASC返回给用户浏览器
- 断开连接



- http  req + res  可以完成一次请求？
  HTTP协议 基于请求应答模型
  ctx.req ctx.res
  
- req  res  之间是什么关系？
  n : 1  node 天生适合高并发(异步)
  HTTP 网络通信协议  TCP/IP  7层
  建立一个通信管道(传输控制协议)，stream
  GET / 请求行
  关闭 断开连接， HTTP可以服务于更多的用户
  释放服务器内存

- writeHead 在做什么事情

- head  在http是什么？