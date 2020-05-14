import React from 'react';
import ReactDom from 'react-dom';
import ArticleApp from './ArticleApp';
import './index.css';


ReactDom.render(
  <ArticleApp />,

  // 真实DOM
  document.getElementById('root')
)