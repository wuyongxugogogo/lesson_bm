import React, { Component } from 'react';
import Comment from './Comment';
class ComponentList extends Component {
  render() {
    console.log(this.props, '++++');
    let { comments } = this.props; //  在下面不用this.props.comments 
    
    return (
      <div>
        { comments.map((comment, i) => <Comment comment={comment} key={i}/>) }
      </div>
    )
  }
}

export default ComponentList;