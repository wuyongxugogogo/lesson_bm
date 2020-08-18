import React, { useContext } from 'react';
import { context } from './BrowserRouter'
const Link = (props) => {
    const { to, children } = props
    const { update, pathname } = useContext(context)
    const handleClick = (e) => {
        e.preventDefault()
        window.history.pushState(null, null, to)
        // 整个页面更新
        // 在 Context 存一份数据
        update({ pathname: to })
    }
    return (
        <a onClick={handleClick} href={to}>
            {children}
        </a>
    )
}

export default Link
