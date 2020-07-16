import React, { Component } from 'react';

class AddItem extends Component {
    render() {
        <div className="addItem">
            <div className="addHeader">
                <button>返回</button>
                <button>完成</button>
            </div>
            <div className="information">
                <div className="addImg"><img src="" alt=""/></div>
                <div className="inputWrapper">
                    <input type="text" className="nameInput" placeholder="输入星球名称"/>
                    <input type="text" className="authorInput" placeholder="输入您的称呼"/>
                </div>
            </div>
        </div>
    }
}
export default AddItem;