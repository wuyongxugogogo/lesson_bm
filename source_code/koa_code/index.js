const Koa = require('./lib/application');
// const app = new Koa();

// // http 服务
// // 源码
// // 上下文 req res
// app.use((ctx) => {
//     ctx.body = 'hello body';
// })

// app.listen(3000)
const app = new Koa();

app.use((req,res)=>{
    res.end('hello world')
})
app.listen(3000,()=>{
    console.log('你的应用在3000端口启动')
})