import React from 'react';
import { fromJS } from 'immutable';
import immutableComponent from './componets/common';
import Header from './componets/Header';
import './App.css';


class App extends immutableComponent {
  state = {
    title: fromJS('123') 
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        title: '123456'
      })
    }, 3000)
  }
  render() {
    console.log('app render')
    return (
      <div>
        123456
        <Header title={this.state.title} />
      </div>
    )
  }
}


export default App;

