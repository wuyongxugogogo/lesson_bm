import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  fetch('http://localhost:1314/rest/cities')
    .then(data => data.json)
    .then(data => {
      console.log(data);
    })
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
