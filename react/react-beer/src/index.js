import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';/* 全局样式 */
import App from './App';
import * as serviceWorker from './serviceWorker';
import Main from './components/Main';
import About from './components/About';
import { BrowserRouter,Route} from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Main} />
      <Route path="/about" component={About} />
      <Route path="/search/:searchTerm" component={Main} />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
