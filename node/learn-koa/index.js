// 轻量级的web开发框架
const Koa = require('koa'); // 请上KOA
const app = new Koa(); // web server
const fs = require('fs');
// 启动一个服务 函数封装一个服务
// const func = ctx => {
//     console.log('func');
//     ctx.response.body = 'func';
// }
const main = ctx => {
    console.log(ctx.request,'----------')
    // ctx.response.body = 'hello world';
    // req  response
    ctx.response.type = 'html'; // 响应头
    // 分层，网站，大一点的网站，返回一个html文件(MVC View)
    // const html = fs.readFileSync('./template.html','utf-8');
    fs.readFile('./template.html','utf-8',function(err,data){
        console.log(data);
        ctx.response.body = data;
    })
    // console.log(html);
    // ctx.response.body = html;
}
// app.use(func);
app.use(main); // 启用了一个服务 给访问者 request 用
app.listen(3000);