import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from 'react-router-dom';
import Home from './home/Home'
import Dynamic from './dynamic/Dynamic'
import Find from './find/Find'
import Mine from './mine/Mine'

function App() {
  return (
    <Router>
      <div className="App">
        <div className="bottom-tab">
          <div className="tab-item">
            <NavLink className="nav-link" to="/"><span>星球</span></NavLink>
          </div>
          <div className="tab-item">
            <NavLink className="nav-link" to="/dynamic"><span>动态</span></NavLink>
          </div>
          <div className="tab-item">
            <NavLink className="nav-link" to="/find"><span>发现</span></NavLink>
          </div>
          <div className="tab-item">
            <NavLink className="nav-link" to="/mine"><span>我</span></NavLink>
          </div>
        </div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/dynamic" component={Dynamic} />
          <Route path="/find" component={Find} />
          <Route path='/mine' component={Mine} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
