const http = require('http');
const fs = require('fs');
// request
// response
const server = http.createServer(function (req, res) {
    // console.log(req.url);
    // GET 
    if (req.url === '/') {
        // html
        const html = fs.readFileSync('./index.html', 'utf8');
        res.end(html);
        // 后端返回内容类型
        // 200指的是 http 状态码
        // res.writeHead(200,{
        //     'Content-Type':'text/html'
        // })
        // res.end('<h2>123</h2>')
    } else if (req.url === '/getPosts') {
        let posts = [
            { title: 'js', star: 1000 },
            { title: 'php', star: 2000 }
        ]
        let str = '';
        // 分段得到
        req.on('data',function(chunk){
            str += chunk;
        })
        // 接收完毕
        req.on('end',function(){
            console.log(JSON.parse(str))
        })
        // req res 流
        res.end(JSON.stringify(posts))
    }
})
server.listen(8080, function () {
    console.log('server is running 8080');
})