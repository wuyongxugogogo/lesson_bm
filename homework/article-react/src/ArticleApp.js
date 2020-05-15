import React, { Component } from 'react';
import Switch from './Switch';
import ArticlesList from './ArticlesList';

class ArticleApp extends Component{
    constructor(){
        super();
        this.state={
            articles:[
                {
                    type:'hot',
                    title:'重新认识 package.json',
                    authorName:'前端小黑',
                    time:'2小时前'
                },
                {
                    type:'hot',
                    title:'用得上听得懂抄得走的前端经 - 5 月最靓的仔',
                    authorName:'前端早早聊',
                    time:'7小时前'
                },
                {
                    type:'hot',
                    title:'转行学前端的第 37 天 : 了解 ECMAScript function 箭头函数',
                    authorName:'小又又',
                    time:'5小时前'
                },
                {
                    type:'latest',
                    title:'Flutter 上的一个 Bug 带你了解键盘与路由的另类知识点',
                    authorName:'恋猫de小郭',
                    time:'4分钟前'
                },
                {
                    type:'latest',
                    title:'通过样式调整火狐滚动轴样式',
                    authorName:'写个程序换个饼',
                    time:'7分钟前'
                },
                {
                    type:'latest',
                    title:'JS实现在不刷新页面的情况下改变URL之pushState',
                    authorName:'FruitBro',
                    time:'44分钟前'
                },
                {
                    type:'latest',
                    title:'为什么普通 for 循环的性能远远高于 forEach 的性能？',
                    authorName:'dingFY',
                    time:'1小时前'
                },
                {
                    type:'rank',
                    title:'我在阿里是怎么工作的——写在阿里入职一周年',
                    authorName:'这是你的玩具车吗',
                    time:'3天前'
                },
                {
                    type:'rank',
                    title:'起底真相：面试进大厂，为何九死一生',
                    authorName:'前端早早聊',
                    time:'1天前'
                },
                {
                    type:'rank',
                    title:'基于 qiankun 的微前端最佳实践（万字长文） - 从 0 到 1 篇',
                    authorName:'晒兜斯',
                    time:'1天前'
                },
                {
                    type:'rank',
                    title:'结合实际场景聊聊大部分前端都不会使用的数据结构Map',
                    authorName:'wangly19',
                    time:'2天前'
                },
                {
                    type:'rank',
                    title:'Vue仿蘑菇街商城项目（vue+koa+mongodb）',
                    authorName:'liu6',
                    time:'2天前'
                }
            ],
            classnames:[
                'btn btn-active',
                'btn',
                'btn'
            ],
            show:'hot'
        }
    }
    render(){
        let {articles,classnames,show} = this.state;
        console.log(articles);
        return(
            <div className='wrapper'>
                <Switch classnames={classnames} change={this.change.bind(this)}/>
                <ArticlesList articles={articles} show={show}/>
            </div>
        )
    }
    change(index){
        let classnames = ['btn','btn','btn'];
        classnames[index] = 'btn btn-active';
        this.setState({
            classnames : classnames
        })
        let types = ['hot','latest','rank'];
        this.setState({
            show:types[index]
        })
    }

}

export default ArticleApp;