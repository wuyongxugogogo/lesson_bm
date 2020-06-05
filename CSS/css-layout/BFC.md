## 格式化上下文
koa: ctx  === context
token: 泛指

```js
let a = 123;
function foo() {
  return a + 1;
}
foo()
```

## BFC
block-formating-context
隔离的容器

## 新建一个 BFC
- float
- absolute
- display: inline-blocks || table-cell || table-caption || flex || grid
- overflow 不为 visiable
- 根元素默认新建 BFC


## flex 布局
react-native 只支持 flex，RN 已经证明了 只用 flex 是可以很好的完成布局。

## float

文字环绕的
float 用来 布局了，float 清除
clear：both（left,right）

## BFC规则
- 盒子在垂直方向上，从上往下往下布局
- 垂直方向上的距离由 margin 决定，
  同一个 BFC 之内， 垂直方向上 block-level-box margin会折叠 (留白，够了就行)
- 由于有 float 元素，一个盒子大小可能会缩小，除非他新建 一个 BFC(overflow清理浮动)
- BFC 区域 不会 float 重叠 (左侧固定，右边自适应)


## layout
normal flow：
postion：
float: 文字环绕， 布局：几行几列
flex：