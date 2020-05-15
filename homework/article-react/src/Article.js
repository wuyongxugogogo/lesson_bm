import React, { Component } from 'react';

class Article extends Component {
    render() {
        let { authorName, time, title } = this.props;
        console.log(authorName, time, title)
        return (
            <div className='article'>
                <div className='article_header'>
                    <span className='zhuanlan'>专栏</span>
                    <span>·</span>
                    <span>{authorName}</span>
                    <span>·</span>
                    <span>{time}</span>
                </div>
                <div className='article_title'>
                    <span className='title'>{title}</span>
                </div>
            </div>
        )
    }
}
export default Article;