// https://leetcode.com/problems/maximum-depth-of-n-ary-tree/
// 559. Maximum Depth of N-ary Tree
// EASY
// Given a n-ary tree, find its maximum depth.

// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value (See examples).

 

// Example 1:



// Input: root = [1,null,3,2,4,null,5,6]
// Output: 3

// Definition for a Node.
function Node(val,children) {
    this.val = val;
    this.children = children;
}

/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (root === null) return root;
    
    let depth = 0;
    function helper(root, d) {
        if (root === null) return;
        
        if (root.children.length === 0) {
            depth = Math.max(depth, d)
            return;
        }
        
        for(let i = 0; i < root.children.length; i++) {
            helper(root.children[i], d + 1);
        }
    }
    
    helper(root, 1);
    return depth;
};

const tree = new Node(1, [])

tree.children.push(
    new Node(3, [
        new Node(5, []),
        new Node(6, [])
    ]),
    new Node(2, []),
    new Node(4, []),
)

console.log(maxDepth(tree))