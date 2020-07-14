import React, { Component } from 'react';
import Header from './Header';
import Main from './Main'
import './Home.css'

class Home extends Component{
    render(){
        return(
            <div className="content">
                <Header />
                <Main />
            </div>
        )
    }
}

export default Home;