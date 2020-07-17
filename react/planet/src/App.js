import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch, NavLink,Redirect } from 'react-router-dom';
import Home from './home/Home'
import Dynamic from './dynamic/Dynamic'
import Find from './find/Find'
import Mine from './mine/Mine'
import AddItem from './home/addItem/AddItem'

function App() {
  return (
    <Router>
      <div className="App">
        <div className="wrapper">
          <Switch>
            <Route path="/" exact render={()=><Redirect to="/home" />} />
            <Route path="/home" component={Home} />
            <Route path="/dynamic" component={Dynamic} />
            <Route path="/find" component={Find} />
            <Route path='/mine' component={Mine} />
            <Route path='/addItem/' component={AddItem} />
          </Switch>
        </div>
        <div className="bottom-tab">
          <div className="tab-item">
            <NavLink exact className="nav-link" to="/home"><span>星球</span></NavLink>
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
      </div>
    </Router>
  );
}

export default App;
