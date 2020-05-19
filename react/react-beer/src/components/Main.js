import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';

class Main extends React.Component{
    constructor(){
        super();
    }
    componentDidMount(){ // 生命周期 onload
        console.log(this.props,this.props.match);
        const params = this.props.match.params;
        const searchTerm = params.searchTerm || undefined;
        console.log(searchTerm);
        this.loadBeers(searchTerm);
    }
    loadBeers(){
        
    }
    render(){
        return(
            <div className="wrapper">
                <Header siteName="Beer me!"/>
                {/* <Link to="/About">About</Link> */}
            </div>
        )
    }
}

export default Main;