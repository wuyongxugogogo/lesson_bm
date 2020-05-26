import React, { Component } from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './Page/Home/index';
import Create from './Page/Create/index';

class App extends Component{
  render(){
    return(
      <BrowserRouter>
        <Route path="/" exact component={Home}/>
        <Route path="/create" component={Create}/>
      </BrowserRouter>
    )
  }
}

export default App;
