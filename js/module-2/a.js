import { add, min, bar } from './math.js'
console.log(add(1,2))
console.log(bar)
setTimeout(()=>{
    console.log(bar)
},5000)
// tree-shaking: min 没有打包
// js: 1. 没有模块化普通的脚本文件