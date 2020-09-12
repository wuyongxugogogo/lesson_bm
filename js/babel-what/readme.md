code -> code

import { zip } from 'loadsh'

import zip from 'loadsh/zip'

1. code -> reg 处理字符串 -> code
2. code -> AST -> 树 CRUD -> 另外一棵 AST -> 另外一份code

HTML -> AST -> appendChild createElement -> 另外一棵AST -> 渲染

JS: 词法
js代码由什么组成，引擎关心
- whiteSpace
- 换行
- comment
- token
    - numberLiteral 数字字面量
    - stringLiteral 字符串字面量
    - 符号 [] {} ()
    - identify  var c = b + 5