## 
我们的一个网页 是沿着一条Z轴排开的(ps图层)

## 层叠上下文形成 z-index 调整的就是这个层叠上下文
1. position 不为 static
2. filter transform perspective 不为 none
3. will-change 

## layers
共同点：都是z轴顺序
transform: translate3d
will-change
perspective

## 
js -> relayout -> repaint -> composite(合成) - GPU

## 提升 layers 的好处
- 当前这个layers变化不会影响其他layers
- 对于 transfrom、opacity 产生变化了,不会经过 relayout repaint 跳到 composite