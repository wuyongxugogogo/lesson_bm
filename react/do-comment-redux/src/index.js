import React from 'react';
import ReactDOM from 'react-dom';
// 数据管理模式
// 创建store 中央仓库 数据管理的架构
import { createStore } from 'redux'; // 全家桶 三巨头 数据管理
import { Provider } from 'react-redux';// Provider 提供
import CommentApp from './containers/CommentApp';
import commentsReducer from './reducers/comments';

// 仓库 单一状态树
const store = createStore(commentsReducer);

ReactDOM.render(
  <Provider store={store}>
    <CommentApp />
  </Provider>,
  document.getElementById('root')
)


// react-router react-redux
