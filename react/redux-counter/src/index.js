import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'; // 创建单一状态树
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import counter from './reducers';
import Counter from './components/Counter';

const store = createStore(counter); // reducer

const render = () => ReactDOM.render(
  <Counter 
  // 读取store中的状态
    value={store.getState()}
    onIncrement={() => store.dispatch({ type: 'INCREMENT'})}
    onDecrement={() => store.dispatch({ type: 'DECREMENT'})}
  />,
  document.getElementById('root')
);

render()
store.subscribe(render)

serviceWorker.unregister();
