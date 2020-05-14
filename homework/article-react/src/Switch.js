import React, { Component } from 'react';
import TabController from './TabController';

class Switch extends Component{
    constructor(){
        super();
        this.state={
            currentIndex:0
        }
    }
    render(){
        return(
            <TabController>
                <section name='hot'>热门</section>
                <section name='latest'>最新</section>
                <section name='ranklist'>热榜</section>
            </TabController>
        )
    }
}

export default Switch;