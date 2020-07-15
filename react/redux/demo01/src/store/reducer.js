const defaultState = {
    inputValue: 'Write Something',
    list: [
        '早八点开晨会，分配今天的代码任务',
        '早九点和项目经理开需求沟通会',
        '早九点和项目经理开需求沟通会'
    ]
}
export default (state = defaultState, action) => {
    // console.log(state,action)
    // reducer里只能接收state,不能改变state
    if(action.type === 'changeInput'){
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    if(action.type === 'addItem'){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }
    if(action.type === 'deleteItem'){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index,1)
        return newState
    }
    return state
}