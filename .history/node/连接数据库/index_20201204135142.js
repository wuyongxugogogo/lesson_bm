const express = require('express');
const app = express();

app.listen(8088, () => {
  console.log('服务启动');
})
app.get('/', (req, res) => {
  res.send('<div> hello world </div>');
})