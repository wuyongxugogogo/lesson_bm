import React from 'react';
// import Notification from './Notification';
// import App2 from './App2'
import notification from './Notification';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <App2 />
      <Notification>
        成功
        <h2>失败</h2>
      </Notification> */}
      <button onClick={() => {
        notification.open({
          title: 'this is a title'
        })
      }}>open</button>
      <button onClick={() => {
        notification.close()
      }}>close</button>
    </div>
  );
}

export default App;
