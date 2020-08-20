const http = require('http');
const fs = require('fs');
let count = 10000;
let sessiontable = [{
    userName: 'liming', useId: 1001, login: true, expire: '2021', id: 01
}]
// 用户的登录状态保持
// 1. 第一次登录完 后端写入一个cookie: userName=liming,useID=1001
// cookie: sessionId: 01
// 2. cookie 每次都随着 http 请求自动发送
// 3. 每次后端取出 cookie 信息 if(login){ 登录状态有效的 }


http.createServer((req, res) => {
    function isLogin() {
        if (req.headers['cookie']) {
            let cookie = req.headers['cookie'];
            // let [name, sessionId] = cookie.split('=');
            let cookies = cookie.split(';');
            let sessionCookie = cookies.find(cookie => cookie.includes('session'));
            let [name, sessionId] = sessionCookie.split('=');
            if (sessiontable.find((item) => {
                return item.id === Number(sessionId);
            })) {
                return true;
            } else {
                return false;
            }
        } else { return false; }
    }
    if (req.url === '/transfer') {
        if (!isLogin()) {
            res.end('un auth')
            return
        }
        count -= 100;
        res.end('ok')
    } else if (req.url === '/count') {
        res.end(count + '')
    } else if (req.url === '/isLogin') {
        if (isLogin()) {
            res.end('login')
        } else {
            res.end('not login')
        }
    } else {
        const html = fs.readFileSync('./index.html', 'utf-8');
        res.setHeader('set-cookie', 'sessionid=01')
        res.end(html)
    }
})
    .listen(9090, () => {
        console.log('9090')
    })

    1.
    // samesite:lax localhost的某些get请求在zhaomeng.com发出也能带cookie
    // samesite:strict localhost的请求只有在 localhost发出才会带cookie
    // samesite:none localhost的get请求不管在什么域发出都会携带cookie
    2.
    // csrf_token:
    // 用户登录完 服务端 给你一个 token abcd
    // 前端存起来
    // 之后的请求 都要携带 这个token
    // 这样对于 zhaomeng.com 是没有这个 token 它发出去没有 token
    3.
    // 浏览器会给每个请求一个 reffer 字段，表明这个请求来源
    // 服务端检测来源
