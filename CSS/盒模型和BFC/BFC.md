BFC(Block Formatting Context) 块级格式化上下文

块级盒子的几种特性：
  块级盒会在垂直方向，一个接一个地放置，每个盒子水平占满整个容器空间
  块级盒的垂直方向距离由上下 margin 决定，同属于一个 BFC 中的两个或以上块级盒的相接的 margin 会发生重叠
  BFC 就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。
  计算 BFC 的高度时，浮动元素也参与计算


如何创建BFC?
  根元素或包含根元素的元素
  浮动元素（元素的 float 不是 none）
  绝对定位元素（元素的 position 为 absolute 或 fixed）
  overflow 值不为 visible 的块元素
  display的值为inline-block、table-cell、table-caption


BFC的应用？
  清除浮动
  布局
  解决块级盒边距重叠