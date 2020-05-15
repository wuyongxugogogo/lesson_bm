const http = require('http');
const fs = require('fs');
const user = require('./users.json');
console.log(user)
let version = 12345679;
let server = http.createServer((req, res) => {
  // If-None-Match
  if (req.url == '/') {
    res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
    fs.createReadStream('./index.html').pipe(res);
    return
  }else if(req.url =='/users'){
      res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
      console.log(typeof JSON.stringify(user))
      res.end(JSON.stringify(user))
  }


  // if (req.headers['if-none-match']) {
  //   // console.log(Number(req.headers['if-none-match']) == version);
  //   if (Number(req.headers['if-none-match']) == version) {
  //     res.statusCode = 304 // 没有改变版本
  //     res.end();
  //     return;
  //   } else {
  //     res.setHeader('Etag', version);
  //     res.end('hello, world2');
  //     return
  //   }
  // }
  // res.setHeader('Etag', version);
  // res.end('hello, world');
});


server.listen(3000);