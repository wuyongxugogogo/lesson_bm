## 跨域
浏览安全策略

一个域向另外一个域发出请求
同源: 同协议(http/https),同域名,同端口

CORS：Cross-Origin Resoure Sharing

前后端分开部署，前端有自己的域名，后端也有自己的域名

## http 头
请求头:
accept

响应头:
Set-Cookie:

通用头:
Content-Type:
- 请求的时候带给后端的内容的类型
- 后端告诉前端我给资源的类型:MIME

## 简单请求
跨域直接发出请求

## 非简单请求
- OPTIONS preflight
- POST

## JSONP
不同 xhr fetch, 不受跨域限制
img
link
script

借助了 script

1. jsonp 后端给你返回的是什么