import React, { useEffect, useRef } from 'react';
import './App.css';
import pullToRefresh from './pullDown';

const { init } = pullToRefresh()


function App() {
  const contentRef = useRef();
  const ptrRef = useRef();
  const bodyRef = useRef();
  useEffect(() => {
    init({
      contentEl: contentRef.current,
      ptrEl: ptrRef.current,
      bodyEl: bodyRef.current,
      loadingFunction: () => new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve()
        }, 3000)
      })
    })
  }, [])
  return (
    <div className="body-wrap" ref={bodyRef}>
      {/* ptr-wrap 负责移动 */}
      <div ref={ptrRef} className="ptr-wrap">
        {/* 负责动画 */}
        <div className="loading" />
      </div>
      <header ref={contentRef} className="content-wrap" >
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

export default App;
