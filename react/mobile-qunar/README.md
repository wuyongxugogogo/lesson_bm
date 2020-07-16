1. css reset
    normalize.css
    index.css  css 移动业务的设置

2. 无状态组件的创建流程可以练习
    - 组件插入父级组件中，思考好props
    - 组件的类型如果是无状态组件
        prop-types css propTypes
        形参props
        return (<div></div>)
    - props 解构出来要的prop

3. 年轻的react hoocks 全新开发方式
    class Component -> function
    函数式编程
    class + constructor + 生命周期 + render ->
        function + react hoocks
    - useCallback 缓存一个函数
    - useMemo

4. 状态组件编写顺序
    - 数据 Provider store

5. redux
    - 简单的redux 项目结构
        store.js createStore reducers
            中间件 axios redux-thunk 支持异步
        reducers.js combineReducers
        actions.js 数据请求，状态改变的触发都由actions来负责
            ActionTypes 可读性
    - redux API -> 设计状态(reducer + actions)
        初始值 from to 两个reducer函数
        函数 初始值 action return 初始值
        状态会怎么改变  动作的声明  SET_FROM
        - switch case
        - {type,payload} action
        - actionTypes 可读性
        - actions 写出来
    - 数据组件化
        1. connect 高阶返回原组件
            connect({
                mapState,
                mapDispatch
            })(Component)
    - reducer
        1. action标准做法
        - 返回{ type: , payload:} 更新reducer状态
        - 组件里的事件、生命周期等功能 主要是和数据 状态打交道，归为action来做
        - 所有的action export function 在组件里引入需要的actions
        - bindActionCreators 
            actions 变成本地调用的函数 
                dispatch
        - useMemo 缓存函数
        - connect 中去返回第二个参数 action

    1. action
        from 北京
        to 南昌
        两个action

- from to 的复盘
    1. redux 
    - reducers纯函数 返回 状态 及接受状态 的更新
    只有一个状态与之对应，switch case
    - actions actionsTypes
        是更新reducer的使者 dispatch action
    from to 都有独立的reducer函数和action