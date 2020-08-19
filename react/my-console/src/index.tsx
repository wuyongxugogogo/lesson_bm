import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

type originConsole = (...args: any[]) => void
let originConsole: originConsole = console.log;
console.log = function(...args: any[]){
  // alert('called')
  originConsole.apply(window.console, args)
}
console.log(1)
// 如何监听 数组 push这个行为
let arr = [1,2,3]
let originalPush = Array.prototype.push;
Array.prototype.push = function(...items: any[]){
  console.log('push call',items);
  console.log('this'+this)
  return originalPush.apply(this, items);
}

arr.push(4)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
