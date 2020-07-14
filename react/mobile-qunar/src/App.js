import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header.jsx';

function App() {
  return (
    <div className="App">
      <div className="header-wrapper">
        <Header title="火车票" />
      </div>
    </div>
  );
}

export default App;
