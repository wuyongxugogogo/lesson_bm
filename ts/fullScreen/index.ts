// TS: 内置  + 外部类型
// boolen number string
// 数组: 每一项类型都是一样的 元组
let list = [1, 2, 3, 4, '4', '5']
let list1: number[] = [1, 2]
let list2: [string, number] = ['1', 2];
// 枚举
enum Color { Red = 0, Green = 1, Blue = 2 }
let color: Color = Color.Red;
let colorName = Color[0]; // 'Red'
// any
let a: any;   // 不清楚类型： 用户输入
// void  空

// null, undefined
let b: null = null;
// never
function test(): never {
  // while(true) {
  // }
  throw new Error('error');
}

// 联合类型
// 定义一个类型: 进入全屏的时候 调用就是其中之一
type RFSmethods = 'requestFullscreen' | 'webkitRequestFullScreen' | 'mozRequestFullScreen' |
  'msRequestFullscreen'
// dom 没有帮我定义 
interface Element {
  requestFullscreen(): any,
  webkitRequestFullScreen(): any,
  mozRequestFullScreen(): any,
  msRequestFullscreen(): any
}
// 变量
let RFS_METHOD: RFSmethods
if ('requestFullscreen' in document.body) {
  RFS_METHOD = 'requestFullscreen';
} else if ('webkitRequestFullScreen' in document.body) {
  RFS_METHOD = 'webkitRequestFullScreen'
} else if ('mozRequestFullScreen' in document.body) {
  RFS_METHOD = 'mozRequestFullScreen'
} else if ('msRequestFullscreen' in document.body) {
  RFS_METHOD = 'msRequestFullscreen'
}
// object 
function beFull(el: Element) {
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
const btn = document.getElementById('btn');
const box = document.querySelector('.box');
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
  })
}