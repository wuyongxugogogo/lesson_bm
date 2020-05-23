const http = require('http');
const url = require('url');
http.createServer((req, res) => {
  // /api?callback=onResponse
  if (req.url.includes('/api')) {
    let myurl = url.parse(req.url);
    // console.log(myurl);
    let params = new URLSearchParams(myurl.query)
    let posts = ['js', 'php'];
    // console.log(req);
    let mathodName = params.get('callback');
    // res.end(JSON.stringify(posts));
    res.end(`${mathodName}(${JSON.stringify(posts)})`)
  }
})
.listen(9090, () => {
  console.log(9090);
})