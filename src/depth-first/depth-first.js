const Deque = require('collections/deque'); //http://www.collectionsjs.com

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null; 
  }
};


var find_paths = function(root, sum) {
    var ans = [];
    
    function dfs(root, arr, s) {
        if (!root) return;

        arr.push(root.val);
        s -= root.val;
        if (s === 0 && !root.left && !root.right) {
            ans.push(arr);
            return;
        }
        if (root.left) dfs(root.left, [...arr], s);
        if (root.right) dfs(root.right, [...arr], s);
    }
    dfs(root, [], sum);
    return ans;
};


const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(4);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
let sum = 23,
  result = find_paths(root, sum);
console.log(result)