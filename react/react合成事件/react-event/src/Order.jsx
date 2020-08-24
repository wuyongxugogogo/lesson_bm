import React, { Component } from "react";
class Order extends Component {
  state = {};
  childRef = React.createRef()
  parentRef = React.createRef()
  parent = () => {
    console.log(2)
  }
  child = (e) => {
    console.log(1)
    // react 实现的 api
    e.stopPropagation()
  }
  componentDidMount() {
    // 所有的事件都绑定在document上面
    document.addEventListener('click', () => {
      console.log('document')
    })
    // 原生的绑定
    this.childRef.current.addEventListener('click', () => {
      console.log('child')
    })
    this.childRef.current.addEventListener('click', () => {
      console.log('parent')
    })
  }
  render() {
    return <div onClick={this.parent} ref={this.parentRef}>
      <div onClick={this.child} ref={this.childRef}>
        child
      </div>
    </div>;
  }
}

export default Order;
