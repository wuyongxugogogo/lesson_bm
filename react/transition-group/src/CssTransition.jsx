import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group';
import './index.css'

function Demo() {
    const [isIn,setIsIn] = useState(true);
    // 移走 ：*-exit ms *-exit-active *-exit-done
    // 移进来: *-enter ms *-enter-active *-enter-done
    return (
        <>
            <CSSTransition timeout={2000}
            classNames="msg"
            in={isIn}
            >
                <div className="box"></div>
            </CSSTransition>
            <button onClick={()=>{setIsIn(!isIn)}}>toggle</button>
        </>
    )
}

export default Demo;