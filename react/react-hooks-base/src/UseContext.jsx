import React, { createContext, useState, useEffect, useRef } from 'react';
import { useContext } from 'react';

const context = createContext({
    theme: 'red'
})// 跨层级传递
function P() {
    let [obj, setTheme] = useState({ theme: 'red' });
    useEffect(() => {
        setTimeout(() => {
            setTheme({
                theme: 'blue'
            })
        }, 3000)
    }, []);

    return (<context.Provider value={obj}>
        <Child />
    </context.Provider>)
}
function Child() {
    return <Son />
}
function Son() {
    const ref = useRef();
    // 最近的context
    const value = useContext(context);
    useEffect(()=>{
        console.log(ref.current)
    },[])
    return (
        <p>6666
            <h2 style={{ color: value.theme }}
            ref={ref}
            >h2</h2>
            {/* <context.Consumer>
                {
                    (value) => {
                        return (
                            <h2 style={{ color: value.theme }}>h2</h2>
                        )
                    }
                }
            </context.Consumer> */}
        </p>
    )
}

export default P;