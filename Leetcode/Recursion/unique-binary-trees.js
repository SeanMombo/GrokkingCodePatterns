//https://leetcode.com/problems/unique-binary-search-trees-ii/

// 95. Unique Binary Search Trees II
// Medium

// Given an integer n, generate all structurally unique BST's (binary search trees) that store values 1 ... n.

// Example:

// Input: 3
// Output:
// [
//   [1,null,3,2],
//   [3,2,null,1],
//   [3,1,null,null,2],
//   [2,1,3],
//   [1,null,2,null,3]
// ]
// Explanation:
// The above output corresponds to the 5 unique BST's shown below:

//    1         3     3      2      1
//     \       /     /      / \      \
//      3     2     1      1   3      2
//     /     /       \                 \
//    2     1         2                 3




function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
 
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    const result = [];
    
    function helper(node, nums, lis) {
        if (nums.length === 0) {
            result.push(lis.slice());

            return;
        }
        
        for (let i = 0; i < nums.length; i ++) {
            const num = nums[i];
            nums.slice()
            nums.splice(nums.indexOf(num, 1));
            lis.push(node)
            
            if (num < node.val) {
                node.left = new TreeNode(num);
                helper(node.left, nums, lis)
            } else {
                node.right = new TreeNode(num);
                helper(node.right, nums, lis)
            }
            
            lis.pop();
        }
    }
    
    // generate number list
    const nums = [];
    for (let i = 1; i < n+1; i ++) {
        nums.push(i);   
    }
   
    // start recursion with each value, 1-n
    for (let i = 1; i < n+1; i ++) {
        const copy = nums.slice();
        copy.splice(i-1, 1);
        helper(new TreeNode(i), copy, []);
    }
    return result;
};


const ans = generateTrees(3);

for(i of ans) {
    console.log(i)
}