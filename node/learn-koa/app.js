const http = require('http'); // node的内置模块
http.createServer((req,res) => {
    // req, 访问者浏览器访问 res 服务器返回数据
    if(req.url === '/'){
        res.writeHead(200,{'Content-Type':'text/html;charset=utf8'})
        res.end('首页');
    }else if(req.url === '/about'){
        res.end('About');
    }
})
.listen(1314)