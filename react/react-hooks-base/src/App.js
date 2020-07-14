import React from 'react';
import './App.css';
import DemoUseEffect from './UseEffect';
import DemoUseContext from './UseContext';
import DemoUseReducer from './UseReducer';

function App() {
  return (
    <div className="App">
      <DemoUseEffect />
      <DemoUseContext />
      <DemoUseReducer />
    </div>
  );
}

export default App;
