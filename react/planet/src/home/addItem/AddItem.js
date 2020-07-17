import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AddItem extends Component {
    render() {
        return (
            <div className="addItem">
                <div className="addHeader">
                    <Link to="/">
                        <button>返回</button>
                    </Link>
                    <Link to="/">
                        <button>完成</button>
                    </Link>
                </div>
                <div className="information">
                    <div className="addImg"><img src="" alt="" /></div>
                    <div className="inputWrapper">
                        <input type="text" className="nameInput" placeholder="输入星球名称" />
                        <input type="text" className="authorInput" placeholder="输入您的称呼" />
                    </div>
                </div>
            </div>
        )
    }
}
export default AddItem;