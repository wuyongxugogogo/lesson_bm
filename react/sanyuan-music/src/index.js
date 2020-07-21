import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { HashRouter } from 'react-router-dom'
import { renderRoutes} from 'react-router-config'
import routes from './routes/index'
import { Provider } from 'react-redux'
import store from './store'


ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
  <HashRouter>
     {renderRoutes(routes)}
   </HashRouter>
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
