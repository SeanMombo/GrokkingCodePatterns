
// function TreeNode(val) {
//     this.val = val;
//     this.left = this.right = null;
// }


//// https://leetcode.com/problems/insufficient-nodes-in-root-to-leaf-paths/



var sufficientSubset = function(node, limit, sum = 0) {
    if (!node) return null;

    sum += node.val;
    if (!node.left && !node.right) {
        return sum >= limit ? node : null;
    }
    node.left = sufficientSubset(node.left, limit, sum);
    node.right = sufficientSubset(node.right, limit, sum);
    
    return (node.left || node.right) ? node : null;
};


