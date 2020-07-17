- 全栈项目
    城市数据怎么做
    - cityDate null
        action-type
    - action setCityDate
    - 是否显示 isCitySelectorVisible  false
        ACTION_SET_IS_CITY_SELECTOR_VISIBLE
        isLoadingCityDate
        ACTION_SET_IS_LOADING_CITY_DATE
    - 后端API设计流程
        1. mongodb/mysql 写真后端
            mockerAPI 解决了跨域
        2. 模块化输出api配置
        3. require json Mocker.mock random 配置
    - api -> action -> reducer -> connet -> 组件

    - 数据请求都放在actions中
        异步的actions中, dispatch多个action

    作业： 完成isLoadingCityData的reducer和action
            并在fetchCityData中处理跟它相关的逻辑