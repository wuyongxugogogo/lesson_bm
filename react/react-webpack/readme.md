- 打包完代码的结构
- loader
- plugin
- 体积的优化
  - external: 把 XX 排除在外，CDN（script进来）
  - splitChunk
  - Dll  
  - 懒加载(import().then(XXXX))

webpack把ES6代码转成ES5 通过babel插件