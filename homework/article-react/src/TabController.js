import React, { Component } from 'react';

class TabController extends Component{
    constructor(){
        super();
        this.state={
            currentIndex:0
        }
    }
    render(){
        console.log(this.props.children)
        return(
            <div className='tab-container'>
                <nav>
                {React.Children.map(this.props.children,(element,index)=>(<div onClick={this.changeTab.bind(this,index)} className={this.addTitleClass(index)}>{element.props.value}</div>))}
                </nav>

                <div>
                {React.Children.map(this.props.children,(element,index)=>(<div className={this.addContentClass(index)}>{element}</div>))}
                </div>
            </div>
         )
    }
    addTitleClass(index){
        return index = this.state.currentIndex?'tab-title tab-title-show':'tab-title';
    }
    addContentClass(index){ 
        return index = this.state.currentIndex?'tab-content show':'tab-content';
    }
    changeTab(index){
        this.setState={
            currentIndex:index
        }
    }
}

export default TabController;