import React, { Component } from 'react';

class Switch extends Component{
    render(){
        let {classnames} = this.props;
        console.log(classnames)
        return(
            <div className='Tabs'>
                <div className={classnames[0]} onClick={this.click.bind(this,0)}>热门</div>
                <div className={classnames[1]} onClick={this.click.bind(this,1)}>最新</div>
                <div className={classnames[2]} onClick={this.click.bind(this,2)}>榜单</div>
            </div>
        )
    }
    click(index){
        this.props.change(index);
    }
}

export default Switch;