var http = require('http');

http.createServer((req,res) => {
    if(req.url === '/newpage'){
        res.writeHead(204);
        return
    }
    // http  头， 体
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    // 七层模型 
    res.write('hello world');
    res.end(`
    <html>
        <head></head>
        <body>
            <a href="http://www.baidu.com">百度</a>
            <a href="/newpage">去新的页面</a>
        </body>
    </html>
    `)
}).listen(3000,function(){
    console.log('3000 正在被访问')
})