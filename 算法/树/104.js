var maxDepth = function(root) {
    let maxdepth = 0;
    function max(node,depth){
        if(!node) return;
        depth = depth + 1;
        if(depth>maxdepth){
            maxdepth = depth;
        }
        max(node.left,depth);
        max(node.right,depth);
    }
    max(root,0);
    return maxdepth;
};

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

console.log(maxDepth(tree))