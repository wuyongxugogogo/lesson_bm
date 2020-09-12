const babel  = require('@babel/core');
const t = require('babel-types');
const code = `import { zip } from 'lodash'`;
// js 代码： 1.module  2. 脚本

// import zip from 'lodash/zip';  // importDefault
// import zip as XX from XX       // importName
const plugin = {
  // path AST import 的节点
  ImportDeclaration(path) {
    // import specifiers节点 from source节点
    // import React, { useState } from 'react'
    if (!t.isImportDefaultSpecifier(path.node.specifiers[0])) {
      let indetify = t.identifier('zip');
      let descs = [t.importDefaultSpecifier(indetify)];
      let str = t.stringLiteral('lodash/zip');
      let importStatement = t.importDeclaration(descs, str);
      path.replaceWith(importStatement);
    }
  }
}
const res = babel.transform(code, {
  plugins: [
    {
      visitor: plugin
    }
  ]
})
console.log(res);
