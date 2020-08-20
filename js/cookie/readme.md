## cookie
name
value
Domain: cookie 生效的域名 baidu.com map.baidu.com
path: /a/b /c 生效的路径
expires: 过期时间 默认就是当前 session 失效
httpOnly: cookie只在http传输，js无法操作的 
    (cookie可以由后端的set-cookie响应头设置，也可以由前端js document.cookie=''设置)
Secure: 只在 https 的环境下生效

cookie 只要符合 domain + path 的生效范围 就会随着 http请求发送
CSRF
SameSite: lax strict(cookie只在同域生效) none