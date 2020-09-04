import React,{ useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import { context } from './react-redux.js';

function App() {
  const context = useContext(context);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const mapDispatchToProps = () => {
  return {}
}

const mapStateToProps = (state) => {
  return {
    count: state
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
// 1. 拿到 mapStateToProps 的返回值();
// 2. 把返回值放到<App  ... props />
