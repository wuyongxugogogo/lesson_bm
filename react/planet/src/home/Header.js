import React, { Component } from 'react';
import imgURL from '../icon/加号.png';

class Header extends Component{
    render(){
        return(
            <div className="header">
                <div className="top_left"></div>
                <div className="app_name">知识星球</div>
                <div className="top_right"><img src={imgURL} /></div>
            </div>
        )
    }
}
export default Header;