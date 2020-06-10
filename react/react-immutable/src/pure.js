// 1：没有 副作用(请求，读写文件， Math.random, console.log)
// 2：输入是相同的，输出也是相同的
// 函数：数学
// f(x) = x ^ 2 + 1
// 1: f(10) = 101
// 2: f(10) = 101
// n: f(10) = 101
// f(11) === f(11)
function sum(a, b) {
    return a + b
  }
  sum(10, 20)
  sum(10, 20)
  sum(10, 20)
  const TYPE = 'abc'
  function reducer(state, action) {
    // dispatch
    // 没有任何额外的副作用
    switch (action.type) {
      case TYPE:
        return 'abc';
      default:
        return 123;
    }
  }
  console(reducer(null, { type: TYPE}))  // abc
  console(reducer(null, { type: TYPE}))  // abc
  
  let a = 10;
  function foo() {
    // 额外的副作用
    // axios.get()
    return Math.random();
  }
  foo()  // 10  
  a = 20;
  foo()  // 20
  