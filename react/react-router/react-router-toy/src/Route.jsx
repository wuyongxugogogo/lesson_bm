import React, { useContext } from 'react'
import { context } from './BrowserRouter'
const Route = (props) => {
    const { pathname } = useContext(context)
    const { path, component: Com } = props
    console.log(window.location)
    return pathname === path ? <Com /> : null
}

export default Route
