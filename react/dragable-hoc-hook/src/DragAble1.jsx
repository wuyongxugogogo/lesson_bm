import React, { Component } from 'react';
class Drag extends Component {
    state = {
        left: 0,
        top: 0
    }
    handleDown = (e) => {
        var startX = e.clientX;
        var startY = e.clientY;
        let obj = e.target.getBoundingClientRect();
        // 重置起点
        console.log(startX - obj.x, startY - obj.y)
        this.startX = startX - obj.x; //obj.left
        this.startY = startY - obj.y;
        document.addEventListener('mousemove', this.handleMove);
        document.addEventListener('mouseup', this.handleUp);
    }
    handleMove = (e) => {
        var newX = e.clientX;
        var newY = e.clientY;

        const diffX = newX - this.startX;
        const diffY = newY - this.startY;
        this.setState({
            left: diffX,
            top: diffY
        })
    }
    handleUp = () => {
        document.removeEventListener('mousemove', this.handleMove);
    }
    render() {
        const { left, top } = this.state;
        return <h2
            style={{ left, top }}
            className="dragable"
            onMouseDown={this.handleDown}
        >h2</h2>
    }
}

class Drag2 extends Component {
    render() {
        return <h2>旅梦</h2>
    }
}

function withDragAble(Com) {
    class WithDragAble extends Component {
        state = {
            left: 0,
            top: 0
        }
        handleDown = (e) => {
            var startX = e.clientX;
            var startY = e.clientY;
            let obj = e.target.getBoundingClientRect();
            // 重置起点
            console.log(startX - obj.x, startY - obj.y)
            this.startX = startX - obj.x; //obj.left
            this.startY = startY - obj.y;
            document.addEventListener('mousemove', this.handleMove);
            document.addEventListener('mouseup', this.handleUp);
        }
        handleMove = (e) => {
            var newX = e.clientX;
            var newY = e.clientY;

            const diffX = newX - this.startX;
            const diffY = newY - this.startY;
            this.setState({
                left: diffX,
                top: diffY
            })
        }
        handleUp = () => {
            document.removeEventListener('mousemove', this.handleMove);
        }
        render() {
            const { left, top } = this.state;
            return (
                <div style={{left,top}} className="dragable" onMouseDown={this.handleDown}>
                    <Com />
                </div>
            )
        }
    }
    return WithDragAble;
}
export const WithDragAble2 = withDragAble(Drag2);
export default Drag;