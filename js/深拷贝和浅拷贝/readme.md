深拷贝方法：1、JSON.parse(JSON.stringify(obj)); 2、遍历递归对象
浅拷贝方法：展开运算符

区别：
  浅拷贝和深拷贝第一层数据改变不会使原数据改变，但是浅拷贝其他改变时会使原数据改变