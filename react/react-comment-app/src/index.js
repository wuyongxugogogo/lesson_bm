import React from 'react';
import ReactDom from 'react-dom'; // index.js 入口文件
import CommentApp from './CommentApp';// 模块机制
import './index.css';
// 跟link 标签say byebye

ReactDom.render(
  <CommentApp />,

  // 真实DOM
  document.getElementById('root')
)