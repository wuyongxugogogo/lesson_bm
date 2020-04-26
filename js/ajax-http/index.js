// 导入 node http模块(处理网络)
const http = require('http');
// 导入 fs fileSystem 文件系统 处理文件读写
const fs = require('fs');
// 1: 前端 ajax 传输数据给后端，后端接受前端数据
// 2: 响应数据给前端
// MIME
// text/html
const server = http.createServer(
    function (req, res) {
        // 你想获取 前端给我的东西 就来 req 上面拿
        // 你想给前端东西 我就把它放到 res 上面
        console.log('当前正在请求',req.url)
        if (req.url.includes('search')){
            // search 搜索功能
            // /      首页功能
            // res.end(req.url.split('?')[1])
            res.end(`[]`)
            return;
        }
        res.writeHead(200, {
            'Content-Type': 'text/html;charset=utf-8'
        })
        const file = fs.readFileSync('./ajax.html',{encoding:'utf8'})
        res.end(file);
    })
server.listen(8081, function () {
    console.log('server is running http:127.0.0.1:8081')
})