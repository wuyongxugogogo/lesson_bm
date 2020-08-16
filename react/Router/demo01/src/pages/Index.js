import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                { cid: 123, title: '吴永旭的掘金-1' },
                { cid: 456, title: '吴永旭的掘金-2' },
                { cid: 789, title: '吴永旭的掘金-3' }
            ]
        }
    }
    render() {
        return (
            <div>
                <Redirect to="/home/" />
                <h2>wuyongxu</h2>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Link to={'/list/'+item.cid}>{item.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>

        );
    }
}

export default Index;