class setState -> 父子组件props+props调用 -> Context -> redux useReducer -> mobx connect 灵感 装饰器模式
1. 当数据流动层次超过两层，简单的useState传起来太麻烦了
而redux useReducer 太重，如果action可以忽略 useContext
useState React.createContext结合 数据模板+实际操作
useContext
2. reducer 函数是灵魂
    redux 企业级的数据状态安全流程及架构
    - state读可以，但不能写
    - state 写操作 dispatch action -> reducer -> 旧新状态的切换
    - reducer 一个旧状态通过同样的type，和payload 新状态一定是一样的