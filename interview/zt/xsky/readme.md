- 面试题想考察什么
- 牛客网

1. css 属性名和值不区分大小写
    id  classname querySelector 敏感
    刷题目

2. 盒子模型
    margin 
    行内元素
    当我们使用内外边距,只有左右方向有效
    设置四个方向的内边距时，对于行内元素，确实显示效果，但是对其他元素没有影响
    竖直方向 外边距没有效果

3. 怎么回答才完美
    自适应
    rem/em
    rem 一切可依 等比例关系 px2rem插件
    蓝湖 用法 750px 设计稿
    手机多变 html font-size 宽 高
    media query
    vw/vh
    百分比
    calc
    postcss
    适配，我还用过vue/react+vw 实现
    1. 移动适配
        vw
    2. postcss 太强大
        vue 内置了postcss
        .postcssrc.js
        px-to-vw
        poxtcss-px-to-viewport 安装