import React, { Component } from 'react'; // 按需加载 es6 解构
import CommentInput from './CommentInput';
import CommentList from './CommentList';

class CommentApp extends Component {
    constructor() {
        super();
        this.state = {
            comments: [
                {
                    username: 'liuce',
                    content: 'asdasd'
                }
            ]
        }
    }
    render() {
        const { comments } = this.state;
        return (
            <div className='wrapper'>
                <CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
                <CommentList comments={comments} />
            </div>
        )
    }
    handleSubmitComment(comment) {
        // let { comments } = this.state;
        // comments.unshift(comment)
        // this.setState({
        //     comments: comments
        // })
        console.log(...this.state.comments)
        this.setState({
            comments:[comment, ...this.state.comments]
        })
    }
}

export default CommentApp;