// LHS RHS 变量查找， 就在那一行相关
function foo(a) {
    var b = a;
    return a + b;
  } 
  
  // Left Hand Search
  var c = foo(2);
  
// 1. 找出所有的 LHS 查询（这里有 3 处！） c = ..;、a = 2（隐式变量分配）、b = ..
// 2. 找出所有的 RHS 查询（这里有 4 处！） foo(2..、= a;、a ..、.. b  