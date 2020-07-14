import React, {
    useReducer
} from 'react';
const initState = {
    count: 0
}
function reducer(state, action){
    switch(action.type){
        case 'decrement':
            return {count: state.count - 1}
        case 'increment':
            return {count: state.count + 1}
        default:
            return state;
    }
}
function Counter(){
    const [state, dispatch] = useReducer(reducer,initState);

    return (
        <div>
            count:{ state.count }
            <button onClick={()=>dispatch({type: 'decrement'})}>-</button>
            <button onClick={()=>dispatch({type: 'increment'})}>+</button>
        </div>
    )
}

export default Counter;