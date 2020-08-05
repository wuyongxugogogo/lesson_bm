import React, { useState } from 'react';
import ReactDOM from 'react-dom';
// import { MyComponent } from './demo';
import './styles.css'
import { FaceComponent } from './demo2'
import { MyComponent } from './demo2'

function App() {
    const [satisfactionLevel, setSatisfactionLevel] = useState(300)
    return (
        <div className="App">
            <MyComponent />
            {/* <input
                type="range"
                min="0"
                max="500"
                value={satisfactionLevel}
                onChange={(e)=>setSatisfactionLevel(e.target.value)} />
            <br />
            <span>{satisfactionLevel}</span>
            <br />
            <FaceComponent level={satisfactionLevel} /> */}
        </div>
    )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement);