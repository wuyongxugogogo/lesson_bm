import React,{ Component } from 'react'; // 按需加载 es6 解构
import CommentInput from './CommentInput';
import CommentList from './CommentList';

class CommentApp extends Component{
    render(){
        return(
            <div className='wrapper'>
                <CommentInput onSubmit={this.handleSubmitComment.bind(this)}/>
                <CommentList />
            </div>
        )
    }
    handleSubmitComment(comment){
        console.log(comment);
    }
}

export default CommentApp;