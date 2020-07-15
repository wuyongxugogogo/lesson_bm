em: 相对于自己的 font-size,(相对于父元素的 font-sizt)
rem: html的font-size
1. font-size 多少
2. 如何由设计稿快速还原

DPR:device piex ratio 设备像素比 = 设备像素(分辨率) / 设备独立像素(屏幕尺寸)

1. meta initial-scale：0.5 所有的元素缩小0.5倍
    我写元素宽高 按照扩大两倍之后的写
    一个元素 本来 20*20
    必须写成 40*40
    所以我们设计稿 就需要 扩大两倍，这样量取的时候，量得的尺寸就是 扩大两倍之后的尺寸

2. 等比缩放
    屏幕划分10等分
    750/10=75
    1125/10=112.5
    一份就是1rem, html: font-size 75px 或者是 112.5px