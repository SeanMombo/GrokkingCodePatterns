//// https://leetcode.com/problems/sum-of-nodes-with-even-valued-grandparent/


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

 
var sumEvenGrandparent = function(root) {
    let ans = 0;
    const dfs = function(root, evenGrandparent, evenParent) {
        if (!root) return 0;
        
        
        let leftSum = dfs(root.left, evenParent, root.val %2 == 0 ? true : false);
        let rightSum = dfs(root.right, evenParent, root.val %2 == 0 ? true : false);
        
        if (evenGrandparent) {
            return root.val + leftSum + rightSum;
        }
    
        return leftSum + rightSum;
    }
    ans = dfs(root, 0, false, false);
    return ans;
};