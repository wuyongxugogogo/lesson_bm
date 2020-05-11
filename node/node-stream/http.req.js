const http = require('http');
const fs = require('fs');
http.createServer((req,res) => {
    // console.log(req);
    const writeStream = fs.createWriteStream('./params.txt');
    // postman 以 post 提交过来的数据 保存在 params.txt 里面
    req.pipe(writeStream);
    res.end('ok');
}).listen(8088,()=>{
    console.log('8088')
})