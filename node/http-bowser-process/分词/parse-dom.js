let htmlStr = `<html>
  <head></head>
  <body>
    <img />
    <span></span>
    <div></div>
  </body>
</html>`
let currentToken = null;

let stack = [ { type: 'document', children: [] } ];
parse(htmlStr);
console.log(JSON.stringify(stack[0], null, 2));
function emit(token) {
  console.log(token);
  let top = stack[stack.length - 1];
  if (token.type === 'startTag') {
    // push pop 处理配对
    let element = {
      type: 'element',
      children: [],
      attributes: [],
      tagName: token.tagName
    }
    stack.push(element);
    // 作为栈顶的元素子节点，为了生成树
    // if (!top.children) top.children = [];
    top.children.push(element);
  } else if (token.type === 'endTag') {
    if (token.tagName !== top.tagName) {
      throw new Error('tagname match error')
    } else {
      stack.pop();
    }
  } else if (token.type === 'selfCloseToken') {
    let element = {
      type: 'element',
      children: [],
      attributes: [],
      tagName: token.tagName
    }
    top.children.push(element);
  }
  currentToken = null;
}
function parse(htmlString) {
  state = start;
  for (let c of htmlString) {
    state = state(c);
  }
}
function start(c) {
  if (c === '<') {
    return tagOpen
  } else {
    return start
  }
}
function tagOpen(c) {
  // <html>: html tag 由 a-zA-Z  div span p 
  // </html>
  //  h t m l
  // console.log(c);
  if (c === '/') {
    return endTagOpen
  } else if (c.match(/[a-zA-Z]/)) {
    currentToken = {
      type: 'startTag',
      tagName: c
    }
    return tagName
  }
}
function tagName(c) {
  if (c.match(/[a-zA-Z]/)) {
    currentToken.tagName += c;
    return tagName
  } else if (c.match(/[\t\n\f ]/)) {
    return beforeAttibuteName
  } else if (c === '>') {
    // tag 拼接结束
    emit(currentToken);
    return start
  }
}
function beforeAttibuteName(c) {
  if (c === '/') {
    currentToken.type = 'selfCloseToken';
    return tagName;
  }
}
function endTagOpen(c) {
  // </html>
  if (c.match(/[a-zA-Z]/)) {
    currentToken = {
      type: 'endTag',
      tagName: c
    }
    return tagName;
  }
}