//// https://leetcode.com/problems/maximum-depth-of-binary-tree/submissions/

var maxDepth = function(root) {
    if (!root) return 0;
    
    return Math.max(maxDepth(root.left)+1,maxDepth(root.right)+1);
};