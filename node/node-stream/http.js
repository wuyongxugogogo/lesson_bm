const https = require('https');
const fs = require('fs');
const request = require('request');
https.get('https://movie.douban.com/top250', function(res) {
  //console.log(res); // 继承了 流 可读流 提供数据那一方
  // html 保存为 本地 douban.html
  const writeStream = fs.createWriteStream('./douban.html');
  res.pipe(writeStream)
});

request('https://www.baidu.com').pipe(fs.createWriteStream('./baidu.html'))