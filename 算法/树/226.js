var invertTree = function (root) {
    function swap(node){
        if(!node) return;
        [node.left,node.right] = [node.right,node.left];
        swap(node.left);
        swap(node.right);
    }
    swap(root);
    return root;
};

let tree = {
    val: 'F',
    left: {
        val: 'C',
        left: {
            val: 'A',
        },
        right: {
            val: 'D',
        },
    },
    right: {
        val: 'E'
    }
}

console.log(invertTree(tree))