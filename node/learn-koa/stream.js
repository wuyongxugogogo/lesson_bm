// const fs = require('fs');
// const Koa = require('koa'); // web node 开发框架
// const KoaStatic = require('koa-static');
// const app = new Koa();

// const main = ctx => {
//     console.log(ctx.request.url,'----------');
//     if(ctx.request.url === '/yb.jpeg'){
//         ctx.response.type = 'image';
//         ctx.response.body = fs.createReadStream('./yb.jpeg');
//     }else if(ctx.request.url === '/common.css'){
//         ctx.response.type = 'css';
//         ctx.response.body = fs.createReadStream('./common.css');
//     }else if(ctx.request.url === '/common.js'){
//         ctx.response.type = 'js';
//         ctx.response.body = fs.createReadStream('./common.js');
//     }else{
//         ctx.response.type = 'html'; // 响应头
//         // 在服务器端，打开可读流，TCP
//         ctx.response.body = fs.createReadStream('./template.html');
//     }
// }
// app.use(main);

// app.use(KoaStatic(__dirname+'./demo'));


// const main = ctx => {
//     if(ctx.request.path !== '/'){
//         ctx.response.type = 'html';
//         ctx.response.body = '<a href="/">Index Page</a>';
//     }else{
//         ctx.response.body = 'Hello World';
//     }
// }

// app.listen(8080,function(){
//     console.log('启动成功')
// })

const Koa = require('koa')
const path = require('path')
const static = require('koa-static')
const app = new Koa()
 
//设置静态资源的路径 
const staticPath = './demo'
 
app.use(static(
  path.join( __dirname,  staticPath)
))

app.listen(3000, () => {
  console.log('启动成功')
})
