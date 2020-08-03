弹性布局：
弹性容器：设置了display:flex;这个元素为弹性容器，里面的子元素会按照弹性布局的方式进行布局。
弹性子元素：设置了display:flex;的弹性容器的直接子元素为弹性子元素

弹性主轴方向：
    默认主轴方向为从左到右 flex-direction:row;

主轴内容分布：
    居中 justify-content: center;
侧轴内容分布：
    居中 align-items: center;


flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。
flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。
flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。
flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。