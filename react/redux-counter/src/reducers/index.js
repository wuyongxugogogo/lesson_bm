// 3. reducer n个函数 返回状态的纯函数 唯一的返回值
// 初始状态是state = 0,
// 状态是会改变的
// 在那一刻，一定有唯一的状态对应我们的组件
// action 是改变状态的动作 action(类别)
// {type: 'INCREMENT'}
// dispatch 一个 {type: 'INCREMENT'}action
// mapState
export default (state = 0, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return state + 1 // 等着你执行加法操作
        case 'DECREMENT':
            return state - 1 // 等着你执行减法操作
        default:
            return state //初始状态
    }
}