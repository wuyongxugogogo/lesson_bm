JSX -> createElement -> 虚拟DOM（react element）-> 对应平台的渲染器 reactDOM/react-native  渲染

setState -> 生成另外一棵 虚拟DOM -> dom diff(reconcilers) -> 找出哪些地方需要更新  -> 应用更新

## stack reconciler


## fiber reconciler

之前 DOM diff 递归的过程：我们遍历所有的节点，这个如果js执行时间是很长的，而且 js 计算和页面渲染，绘制，互斥的。

浏览器的一次event-loop / frame：

- task
- microtask
- requestAnimationFrame
- render
- requestIdleCallback 当这一帧有空闲时间的时候
  
之前 js 是老大，我想执行多久我就执行多久
现在 js 主动让步，我自己放在 requestIdleCallback 里面，js 和浏览器
统一站在用户体验的角度，
合作调度

协程、纤程：
- 能够把可中断的任务切片处理。
- 能够调整优先级，重置并复用任务。

fiber: 是一个数据结构
这个数据结构支持我们写出 可中止暂停重新启动的代码
```js
fiber: {
  child: 第一个子节点
  sibling：下一个兄弟
  return：父节点
}
```
fiber：以单链表的形式表达一个树

generate：yield

## 生命周期

Render 阶段: 算出哪些需要 更新
Commit 阶段：之前 Render 阶段 已经花费很多时间，为了让用户尽快看到页面，所以这个会一气呵成，更新页面
