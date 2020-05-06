"use strict";
// TS: 内置  + 外部类型
// boolen number string
// 数组: 每一项类型都是一样的 元组
var list = [1, 2, 3, 4, '4', '5'];
var list1 = [1, 2];
var list2 = ['1', 2];
// 枚举
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var color = Color.Red;
var colorName = Color[0]; // 'Red'
// any
var a; // 不清楚类型： 用户输入
// void  空
// null, undefined
var b = null;
// never
function test() {
    // while(true) {
    // }
    throw new Error('error');
}
// 变量
var RFS_METHOD;
if ('requestFullscreen' in document.body) {
    RFS_METHOD = 'requestFullscreen';
}
else if ('webkitRequestFullScreen' in document.body) {
    RFS_METHOD = 'webkitRequestFullScreen';
}
else if ('mozRequestFullScreen' in document.body) {
    RFS_METHOD = 'mozRequestFullScreen';
}
else if ('msRequestFullscreen' in document.body) {
    RFS_METHOD = 'msRequestFullscreen';
}
// object 
function beFull(el) {
    // 检查兼容性 
    // RFS_METHOD 4 个 中的一个
    // el.requestFullscreen();
    console.log(el, RFS_METHOD);
    el[RFS_METHOD]();
}
// ts 结合 原生 html dom
// ts 结合 Node
// ts 结合 react
// dom 节点
// 节点类型 TS 没有内置， lib
var btn = document.getElementById('btn');
var box = document.querySelector('.box');
if (btn) {
    btn.addEventListener('click', function () {
        // box.requestFullscreen();
        // 是不是 Element 的实例 ？？
        // Element 是内置的一个类
        // html 标签都是 Element 实例
        // box ： element | null 
        if (box instanceof Element) {
            beFull(box);
        }
    });
}
