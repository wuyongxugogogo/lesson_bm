import React, { Component } from 'react';
import CommentList from './CommentList';

class CommentApp extends Component{
    render(){
        return(
            <div className="wrapper">
                <CommentList />
            </div>
        )
    }
}

export default CommentApp;