import React,{useState} from 'react';

function useDrag() {
    // const state = {
    //   left: 0,
    //   top: 0
    // }
    // const [a, b] = [{left:0, top: 0}, () => {}]
    
    const [state, setState] = useState({
      left: 0,
      top: 0
    })
    var handleDown= (e) => {
      var startX = e.clientX;
      var startY = e.clientY;
      let obj = e.target.getBoundingClientRect();
      // 重置起点
      document.addEventListener('mousemove', handleMove);
      document.addEventListener('mouseup', handleUp);
    }
    var handleMove = (e) => {
      var newX = e.clientX;
      var newY = e.clientY;
      const diffX = newX;
      const diffY = newY;
      setState({
        left: diffX,
        top: diffY
      })
    }
    var handleUp = () => {
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseup', handleUp);
    }
    // parseUrl
    return {
      left: state.left,
      top: state.top,
      handleDown
    }
  }
  