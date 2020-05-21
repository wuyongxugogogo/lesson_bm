// 深度: 前序(Root,left,right)、中序(left,Root,right)、后序(left,right,Root)
// 广度: F C E A D
let tree = {
    val:'F',
    left:{
        val:'C',
        left:{
            val:'A',
        },
        right:{
            val:'D',
        },
    },
    right:{
        val:'E'
    }
}
// tree.left.left