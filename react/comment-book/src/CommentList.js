import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Comment from './Comment'


class CommentList extends Component {
  static propTypes = { // 检查类型
    comments: PropTypes.array,
    onDeleteComment: PropTypes.func
  }


  static defaultProps = { //默认值
    comments: []
  }

  handleDeleteComment(index) {
    if (this.props.onDeleteComment) {
      this.props.onDeleteComment(index)
    }
  }

  render() {
    return (
      <div>
        {this.props.comments.map((comment, i) =>
          <Comment
            comment={comment}
            key={i}
            index={i}
            onDeleteComment={this.handleDeleteComment.bind(this)} />
        )}
      </div>
    )
  }
}


export default CommentList