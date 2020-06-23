
// print createBalancedBST([1, 2, 3, 4, 5, 6, 7])
// # 4261357
// #   4
// #  / \
// # 2   6
// #/ \ / \
// #1 3 5 7*/

//Given a sorted list of numbers, change it into a balanced binary search tree. You can assume there will be no duplicate numbers in the list.

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}


function createBalancedBST(nums) {
    //variables
    //start, end
    let start = 0, end = nums.length-1;

    function rec(start, end) {
        //base case
        if (start > end) return null;

        //use midpoint of array as current node
        let mid = Math.floor(start + (end - start) / 2);
        
        let node = new TreeNode(nums[mid]);
        //split array into left and right half. repeat
        node.left = rec(start, mid-1);
        node.right = rec(mid + 1, end);

        return node;
    }
    return rec(0, end);
}

const ans = createBalancedBST([1,2,3,4,5,6,7]);
console.log(ans);
// console.log(ans);
// preorder(ans)
const res = [];
function preorder(root) {
    if (!root) return;
    res.push(root.val);
    preorder(root.left);
    preorder(root.right);
}
preorder(ans);
console.log(res);