import React, { Component } from 'react';

// class List extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { }
//     }
//     render() { 
//     return ( <h2>List-{this.state.id}</h2> );
//     }
//     componentDidMount(){
//         console.log(this.props)
//         let tempId = this.props.match.params.id
//         this.setState({id: tempId})
//     }
// }
function List(props) {
    console.log(props)
    let tempId = props.match.params.id
    return (
        <h2>List-{tempId}</h2>
    )
}

export default List;