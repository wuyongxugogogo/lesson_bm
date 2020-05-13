  // 1 let 
  // 2 借助 利用函数有函数作用域这一个特点：每次生成 i 都是独立的
  // 3 变种 显式声明了 log 函数，
  for (var i = 1; i <= 5; i++) {
    // 1 -> 6
    // console.log(i);
    // 五次 函数调用 每个函数 i 都不一样
    // log(i)
    // 匿名函数 
    // () 定义 （）调用
    // 定义同时就调用: 立即执行函数 IIFE
    (function (i) {
      setTimeout(function timer() {
        // i : 1  2 3 4 5 6
        // 6  i <= 5 => false  循环退出  i === 6
        console.log(i);   // ? 
      }, 1000);
    })(i)
    // 异步代码 1s
    // 1s -> 输出 i ->  i 早已 -》 6
  }
  function log(i) {
    setTimeout(function timer() {
      // i : 1  2 3 4 5 6
      // 6  i <= 5 => false  循环退出  i === 6
      console.log(i);   // ? 
    }, 1000);
  }