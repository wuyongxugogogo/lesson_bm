import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// 数据跟组件是分离开
import axios from 'axios';
import './mock/data.js';

// JSX UI state MVVM  行为 oo 

// 函数的返回值是组件
// /posts/  axios api url    /comments/
// Post 组件做为参数 高阶组件 
// 通用性的提供数据请求及更新的解决方案
// 有人为它服务 
class Post extends Component {
  render() {
    return (
      <div>
        <p>{this.props.msg}</p>
        <p>{this.props.content}</p>
      </div>
    )
  }
}

class Comment extends Component {
  render() {
    return (
      <div>
        Comment
      </div>
    )
  }
}

const loadAndRefresh = (url) => (WrappedComponent) => {
  // 返回组件
  return class extends Component {
    constructor(){
      super();
      this.state = {
        msg: '',
        content: ''
      }
    }
    componentDidMount() {
      // 管住数据请求 
      this._loadDate();
    }

    async _loadDate() {
      this.setState({
        msg: '数据加载中...'
      });
      axios.get(url)
        .then(res => {
          console.log(res)
          this.setState({
            msg: res.data.title,
            content: res.data.content
          })
        })
    }

    render() {
      const props = {
        msg: this.state.msg,
        content: this.state.content
      }
      return (
        <WrappedComponent {...props} />
      )
    }

  }
}

const WrappedPost = loadAndRefresh('/posts/')(Post);
const WrappedComment = loadAndRefresh('/comments/')(Comment);

function App() {
  return (
    <div className="App">
      {/* message  */}
      {/* <Post/> */}
      <WrappedPost />
      <WrappedComment />
    </div>
  );
}

export default App;
