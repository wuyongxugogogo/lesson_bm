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