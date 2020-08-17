const defaultState = {
    inputValue: 'aXu',
    list: []
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'change_input':
            return { ...state, inputValue: action.value }
        case 'add_item':
            let newState = { ...state }
            newState.list.push(newState.inputValue)
            newState.inputValue = ''
            return newState
        default:
            return state
    }
}