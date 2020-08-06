// 数据在hooks 怎么走的？
// useState -> context 轻量 | reducer 重 | useReducer | mobx
import React,{useReducer} from 'react'

const userInfoReducer = (state, action) => {
    switch (action.type) {
        case "setusername":
            return {
                ...state,
                name: action.payload
            }
        case "setlastname":
            return {
                ...state,
                lastname: action.payload
            }
        default:
            return state
    }
}

export const MyComponent = () => {
    const [reducer, dispatch] = useReducer(userInfoReducer, {
        name: 'John',
        lastname: 'Doe'
    })

    return (
        <>
            <h3>{reducer.name}{reducer.lastname}</h3>
            <EditUsername name={reducer.name} dispatch={dispatch} />
            <input
                type="text"
                value={reducer.lastname}
                onChange={e => dispatch({
                    type: "setlastname",
                    payload: e.target.value
                })}
            />
        </>
    )
}

const EditUsername = React.memo(props => {
    console.log("Hey I'm only rerendered when name gets updated, check React.memo")
    return (
        <input
            type="text"
            value={props.name}
            onChange={
                e => props.dispatch({
                    type: 'setusername',
                    payload: e.target.value
                })
            }
        />
    )
})