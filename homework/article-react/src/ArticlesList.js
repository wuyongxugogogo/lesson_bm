import React, { Component } from 'react';
import Article from './Article';

class AriticlesList extends Component {
    render() {
        let {articles,show} = this.props;
        console.log(articles,show)
        console.log(articles.filter(item=>item.type==='hot'))
        console.log(articles.filter(item=>item.type===show))
        return (
            <div className='articleslist'>
                {articles.filter(item=>item.type===show).map((index,i)=>
                    <Article authorName={index.authorName} time={index.time} title={index.title} key={i}/>)}
            </div>
        )
    }
}
export default AriticlesList;