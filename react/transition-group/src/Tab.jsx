import React, { Component } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
// import "./index.css";
// CSSTransition
// 用 key 追踪内部的 CSSTransition
// 能知道 哪个加进来 哪个移除
let uid = 2;
class Tabs extends Component {
    state = {
        tabData: [
            {
                id: 1,
                panel: "选项1"
            },
            {
                id: 2,
                panel: "选项2"
            }
        ]
    };

    addTab = () => {
        const { tabData } = this.state;
        uid++;
        tabData.push({
            id: uid,
            panel: `选项${uid}`
        });
        this.setState({
            tabData
        });
    };

    deleteTab = id => {
        let { tabData } = this.state;
        let index = -1;
        tabData.some((p, i) => {
            if (p.id === id) {
                index = i;
                return true;
            }
            return false;
        });
        if (index > -1) {
            tabData.splice(index, 1);
            this.setState({
                tabData
            });
        }
    };
    renderTabs = () => {
        const { tabData } = this.state
        // [1,2] [1,3,4,2]
        // 重新渲染的时候，对比前后两次的key
        // key 一样 这个节点就会被复用
        return (
            tabData.map((tab) => {
                return (
                    <CSSTransition
                        key={tab.id}
                        timeout={500}
                        classNames='tab-wrap'
                    >
                        <div className={`tab-item`}>
                            {tab.panel}
                            <span
                                className="btns btn-delete"
                                onClick={() => this.deleteTab(tab.id)}
                            >
                                ✕
              </span>
                        </div>

                    </CSSTransition>
                )
            })
        )
    }
    render() {
        const { tabData } = this.state;


        return (
            <div className="tabs main">
                <TransitionGroup>
                    {this.renderTabs()}
                </TransitionGroup>
                <span className="btns btn-add" onClick={this.addTab}>
                    +
        </span>
            </div>
        );
    }
}
export default Tabs;
