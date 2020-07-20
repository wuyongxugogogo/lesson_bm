const express = require('express')
const md5 = require('md5')

const app = express()
// GET 路由
app.get('/big.js',(req,res) => {
  console.log('here')
  const fs = require('fs')
  const jsContent = fs.readFileSync('./big.js','utf-8')
  // 一堆 头字段
  // content-type
  // 20s内 不会重
  // 强缓存：200 from memory/disk cache，请求不会到达服务器
  // Expires 明确：2020 7 21 客户端时间可以设置
  // cache-control: 相对的时间
  res.setHeader('Cache-Control','max-age=20')

  // 协商缓存：请求会到达服务器
  // 20之后，请求(会携带一个 if-none-match 的字段) 到达服务器 
  // if-none-match；浏览器发现 上一次请求 服务器 有ETag设置，浏览器自动发送一个
  // etag生成：MD5
  const Etag = md5(jsContent)
  const oldEtag = req.headers['if-none-match']
  if(Etag === oldEtag){
      //文件没有变化
      // 从缓存里面读取 304 (not modified)
      res.sendStatus(304).end('')
  }
  res.setHeader('Etag','acbdefg');
  res.end(jsContent)
})
app.listen(9090,()=>{
  console.log(9090)
})
