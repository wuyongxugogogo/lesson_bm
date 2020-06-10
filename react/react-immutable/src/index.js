import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// 可变
let obj = {}
let obj1 = obj;

obj1.name = 123;
console.log(obj1,obj);

// 不可变
let newObj = {}
let obj3 = {
  ...newObj
}
obj3.name = 123;
console.log(obj3,newObj)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
