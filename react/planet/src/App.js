import React from 'react';
import './App.css';
import { Router, Route, Link, Switch, NavLink } from 'react-router-dom';
import Home from './home/Home'

function App() {
  return (
      <div className="App">
        <Home />
      </div>
  );
}

export default App;
