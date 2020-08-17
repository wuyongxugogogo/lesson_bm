## Content-Type: text/plain
提交给后端的数据 就是纯文本
```js
name=123
file=19408342.jpeg    // 文件名  没有文件内容
```

## Content-Type: application/x-www-form-urlencoded
```js
name=123&file=19408342.jpeg
```

## multipart/form-data
```js
-----------------------------205579936434786223734260171678
Content-Disposition: form-data; name="name"

123
-----------------------------205579936434786223734260171678
Content-Disposition: form-data; name="file"; filename="test.txt"\r\n
Content-Type: image/jpeg\r\n
\r\n  
图片内容\r\n
\r\n
-----------------------------205579936434786223734260171678--
```
前面两种编码对二进制文件或者一些非 ASCII 字符 处理很低效

后端处理文件上传：
- 分隔符分隔
- 得到分隔之后的每一块，文件内容，fs.write() 保存文件了，
- 完成

