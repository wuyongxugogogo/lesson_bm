import React, { Component } from 'react';
import imgURL2 from '../icon/搜索.png';
import image from '../image/image.jpg';
import addImg from '../image/加号.png';
import { Link } from 'react-router-dom';

class Main extends Component {
    constructor() {
        super();
        this.setState = {
            name: [],
            author: []
        }
    }
    render() {
        return (
            <div className="main">
                <div className="search">
                    <div className="search_img"><img src={imgURL2} alt="" /></div>
                    <input type="text" placeholder="搜索用户星球或内容" />
                </div>
                <div className="planets">
                    <div className="planet">
                        <div className="pImg"><img src={image} alt="" /></div>
                        <div className="pName">
                            <span className="pname">视界</span>
                            <span>顾中正</span>
                        </div>
                    </div>
                    <div className="planet">
                        <div className="pImg"><img src={image} alt="" /></div>
                        <div className="pName">
                            <span className="pname">畅聊科技教育</span>
                            <span>刘风飞</span>
                        </div>
                    </div>
                    <div className="planet">
                        <div className="pImg"><img src={image} alt=""/></div>
                        <div className="pName">
                            <span className="pname">肉山前端小课堂</span>
                            <span>翟路佳</span>
                        </div>
                    </div>
                    <div className="planet">
                        <div className="pImg"><img src={image} alt=""/></div>
                        <div className="pName">
                            <span className="pname">旅梦开发团</span>
                            <span>喻顺武</span>
                        </div>
                    </div>
                    <div className="planet">
                        <div className="pImg"><img src={image} alt=""/></div>
                        <div className="pName">
                            <span className="pname">旅梦开发团</span>
                            <span>吴永旭</span>
                        </div>
                    </div>
                    <Link to="/addItem/" className="planet" id="addPlanet" >
                        <div>
                            <div className="addImg"><img src={addImg} alt="" /></div>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Main;