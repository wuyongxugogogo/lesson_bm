import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import PrivateRoute from './PrivateRoute';
import Collect from './Collect';
import Login from './Login';


function App() {
  return (
    <BrowserRouter>
      header
      <Route path="/login" component={Login} />
      <PrivateRoute path="/collect" component={Collect} />
    </BrowserRouter>
  );
}

export default App;
